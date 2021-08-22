import React , { useState } from 'react'
import styled from 'styled-components'
import SoldierLarge from './unit/soldier/soldierLarge'
import SoldierList from './unit/soldier/soldierList'

import Menus from './displayMenusSoldier/menuSoldier'

const AllDisplay = styled.div`
        display: flex;
        flex-wrap: wrap;
        margin-top: 10px;
`
const BoxSoldier = styled.div`
        width: fit-content;
        transition-duration: 2s;
`
const ListDisplay = styled.div`
display: flex;
flex-wrap: wrap;
margin-top: 10px;
`

const Fight = ({soldier,hpMaxSoldier,testSoldier,setTestSoldier,setSoldier}) =>{
    
    const [position, setPosition] = useState(false)

    const test = () =>{   // Test de méthode pour supprimer un soldat quand il meurt
                if(soldier > 0){
                    let ids = [...testSoldier];
                    let rand = Math.floor(Math.random()*ids.length)
                    ids[rand].hp -= 2;
                    // console.log("ids[rand]", ids[rand])
                    if(ids[rand].hp <= 0){
                        for (let n = 0 ; n < ids.length ; n++) {
                            if (ids[n].name == ids[rand].name) {
                                let removedObject = ids.splice(n,1);
                                removedObject = null;
                                setSoldier(soldier -= 1)
    
                              break;
                            }
                        }
                    }
                    // console.log('ids:', ids)
                    setTestSoldier(ids)
                    // console.log(testSoldier);
                }
    }
    return(
        <>
        <Menus 
        setPosition={setPosition}
        position={position}
        />
        {position === true ?
         <ListDisplay>
         {testSoldier.map((unit)=>(
             <BoxSoldier> 
             <SoldierList
                 hpMaxSoldier={hpMaxSoldier}
                 soldier={soldier}
                 name={unit.name}
                 HP={unit.hp}
                 Atk={unit.atk}
                 def={unit.def}
               
             />
             </BoxSoldier> 
         ))}
         </ListDisplay> 
         : 
          
         <AllDisplay>
         {testSoldier.map((unit)=>(
             <BoxSoldier> 
             <SoldierLarge
                 hpMaxSoldier={hpMaxSoldier}
                 soldier={soldier}
                 name={unit.name}
                 HP={unit.hp}
                 Atk={unit.atk}
                 def={unit.def}
                 avatar={unit.avatar}
             />
             </BoxSoldier> 
         ))}

     </AllDisplay>}

            {/* <button onClick={test}>test</button> */}
            <button onClick={test}>Survive one night</button>

        </>
    )
}

export default Fight