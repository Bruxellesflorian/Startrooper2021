import React, {useState} from 'react'
import styled from 'styled-components'
import { faUser , faPlus} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const BoxHeader = styled.div`
  display: flex;
  justify-content: center;
`

const Display = styled.div`
border: solid white 1px;
height: fit-content;
width: fit-content;
`

const Pop = styled.div`
  height: fit-content;
  display: flex;
  width: 300px;
  padding: 5px;
  justify-content: space-around;
  transition-duration: 0.1s;
  &:hover {
    background: red;
  }
`
const CounterPop = styled.div`
    padding: 0 3px;

`
const More = styled.button`
    background: none;
    color: white;
    &:hover {
    

      }

`


const Worker = ({limit,worker,setGoldWorker,setIronWorker,setGasWorker,setCivil,setSoldier,ressource}) => {
    
    const [open, setOpen]=useState(false)

    const addMore = (ressource,addRessource,limitOfRessource,civil) =>{

        if(ressource < limitOfRessource && civil > 0){
            addRessource(ressource + 1)
            setCivil(civil - 1)
            
        }
      }

    
const openMenus = () =>{
    if(!open){
        setOpen(true)
    }else{
        setOpen(false)
    }
}

return(
    <>
    <Display>
    <Pop onClick={openMenus}>
     
            <div style={{ fontSize : "15px"}}> <div><FontAwesomeIcon icon={faUser} /></div> </div>
            <div>Population</div>
            {ressource.civil === 0 ? 
            <CounterPop>{ressource.civil}</CounterPop>
            :
            <CounterPop style={{ background : "red"}}>{ressource.civil}</CounterPop>

        }
    
        / {limit.limitHouseWorker}
    </Pop>
    {open ?     
    <BoxHeader>
    <table>
        <tr>
            <td>Gold worker</td>
            <td>{worker.gold}/{limit.gold}</td>
            <td><More onClick={()=>addMore(worker.gold,setGoldWorker,limit.gold,ressource.civil)}><FontAwesomeIcon icon={faPlus} /></More></td>
        </tr>
        <tr>
            <td>Iron worker</td>
            <td>{worker.iron}/{limit.iron}</td>
            <td><More onClick={()=>addMore(worker.iron,setIronWorker,limit.iron,ressource.civil)}><FontAwesomeIcon icon={faPlus} /></More></td>

        </tr>
        <tr>
            <td>Gas worker</td>
            <td>{worker.gas}/{limit.gas}</td>
            <td><More onClick={()=>addMore(worker.gas,setGasWorker,limit.gas,ressource.civil)}><FontAwesomeIcon icon={faPlus} /></More></td>

        </tr>
        <tr>
            <td>Soldier</td>
            <td>{ressource.soldier}/{limit.soldier}</td>
            {/* <td><button onClick={()=>addMore(ressource.soldier,setSoldier,limit.soldier,ressource.civil)}>+</button></td> */}
        </tr>

    </table>
    </BoxHeader>
    :
    <></>}

    </Display>
    </>
    )
}

export default Worker