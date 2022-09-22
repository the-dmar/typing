import styled from "styled-components"
// @import url("https://fonts.googleapis.com/css2?family=Red+Hat+Mono:wght@400;600&display=swap");

interface LetterProps {
  color: string
}

export const GuidedTextContainer = styled.div`
  padding: 5vh 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 4px;
`

export const HiddenInput = styled.input`
  outline: none;
  border: none;
  caret-color: transparent;
  position: absolute;
  top: -10000px;
  left: -10000px;
`

export const LetterWrapper = styled.p`
  margin: 0 2vw;
`

export const Letter = styled.span<LetterProps>`
  color: ${props => props.color};
  font-family: "Red Hat Mono", monospace;
  font-size: 2.1vw;
  border-bottom: ${props =>
    props.color === "#0077b6" ? "3px solid #0077b6" : "none"};
  margin-bottom: 0.5rem;
`
