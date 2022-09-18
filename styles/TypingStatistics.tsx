import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5vh 2rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 4px;
`

export const Header = styled.div`
  font-size: 2rem;
  font-weight: 500;
  color: #0077b6;
  text-align: center;
  padding-bottom: 3rem;
`

export const StatisticWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`

export const StatisticLabel = styled.div`
  color: #6c757d;
`

export const Statistic = styled.span`
  margin-left: 0.4rem;
  color: #ef476f;
`
