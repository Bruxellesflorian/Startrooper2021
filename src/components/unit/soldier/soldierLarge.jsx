import React from 'react'
import styled from 'styled-components'
import Soldat0 from '../../../image/soldat0.gif'
import Soldat1 from '../../../image/soldat1.gif'

const AllSoldier = styled.div`
margin: 5px 5px 0 0;     

  transition-duration: 0.5s;
  width: 250px;
  border: inset white 1px;
  padding: 5px;
  &:hover {
    background: black;
  }
`
const Avatar = styled.div`
background-repeat: no-repeat;
background-size: cover;
image-rendering: pixelated;
width: 100px;
height: 70px;
margin: 0 10px 0 0;`


const LifeBar = styled.div`
  position: relative;
  width: 100%;
  height: 20px;
`
const BarProgress = styled.div`
  height: 20px;
  background: green;
  transition-duration: 0.2s;
`

const Flex = styled.div`
  display: flex;
  > div {
    height: 20px;
  }
`
const FlexStat = styled.div`
  display: flex;
  justify-content: space-around;
`

const Hp = styled.div`
  position: absolute;
  top: 0px;
  left: 45%;
`
const Regroup = styled.div`
  display: flex
  `
const BoxStatut = styled.div`
  width: 100%;
  `  

  const Soldier = ({ name, HP, Atk, def,hpMaxSoldier,avatar }) => {
  
  const list = [Soldat0, Soldat1]

  return (
    <AllSoldier>
      <Regroup>
      <Avatar 
      style={{ backgroundImage:`url(${list[avatar]})` }}/>
      <BoxStatut>
        <div>Name: {name}</div>
        <div>
          <Flex>
            <div>HP:</div>
            <LifeBar>
              <BarProgress
                style={{ width:
                  ((100 / hpMaxSoldier) * HP  + '%')
                }}
                
              ></BarProgress>
              <Hp>{HP}</Hp>
            </LifeBar>
          </Flex>
        </div>
      </BoxStatut>
      </Regroup>
        <FlexStat>
          <div>Atk:{Atk}</div>
          <div>Def: {def}</div>
        </FlexStat>

      
    </AllSoldier>
  )
}

export default Soldier
