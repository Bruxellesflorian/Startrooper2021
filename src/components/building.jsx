import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { faCity, faPlus} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Display = styled.div`
  text-align: center;
  border: solid white 1px;
  width: 300px;
  padding: 5px;
  height: fit-content;


  > tr > td {
    text-align: center;
    padding: 5px;
  }
`
const BuildingTitle = styled.div`
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

const More = styled.button`
    background: none;
    color: white;
    &:hover {
    

      }

`

const Building = ({ ressource, build, setFunc }) => {

  const [displayBuilding, setDisplayBuilding ] = useState(false)


  let buildingList = [
    build.maison,
    build.gold_farm,
    build.iron_farm,
    build.gas_farm,
    build.soldier_farm,
  ]

  let setbuildingList = [
    { name: 'house', funcSet: setFunc.setMaison },
    { name: 'gold farm', funcSet: setFunc.setGold_farm },
    { name: 'iron farm', funcSet: setFunc.setIron_farm },
    { name: 'gas farm', funcSet: setFunc.setGas_farm },
    { name: 'soldier farm', funcSet: setFunc.setSoldier_farm },
  ]

  const display = () => {
    if(displayBuilding){
        setDisplayBuilding(false)
    }else{
        setDisplayBuilding(true)
    }
}

  const buy = (buildingName) => {
    for (let i = 0; i < setbuildingList.length; i++) {
      if (buildingName === setbuildingList[i].name) {
        if (
          buildingList[i].gold <= ressource.gold &&
          buildingList[i].iron <= ressource.iron &&
          buildingList[i].gas <= ressource.gas
        ) {
          setFunc.setGold(ressource.gold - buildingList[i].gold)
          setFunc.setIron(ressource.iron - buildingList[i].iron)
          setFunc.setGas(ressource.gas - buildingList[i].gas)
          console.log('buildingList[i]:', buildingList[i])
          buildingList[i].setUpLimit((buildingList[i].upLimit += 5))
          setbuildingList[i].funcSet({...buildingList[i],
            quantity: buildingList[i].quantity + 1,
            upPrice: buildingList[i].upPrice + 0.08,
            gold: (buildingList[i].gold = Math.floor(
              buildingList[i].gold * buildingList[i].upPrice
            )),
            iron: (buildingList[i].iron = Math.floor(
              buildingList[i].iron * buildingList[i].upPrice
            )),
            gas: (buildingList[i].gas = Math.floor(
              buildingList[i].gas * buildingList[i].upPrice
            )),
          })

          if (buildingName === 'gold_farm') {
          }
        }
      }
    }
  }

  return (
    <>
      <Display>
        <BuildingTitle onClick={display}><FontAwesomeIcon icon={faCity} /><div>Building</div> </BuildingTitle>
        {displayBuilding ? <>
          {/* <tr>
          <td>Building</td>
          <td>Gold</td>
          <td>Iron</td>
          <td>Gas</td>
          <td>Quantity</td>
        </tr> */}
        {buildingList.map((build) => (
          <tr>
            <td>{build.title}</td>
            <td style ={{color : "gold"}}>{build.gold}</td>
            <td style={{color : "rgb(168, 168, 168)"}}>{build.iron}</td>
            <td style={{color : "yellowgreen"}}>{build.gas}</td>
            <td>{build.quantity}</td>
            <td>
           
              <More onClick={() => buy(build.title)}> <FontAwesomeIcon icon={faPlus} /></More>
            </td>
          </tr>
        ))}</> : <></>}

      </Display>
    </>
  )
}

export default Building
