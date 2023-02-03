import styled from 'styled-components'

export const AppContainer = styled.div`
  width: 100vw;
  background-image: linear-gradient(to top, #0b0c1e, #3c2940);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
`

export const Img = styled.img`
  width: 100px;
  height: 100px;
`
export const Para = styled.p`
  font-family: Roboto;
  font-size: 20px;
  color: white;
`

export const Button = styled.button`
  background-color: #06b6d4;
  border-radius: 10px;
  width: 100px;
  height: 40px;
  color: white;
  margin-top: 100px;
  border: 0px;
  outline: none;
  cursor: pointer;
`
