import React, { useEffect, useState } from 'react'
import {
  ScrollView,
} from 'react-native'
import SampleComponent from './pages/SampleComponent'
import StylingComponent from './pages/StylingComponent'
import FlexBox from './pages/FlexBox'
import Position from './pages/Position'
import PropsDinamis from './pages/PropsDinamis'
import StateDinamis from './pages/StateDinamis'
import Communication from './pages/Communication'
import BasicJavascript from './pages/BasicJavascript'

function App() {
  const [isShow, setIsShow] =  useState(true)
  // useEffect(() => {
  //    setTimeout(() => {
  //     setIsShow(false)
  //    }, 6000)
  // })

  return (
    <ScrollView> 
      {/* <SampleComponent />
      <StylingComponent /> */}
      {/* {isShow && <FlexBox />} */}
      {/* <Position /> */}
      {/* <PropsDinamis /> */}
      {/* <StateDinamis /> */}
      {/* <Communication /> */}
      <BasicJavascript />
    </ScrollView>
  )
}

export default App