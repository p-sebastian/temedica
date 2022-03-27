import React from 'react'
import { FlatList, ListRenderItem } from 'react-native'
import { TProduct } from 'src/types/TProduct'

import { ProductItemComponent } from '../../components/product_item/ProductItem.component'
import { SearchBarComponent } from '../../components/search_bar/SearchBar.component'
import { HomeHooks } from './Home.hooks'
import { HomeStyles as UI } from './Home.styles'

export const HomeScreen: React.FC = () => {
  const { text, onChangeText, products, onEndReached, status } = useHome()
  const { loading } = status

  return (
    <UI.Container>
      <UI.Top>
        <SearchBarComponent
          placeholder="You can search by drug name or by disease"
          onChangeText={onChangeText}
          value={text}
        />
      </UI.Top>
      <FlatList
        refreshing={loading}
        data={products}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        onEndReached={onEndReached}
        ItemSeparatorComponent={UI.Divider}
        ListHeaderComponent={UI.Divider}
      />
    </UI.Container>
  )
}

const { useHome } = HomeHooks
const keyExtractor = (item: TProduct) => item.id
const renderItem: ListRenderItem<TProduct> = ({ item }) => <ProductItemComponent {...item} />
