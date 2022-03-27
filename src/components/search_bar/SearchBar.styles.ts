import { TextInput } from 'react-native'
import styled from 'styled-components/native'

export const SearchBarStyles = {
  Container: styled.View`
    background-color: white;
    border-radius: 4px;
    padding-horizontal: 8px;
    border-width: 1px;
    height: 40px;
    flex-direction: row;
    align-items: center;
  `,

  Input: styled(TextInput)`
    font-size: 14px;
    flex: 1;
    color: #002938;
  `,

  Button: styled.TouchableOpacity`
    justify-content: center;
  `,

  BtnText: styled.Text`
    color: #024860;
    font-size: 14px;
  `,
}
