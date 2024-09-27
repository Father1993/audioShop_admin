import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  useNotify,
  useRefresh,
  useRedirect,
  BooleanInput,
  ArrayInput,
  SimpleFormIterator,
} from "react-admin";

const ProductEdit = (props: any) => {
  const notify = useNotify();
  const refresh = useRefresh();
  const redirect = useRedirect();

  const onSuccess = () => {
    notify("Product updated successfully");
    refresh();
    redirect("list", "goods");
  };

  return (
    <Edit {...props} onSuccess={onSuccess}>
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="name" />
        <TextInput source="category" />
        <TextInput source="type" />
        <TextInput source="companyName" />
        <TextInput source="model" />
        <NumberInput source="price" />
        <TextInput source="description" />
        <TextInput source="productSizes" />
        <TextInput source="installationType" />
        <TextInput source="collections" />
        <TextInput source="inStock" />
        <BooleanInput source="isBestseller" />
        <BooleanInput source="isNew" />
        <NumberInput source="popularity" />
        <TextInput source="vendorCode" />

        {/* Отображение всех объектов из characteristics */}
        <ArrayInput source="characteristics">
          <SimpleFormIterator>
            <ArrayInput source="features">
              <SimpleFormIterator>
                <TextInput source={0} label="Feature 1" />
                <TextInput source={1} label="Feature 2" />
                <TextInput source={2} label="Feature 3" />
              </SimpleFormIterator>
            </ArrayInput>
            <TextInput source="productSizes" label="Product Sizes" />
          </SimpleFormIterator>
        </ArrayInput>

        {/* Отображение изображений */}
        <ArrayInput source="images">
          <SimpleFormIterator>
            <TextInput source={0} label="Image URL 1" />
            <TextInput source={1} label="Image URL 2" />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Edit>
  );
};

export default ProductEdit;
