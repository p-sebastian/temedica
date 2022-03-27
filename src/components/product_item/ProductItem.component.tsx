import React from 'react'
import { TProduct } from 'src/types/TProduct'

import { ProductItemStyles as UI } from './ProductItem.styles'

export const ProductItemComponent: React.FC<TProduct> = React.memo((props) => {
  const { name, diseases, released, description } = props

  return (
    <UI.Container>
      <UI.Row>
        <UI.Title>{name}</UI.Title>
        <UI.Info>{released}</UI.Info>
      </UI.Row>
      <UI.Info>{diseases.join(', ')}</UI.Info>
      {!description ? null : (
        <UI.DescriptionBox>
          <UI.Description>{description}</UI.Description>
        </UI.DescriptionBox>
      )}
    </UI.Container>
  )
})
