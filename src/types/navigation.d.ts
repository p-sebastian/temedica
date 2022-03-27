import { TRootStackParamList } from '../navigation/screenNames'

export interface TRootParamList extends TRootStackParamList {}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends TRootParamList {}
  }
}
