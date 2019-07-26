import React from 'react';
import styled from 'styled-components'

import axios from 'axios'
import cookie from 'js-cookie'

const RESULT_STATE = {
  HAS_RESULT: 'HAS_RESULT',
  TOO_MANY: 'HAS_RESULT',
  TOO_MANY: 'HAS_RESULT',
}

class Input extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    recentSearchs: [],
    inputValue: '',
    isInputFocused: false,
    results: [],
    // showAutocomplete: false
    showAutocomplete: false
  }

  requestSource = null

  onInputValueChange(str) {
    this.setState({
      recentSearchs: JSON.parse(cookie.get('recent-searchs') || '[]')
    })

    this.setState({ inputValue: str })

    // Be aware of fast-typing scenario, the result should match the current text in the search bar.
    const { CancelToken } = axios;
    const source = CancelToken.source()

    if (this.requestSource !== null) {
      this.requestSource.cancel('cancel by ' + str)
    }

    this.requestSource = source

    axios.get(`https://www.omdbapi.com/?s=${str}&apikey=68def545`, {
      cancelToken: source.token
    })
      .then(resp => {
        console.log(resp.data);
        this.setState({
          results: resp.data.Search || []
        })
      })
  }

  render() {
    return (
      <Container>
        <SearchInput
          onFocus={ e => this.setState({ isInputFocused: true, showAutocomplete: true }) }
          onBlur={ e => this.setState({ isInputFocused: false }) }
          value={ this.state.inputValue }
          onChange={ (e) => this.onInputValueChange(e.target.value) }
        >
        </SearchInput>

        <Go
          onClick={
            e => this.props.onClickSearch({ str: this.state.inputValue })
          }
        >
          GO
        </Go>

        {/* { this.state.isInputFocused && (
          <AutoComplete>
            <AutoCompleteTitle>Recent Searchs</AutoCompleteTitle>
            <ResultTitle>Recent Searchs</ResultTitle>
          </AutoComplete>
        )} */}

        { this.state.showAutocomplete && (
          <AutoComplete>
            <ResultTitle>Results</ResultTitle>
            {
              this.state.results.map((item, index) => {
                return (
                  <ResultItem
                    key={ index } // imDB id is not uniq
                    onClick={ () => {
                        console.log('onClick')
                        this.setState({ inputValue: item.Title }, () => {
                          console.log(this.state.inputValue)
                          this.onInputValueChange(this.state.inputValue)
                        })
                      }
                    }
                  >
                    {item.Title}
                  </ResultItem>
                )
              })
            }

            <ResultTitle>Recent Searchs</ResultTitle>
            {
              this.state.recentSearchs.filter(str => {
                return str.toLowerCase().includes(this.state.inputValue.toLowerCase())
              }).map((item, index) => {
                return (
                  <ResultItem
                    key={ index }
                    onClick={ () => {
                        this.setState({ inputValue: item }, () => {
                          this.onInputValueChange(item)
                        })
                      }
                    }
                  >
                    {item}
                  </ResultItem>
                )
              })
            }
          </AutoComplete>)
        }
      </Container>
    )
  }
}

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`
const SearchInput = styled.input`
  font-family: proxima, BloggerSans, sans-serif;
  width: 200px;
  height: 40px;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0;

  outline: none !important;
  padding-left: 20px;
  font-size: 18px;

  &:focus {
    border: 1px solid rgba(75, 135, 175);
  }
`

const AutoComplete = styled.label`
  position: absolute;
  width: 222px;
  top: 58px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 8px 12px 0px;
  border-radius: 0px 0px 6px 6px;
  background: white;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  min-height: 50px;
  max-height: 200px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-bottom: 5px;
`

const AutoCompleteTitle = styled.div`
  border-bottom: 1px solid rgb(55, 171, 46);
  margin-left: 15px;
  color: rgb(46, 145, 39);
  padding-top: 10px;
  padding-bottom: 5px;
`

const ResultTitle = styled.div`
  border-bottom: 1px solid rgb(55, 171, 46);
  margin-left: 15px;
  color: rgb(46, 145, 39);
  padding-top: 10px;
  padding-bottom: 5px;
  margin-bottom: 5px;
`

const Go = styled.button`
  width: 40px;
  height: 40px;
  margin-left: 10px;
`

const ResultItem = styled.div`
  color: rgb(74, 74, 74);
  width: 100%;
  padding-left: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;

  &:hover {
    background: #eeeeee;
  }
`

export default Input;
