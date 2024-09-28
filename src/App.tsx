import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { authProvider } from "./authProvider";
import dataProvider from "./dataProvider";
import { GoodsList } from "../components/GoodsList/GoodsList";
import { ProductShow } from "../components/ProductShow/ProductShow";
import ProductEdit from "../components/ProductEdit/ProductEdit";
import ProductCreate from "../components/ProductCreate/ProductCreate";

export const App = () => (
  <Admin authProvider={authProvider} dataProvider={dataProvider}>
    <Resource
      name="goods"
      list={GoodsList}
      show={ProductShow}
      edit={ProductEdit}
      create={ProductCreate}
    />
  </Admin>
);
