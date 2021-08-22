import React,{useEffect} from 'react'
import styled from 'styled-components'
import {faUserPlus , faPlus} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';

const BoxHeader = styled.div`
  display: flex;
  justify-content: center;
  height: fit-content;
  padding: 5px; 

  > table{
    width: 300px;

    > tr > td {
        padding: 0 7px;
  }   
  }
`
const More = styled.button`
    background: none;
    color: white;
    &:hover {
    

      }

`
const Display = styled.div`
border: solid white 1px;
height: fit-content;
width: 310px;
`
const RecruitTitle = styled.div`
padding: 5px;
display: flex;
justify-content: center;
> div {
    margin-left: 15px;
}
&:hover {
    background: red;
  }
`

const Recruit = ({
    ressource,
    setGold,
    setIron,
    setGas,
    setSoldier,
    setCivil,
    soldier,
    limit,
    testSoldier,
    setTestSoldier,
    hpMaxSoldier}) =>{


    const startCreateName0 = ["vi","di","rai","flo","oli","ale","fran","sil","domi","sve","ste","ana","anas","alla","lau","li"]
    const startCreateName1 = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v"]
    const startCreateName2 = ["ian","ier","andre","ue","er","dre","co","a","u"]
    const [displayRecruit, setDisplayRecruit ] = useState(false)
    let listDeSoldat = []
  


    useEffect(() => {
        
  
      for(let i = 0; i < ressource.soldier; i++){
          listDeSoldat.push({name: 
              startCreateName0[Math.floor(Math.random()*startCreateName0.length)]+
              startCreateName1[Math.floor(Math.random()*startCreateName1.length)]+
              startCreateName2[Math.floor(Math.random()*startCreateName2.length)],
               atk : 2,def: 2,hp: hpMaxSoldier,avatar: Math.floor(Math.random()*2)})
      }
      setTestSoldier(listDeSoldat)
      
  }, [])
    const display = () => {
        if(displayRecruit){
            setDisplayRecruit(false)
        }else{
            setDisplayRecruit(true)
        }
    }

    const buyShop = (goldPrice,ironPrice,gasPrice,object,increment,condition_limit,titleBuy) =>{
        if(ressource.gold > goldPrice && ressource.iron > ironPrice && ressource.gas > gasPrice && increment < condition_limit ){
            object(increment + 1 )
            setGold(ressource.gold - goldPrice )
            setIron(ressource.iron - ironPrice )
            setGas(ressource.gas - gasPrice )
        }
        if(titleBuy == "Buy Soldier" && soldier < condition_limit){
            console.log('condition_limit:', condition_limit)
            let moreSoldat =  [...testSoldier] 
            moreSoldat.push({name: 
                startCreateName0[Math.floor(Math.random()*startCreateName0.length)]+
                startCreateName1[Math.floor(Math.random()*startCreateName1.length)]+
                startCreateName2[Math.floor(Math.random()*startCreateName2.length)],
                 atk : 2,def: 2,hp: hpMaxSoldier,avatar: Math.floor(Math.random()*2) })
            setTestSoldier(moreSoldat)
        }
        
    }

    let buyList = [
        {title : "Buy civil",gold : 20, iron: 0,gas : 0,recruit: setCivil, ressource: ressource.civil,limit: limit.civil },
        {title : "Buy Soldier",gold : 10, iron: 10,gas : 5,recruit: setSoldier,ressource: ressource.soldier,limit: limit.soldier},
    ]  
    return(
        <>
        <Display>
            <RecruitTitle onClick={display}><FontAwesomeIcon icon={faUserPlus} /> <div>Recruit</div> </RecruitTitle>
        {displayRecruit ?         
        <BoxHeader>
        <table>
        {buyList.map((list)=>(
                         
            <tr>
                <td>{list.title}</td>
                <td style ={{color : "gold"}}>{list.gold}</td>
                <td style={{color : "rgb(168, 168, 168)"}}>{list.iron}</td>
                <td style={{color : "yellowgreen"}}>{list.gas}</td>
                <td><More onClick={()=>buyShop(list.gold,list.iron,list.gas,list.recruit,list.ressource,list.limit,list.title)}><FontAwesomeIcon icon={faPlus} /></More></td>
            </tr>
        ))}
        </table>
    </BoxHeader> : <></> 
}
        
        </Display>
        </>
    )
}

export default Recruit