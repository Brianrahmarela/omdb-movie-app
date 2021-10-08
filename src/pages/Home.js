import React from 'react';
// import CounterBtn from '../components/CounterBtn';
import ListDataMovies from '../components/ListDataMovies';
import { Container } from "react-bootstrap";


function Home() {
  return (
    <Container>

    <div style={{marginTop: 80}}>
      <h1>Hal Home</h1>
      {/* <CounterBtn/> */}
      <ListDataMovies/>
    </div>
    </Container>
  )
}

export default Home
