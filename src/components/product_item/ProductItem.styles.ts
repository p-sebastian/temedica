import styled from 'styled-components/native'

export const ProductItemStyles = {
  Container: styled.View`
    padding-vertical: 12px;
    padding-horizontal: 20px;
    margin-horizontal: 20px;
    border-radius: 4px;
    border-width: 1px;
    border-color: #024860;
  `,

  Row: styled.View`
    flex-direction: row;
    margin-bottom: 4px;
  `,

  Title: styled.Text`
    font-size: 18px;
    color: #002938;
    font-weight: bold;
    flex-grow: 1;
  `,

  Info: styled.Text`
    font-size: 14px;
    color: #002938;
  `,

  DescriptionBox: styled.View`
    border-style: dashed;
    border-width: 1px;
    padding-horizontal: 12px;
    padding-vertical: 4px;
    margin-top: 12px;
  `,

  Description: styled.Text`
    font-size: 16px;
    color: #002938;
    flex-grow: 1;
  `,
}
