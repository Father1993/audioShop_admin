// eslint-disable-next-line no-unused-vars
import React from "react";
import { Datagrid, List, NumberField, TextField } from "react-admin";

const GoodsList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="id" />
        <TextField source="category" />
        <TextField source="type" />
        <NumberField source="price" />
        <TextField source="name" />
      </Datagrid>
    </List>
  );
};

export default GoodsList;
