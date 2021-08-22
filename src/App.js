import './App.css'
import styled from 'styled-components'
import Ressource from './components/ressource'
import Worker from './components/worker'
import Recruit from './components/recruit'
import Building from './components/building'
import Fight from './components/fight'
import React, { useState, useEffect } from 'react'


// import store from './store/'
// import { Provider } from 'react-redux'

const Display = styled.div`
  
  flex-wrap: wrap;
  justify-content: space-around;
`
const FirtsDisplay = styled.div`
position: absolute`
const Wallpaper = styled.div`

height: 100vh;

`

const App = () => {
  const [gold, setGold] = useState(300)
  const [iron, setIron] = useState(300)
  const [gas, setGas] = useState(300)
  const [civil, setCivil] = useState(20)
  const [days, setDays] = useState(1)
  const [soldier, setSoldier] = useState(10)

  const [goldWorker, setGoldWorker] = useState(0)
  const [ironWorker, setIronWorker] = useState(0)
  const [gasWorker, setGasWorker] = useState(0)

  const [limitHouseWorker, setlimitHouseWorker] = useState(20)
  const [limitGoldWorker, setlimitGoldWorker] = useState(10)
  const [limitIronWorker, setlimitIronWorker] = useState(10)
  const [limitGasWorker, setlimitGasWorker] = useState(5)
  const [limitSoldier, setlimitSoldier] = useState(20)
  const [hpMaxSoldier, setHpMaxSoldier] = useState(4)
  const [testSoldier, setTestSoldier]=useState([])


  const [maison, setMaison] = useState({
    title: 'house',
    gold: 25,
    iron: 25,
    gas: 5,
    quantity: 1,
    upPrice: 1,
    upLimit: limitHouseWorker,
    setUpLimit: setlimitHouseWorker,
  })
  const [gold_farm, setGold_farm] = useState({
    title: 'gold farm',
    gold: 50,
    iron: 50,
    gas: 0,
    quantity: 1,
    upPrice: 1,
    upLimit: limitGoldWorker,
    setUpLimit: setlimitGoldWorker,
  })
  const [iron_farm, setIron_farm] = useState({
    title: 'iron farm',
    gold: 50,
    iron: 50,
    gas: 0,
    quantity: 1,
    upPrice: 1,
    upLimit: limitIronWorker,
    setUpLimit: setlimitIronWorker,
  })
  const [gas_farm, setGas_farm] = useState({
    title: 'gas farm',
    gold: 50,
    iron: 50,
    gas: 40,
    quantity: 1,
    upPrice: 1,
    upLimit: limitGasWorker,
    setUpLimit: setlimitGasWorker,
  })
  const [soldier_farm, setSoldier_farm] = useState({
    title: 'soldier farm',
    gold: 200,
    iron: 200,
    gas: 150,
    quantity: 1,
    upPrice: 1,
    upLimit: limitSoldier,
    setUpLimit: setlimitSoldier,
  })

  
  return (
    // <Provider store={store}>
    <>
      <header></header>

      <body>
        <Wallpaper>

      <FirtsDisplay>
        <Ressource
         ressource={{ gold, iron, gas, civil, days, soldier }}
         limit={{limitHouseWorker}}

         />
        <Display>
          <Worker
            limit={{
              gold: limitGoldWorker,
              iron: limitIronWorker,
              gas: limitGasWorker,
              soldier: limitSoldier,
              limitHouseWorker: limitHouseWorker
            }}
            worker={{ gold: goldWorker, iron: ironWorker, gas: gasWorker }}
            ressource={{ civil: civil, soldier: soldier }}
            setCivil={setCivil}
            setGoldWorker={setGoldWorker}
            setIronWorker={setIronWorker}
            setGasWorker={setGasWorker}
            setSoldier={setSoldier}
          />

          <Recruit
            ressource={{ gold, iron, gas, civil, days, soldier }}
            limit={{
              civil: limitHouseWorker,  
              soldier: limitSoldier,
            }}
            setGold={setGold}
            setIron={setIron}
            setGas={setGas}
            setCivil={setCivil}
            setSoldier={setSoldier}
            testSoldier={testSoldier}
            setTestSoldier={setTestSoldier}
            soldier={soldier}
            hpMaxSoldier={hpMaxSoldier}
          />

          <Building
            ressource={{ gold, iron, gas, civil, days, soldier }}
            build={{ maison, gold_farm, iron_farm, gas_farm, soldier_farm }}
            setFunc={{
              setGold,
              setIron,
              setGas,
              setMaison,
              setGold_farm,
              setIron_farm,
              setGas_farm,
              setSoldier_farm,
              setlimitGoldWorker,
              setlimitIronWorker,
              setlimitGasWorker,
              setlimitSoldier,
            }}
          />
        </Display>
        <Fight
        hpMaxSoldier= {hpMaxSoldier}
        soldier={soldier}
        testSoldier={testSoldier}
        setSoldier={setSoldier}
        setTestSoldier={setTestSoldier}
        />
        </FirtsDisplay>
          <div>.</div>
          <div>.</div>
          <div>.</div>
          <div>.</div>
          <div>.</div>
        </Wallpaper>
      </body>
    </>
    // </Provider>
  )
}

export default App
