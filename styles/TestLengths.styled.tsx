import styled from "styled-components"

export const TestLengthContainer = styled.div`
  display: flex;
  max-width: 25rem;
  padding: 10vh 0 2.5vh 1rem;
`

export const TestLength = styled.div`
  font-family: "Source Sans Pro", sans-serif;
  color: white;
  background: #0077b6;
  padding: 0.35rem 0.9rem;
  margin: 0 0.1rem;
  /* font-size: 0.9rem; */
  cursor: pointer;

  :first-child {
    border-radius: 5px 0 0 5px;
  }

  :last-child {
    border-radius: 0 5px 5px 0;
  }

  :hover {
    background: #1e8cc7;
  }
`
