import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import styled from 'styled-components/native'

import { HomeScreen } from '../screens/home/Home.screen'
import { RootStackEnum, TRootStackParamList } from './screenNames'

export const RootStack: React.FC = () => (
  <Navigator initialRouteName={RootStackEnum.HomeScreen}>
    <Screen
      name={RootStackEnum.HomeScreen}
      component={HomeScreen}
      options={{
        headerTitle: () => <Logo />,
      }}
    />
  </Navigator>
)

const { Navigator, Screen } = createStackNavigator<TRootStackParamList>()

const Logo = styled.Image.attrs({ source: require('../../assets/logo.png') })`
  resize-mode: cover;
  height: 40px;
  aspect-ratio: 1;
  border-radius: 13px;
`
