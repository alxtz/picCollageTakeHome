import React from 'react';
import styled from 'styled-components'

class Movie extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Root>
        <Title>{ this.props.title }</Title>
        <Year>Y: { this.props.year }</Year>
        <Poster src={ this.props.posterUrl === 'N/A' ? 'https://static.amazon.jobs/teams/53/thumbnails/IMDb_Jobs_Header_Mobile.jpg?1501027253' : this.props.posterUrl } alt="no poster available"></Poster>
      </Root>
    );
  }
}

const Root = styled.div`
  width: 400px;
  height: 200px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(238, 238, 238);

  &:last-child {
    border: 0;
  }
`

const Title = styled.div`
  color: rgb(55, 171, 46);
  font-size: 25px;
  flex-basis: 45%;
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 10px;
`

const Year = styled.div`
  color: rgb(74, 74, 74);
  width: 20%;
`

const Poster = styled.img`
  height: 150px;
  border-radius: 4px;
  width: 25%;
`

export default Movie;
