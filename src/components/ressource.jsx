import React from 'react'
import styled from 'styled-components'

const BoxHeader = styled.div`
  display: flex;
  justify-content: center;
  > div {
      margin : 10px;
  }
`
const Center = styled.div`
text-align: center` 

const Display = styled.div`
`

const Title = styled.div`
font-size: 50px`

const Ressource = ({ressource,limit}) =>{

return (
    <>
    <Display>
    <Title>StarTrooper</Title>
    <BoxHeader>
        <div>  
            <div style={{color : "gold"}}>Gold</div>
            <Center>{ressource.gold}</Center>
        </div>


        <div>
            <div style={{color : "rgb(168, 168, 168)"}}>Iron</div>
            <Center>{ressource.iron}</Center>
        </div>
        <div>
            <div style={{color : "yellowgreen"}}>Gas</div>
            <Center>{ressource.gas}</Center> 
        </div>

    </BoxHeader> 

    <BoxHeader>
        <div>
            <div>Soldier</div>
            <Center>{ressource.soldier}</Center>
        </div>
         <div>
            <div>Days</div> 
            <Center>{ressource.days}</Center>
         </div>
    </BoxHeader>
    </Display>
    </>
)
}

export default Ressource