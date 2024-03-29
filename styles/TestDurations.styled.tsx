import styled from "styled-components"

interface TestDurationProps {
  selected: boolean
}

export const DurationButtonContainer = styled.div`
  display: flex;
  padding-bottom: 2rem;
`

export const DurationButton = styled.button<TestDurationProps>`
  outline: none;
  background: none;
  border: none;
  margin: 0 1.5rem;
  color: ${({ selected }) => (selected ? "var(--Orange)" : "var(--Black)")};
  font-weight: ${({ selected }) => (selected ? "800" : "600")};
  font-size: 1.3vw;
  cursor: pointer;
  &:hover {
    transition: all 0.5s ease;
  }
`
