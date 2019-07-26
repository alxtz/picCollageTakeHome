import React from 'react';
import styled from 'styled-components'

import Header from './Header'
import Input from './Input'

class Search extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Container>
        <Header></Header>
        <Input onClickSearch={ this.props.onClickSearch }></Input>
      </Container>
    )
  }
}

const Container = styled.div`
  background: white;
  width: 300px;
  height: 112px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default Search;
