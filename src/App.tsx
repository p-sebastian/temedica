import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { LogBox } from 'react-native'

import { RootStack } from './navigation/Root.stack'

const App = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  )
}

export default App
LogBox.ignoreLogs(['[react-native-gesture-handler]'])
