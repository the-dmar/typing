import styled from "styled-components"

interface TestLengthProps {
  color: string
}

export const TestLengthContainer = styled.div`
  display: flex;
  max-width: 25rem;
  margin-left: 2vw;
`

export const TestLength = styled.div<TestLengthProps>`
  font-family: "Source Sans Pro", sans-serif;
  color: white;
  background: #0077b6;
  background: ${props => props.color};
  padding: 0.35rem 0.9rem;
  margin-right: 0.3rem;
  cursor: pointer;
  font-size: 1.1vw;

  :first-child {
    border-radius: 5px 0 0 5px;
  }

  :last-child {
    border-radius: 0 5px 5px 0;
  }

  :hover {
    background: ${({ color }) =>
      color === "#0077b6" ? "#1e8cc7" : "#f56587;"};
  }
`
