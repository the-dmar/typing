import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5vh 2rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 4px;
  margin: 1rem 0 2rem 0;
`

export const Header = styled.div`
  font-size: 2.8vw;
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
  font-size: 1.2vw;
`

export const Statistic = styled.span`
  margin-left: 0.4rem;
  color: #ef476f;
`

export const RestartButton = styled.button`
  margin-left: 0.4rem;
  background: #0077b6;
  border: none;
  border-radius: 5px;
  padding: 0.35rem 0.9rem;
  color: white;
  font-size: 1.4rem;
  cursor: pointer;

  :hover {
    background: "#1e8cc7";
  }
`
