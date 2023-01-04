import React from 'react'
import styled from 'styled-components'

const About = () => {
  return (
    <Wrapper>
      <h1>Welcome to About page</h1>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width:90rem;
  height:50rem;
  background-color: ${({theme})=>theme.colors.bg};
`;

export default About
