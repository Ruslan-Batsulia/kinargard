import { legacy_createStore as createStore, combineReducers } from "redux";
import { sideBarHidden } from "./reducers/SideBarHidden";

export type StoreType = {
  sideBarHidden: { sideBarHidden: boolean };
};

export const ourStore = createStore(combineReducers({ 
  sideBarHidden: sideBarHidden,
}));
