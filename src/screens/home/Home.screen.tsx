import React from 'react'
import { FlatList, ListRenderItem } from 'react-native'
import { TProduct } from 'src/types/TProduct'

import { ProductItemComponent } from '../../components/product_item/ProductItem.component'
import { SearchBarComponent } from '../../components/search_bar/SearchBar.component'
import { HomeHooks } from './Home.hooks'
import { HomeStyles as UI } from './Home.styles'

export const HomeScreen: React.FC = () => {
  const { text, onChangeText, products, onEndReached, status, onClear, refetch } = useHome()
  const { loading, error, count } = status
  const empty = error ? error : 'No items found'

  return (
    <UI.Container>
      <UI.Top>
        <SearchBarComponent
          placeholder="You can search by drug name or by disease"
          onChangeText={onChangeText}
          value={text}
          onPress={onClear}
        />
        <UI.Text>showing {count} results</UI.Text>
      </UI.Top>
      <FlatList
        onRefresh={refetch}
        refreshing={loading}
        data={products}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        onEndReached={onEndReached}
        ItemSeparatorComponent={UI.Divider}
        ListHeaderComponent={UI.Divider}
        ListEmptyComponent={<Empty text={empty} />}
      />
    </UI.Container>
  )
}

const { useHome } = HomeHooks
const keyExtractor = (item: TProduct) => item.id
const renderItem: ListRenderItem<TProduct> = ({ item }) => <ProductItemComponent {...item} />

const Empty: React.FC<{ text: string }> = ({ text }) => (
  <UI.NoResult>
    <UI.Warning>{text}</UI.Warning>
  </UI.NoResult>
)
