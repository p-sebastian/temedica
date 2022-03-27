import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import { HomeScreen } from '../screens/home/Home.screen'
import { RootStackEnum, TRootStackParamList } from './screenNames'

export const RootStack: React.FC = () => (
  <Navigator initialRouteName={RootStackEnum.HomeScreen}>
    <Screen name={RootStackEnum.HomeScreen} component={HomeScreen} />
    <Screen name={RootStackEnum.ProductScreen} component={() => null} />
  </Navigator>
)

const { Navigator, Screen } = createStackNavigator<TRootStackParamList>()
