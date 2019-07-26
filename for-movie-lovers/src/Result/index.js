import React from 'react';
import styled from 'styled-components'

import Movie from './Movie'

class Result extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Root>
        <Container>
          <Title>Suggested Movies</Title>
          <Results>
            {
              this.props.list.map((item, index) => {
                return (
                  <Movie
                    title={ item.Title }
                    year={ item.Year }
                    posterUrl={ item.Poster }
                    key={ index } // imDB id is not uniq
                  />
                )
              })
            }
          </Results>
        </Container>
      </Root>
    );
  }
}

const Root = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(55, 171, 46);
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Container = styled.div`
  width: 900px;
  max-width: 85%;
  min-width: 500px;
  padding-bottom: 100px;
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.div`
  font-size: 18px;
  color: white;
  padding-bottom: 20px;
`

const Results = styled.div`
  width: 400px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: white;
`

export default Result;
