import React from 'react';
import styled from 'styled-components'

import Search from './Search/index'
import Result from './Result/index'

import axios from 'axios'
import cookie from 'js-cookie'

class App extends React.Component {
  state = {
    searchResult: [],
    currentPage: 0,
    // currentPage: 1,
  }

  search({ str }) {
    const recentSearchs = JSON.parse(cookie.get('recent-searchs') || '[]')
    if (!recentSearchs.includes(str)) {
      cookie.set('recent-searchs', [...recentSearchs, str])
    }

    const url = 'https://www.omdbapi.com'
    axios.get(`${url}/?s=${str}&apikey=68def545`)
      .then(resp => {
        if (resp.data.totalResults) {
          const pages = Math.ceil(resp.data.totalResults / 10)
          const promises = []

          for (let i = 1; i <= pages; i++) {
            promises.push(axios.get(`${url}/?s=${str}&apikey=68def545&page=${i}`))
          }

          let allSearchResult

          Promise.all(promises)
            .then(result => {
              allSearchResult = result.reduce((accu, curr) => {
                accu = [...accu, ...curr.data.Search]
                return accu
              }, [])

              console.log('allSearchResult', allSearchResult)

              this.setState({
                searchResult: allSearchResult
              })
            })
        }
      })
  }

  render() {
    return (
      <Pager>
        <SearchPage>
          <Search
            onClickSearch={({ str }) => this.search({ str }) }
          />
        </SearchPage>
        <ResultPage>
          <Result
            list={this.state.searchResult}
          >
          </Result>
        </ResultPage>
      </Pager>
    );
  }
}

const Pager = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`

const SearchPage = styled.div`
  background: #37ab2e;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ResultPage = styled.div`
  background: #37ab2e;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
`

export default App;
