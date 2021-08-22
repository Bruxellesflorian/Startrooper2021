import React from 'react'
import styled from 'styled-components'
import Soldat0 from '../../../image/soldat0.gif'
import Soldat1 from '../../../image/soldat1.gif'

const AllSoldier = styled.div`
  margin: 3px 3px 0 0;     
  transition-duration: 0.5s;
  width: 100px;
  border: inset white 1px;
  &:hover {
    background: black;
  }
`



const LifeBar = styled.div`
  position: relative;
  width: 100%; 
`
const BarProgress = styled.div`
  height: 10px;
  background: green;
  transition-duration: 0.2s;
  
`

const Flex = styled.div`
  display: flex;
  > div {
    height: 20px;
  }
`

const Hp = styled.div`
  position: absolute;
  top: 0px;
  left: 45%;
  font-size: smaller;

`
const BoxStatut = styled.div`
  width: 100%;
  font-size: smaller;
  `  

  const Soldier = ({ name, HP, Atk, def,hpMaxSoldier,avatar }) => {
  
  const list = [Soldat0, Soldat1]

  return (
    <AllSoldier>
      <BoxStatut>
        <div>{name}</div>
        <div>
          <Flex>
  
            <LifeBar>
              <BarProgress style={{ width:((100 / hpMaxSoldier) * HP  + '%')}}/>
              <Hp>{HP}</Hp>
            </LifeBar>
          </Flex>
        </div>
      </BoxStatut>


      
    </AllSoldier>
  )
}

export default Soldier
