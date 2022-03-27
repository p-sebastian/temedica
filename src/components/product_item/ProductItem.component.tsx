import React from 'react'
import { TProduct } from 'src/types/TProduct'

import { ProductItemStyles as UI } from './ProductItem.styles'

export const ProductItemComponent: React.FC<TProduct> = (props) => {
  const { name } = props
  console.info(name)

  return (
    <UI.Container>
      <UI.Title>{name}</UI.Title>
    </UI.Container>
  )
}
