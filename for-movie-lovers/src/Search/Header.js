import React from 'react';
import styled from 'styled-components'

class Header extends React.Component {
  render() {
    return (
      <Container>
        <Title>Find me a movie</Title>
      </Container>
    )
  }
}

const Container = styled.div`
  height: 35px;
  background: #2e9127;
  font-size: 14px;
  color: white;
  letter-spacing: 0.05em;
  font-weight: bold;
  line-height: 1.42857;
  font-family: proxima, BloggerSans, sans-serif;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  width: 300px;
  border-radius: 8px 8px 0px 0px;
`

const Title = styled.span`
  margin-left: 18px;
`

export default Header;
