export enum RootStackEnum {
  HomeScreen = 'HomeScreen',
  ProductScreen = 'ProductScreen',
}

export type TRootStackParamList = {
  [RootStackEnum.HomeScreen]: undefined
  [RootStackEnum.ProductScreen]: undefined
}
