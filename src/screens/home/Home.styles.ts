import styled from 'styled-components/native'

export const HomeStyles = {
  Container: styled.View`
    flex: 1;
    background-color: white;
  `,

  Top: styled.View`
    padding-horizontal: 20px;
    padding-top: 20px;
  `,

  Divider: styled.View`
    height: 20px;
  `,

  Text: styled.Text`
    font-size: 14px;
    margin-top: 20px;
  `,

  NoResult: styled.View`
    padding: 20px;
    border-width: 1px;
    border-color: #f2e3bd;
    justify-content: center;
    align-items: center;
    margin-horizontal: 20px;
  `,

  Warning: styled.Text`
    font-size: 18px;
    text-align: center;
  `,
}
