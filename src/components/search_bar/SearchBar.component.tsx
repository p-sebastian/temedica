import React from 'react'

import { SearchBarStyles as UI } from './SearchBar.styles'
import { TSearchBarProps } from './SearchBar.types'

export const SearchBarComponent: React.FC<TSearchBarProps> = (props) => {
  return (
    <UI.Container>
      <UI.Input {...props} placeholderTextColor="#cbc3bf" />
      <UI.Button>
        <UI.BtnText>Clear</UI.BtnText>
      </UI.Button>
    </UI.Container>
  )
}
