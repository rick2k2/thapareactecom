import React from 'react'
import styled from 'styled-components'

const Home = () => {
  return (
    <Wrapper>
     <h1>Welcome to Home page</h1>
    </Wrapper>
  )
}

const Wrapper = styled.section`
 background-color: ${({theme})=> theme.colors.bg};
 width:50rem;
 height:50rem;
`;

export default Home
