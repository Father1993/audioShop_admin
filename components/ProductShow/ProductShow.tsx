// eslint-disable-next-line no-unused-vars
import {
  Show,
  SimpleShowLayout,
  TextField,
  RichTextField,
  ImageField,
  DeleteButton,
  NumberField,
  BooleanField,
  ArrayField,
} from "react-admin";
import "./index.css";

export const ProductShow = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <div className="show-actions">
          <DeleteButton />
        </div>
        <ArrayField source="images">
          <ImageField source="url" title="title" />
        </ArrayField>
        <TextField source="name" />
        <TextField source="category" />
        <TextField source="type" />
        <TextField source="companyName" />
        <TextField source="model" />
        <NumberField source="price" />
        <TextField source="productSizes" />
        <RichTextField source="description" />
        <TextField source="installationType" />
        <TextField source="collections" />
        <TextField source="inStock" />
        <BooleanField source="isBestseller" />
        <BooleanField source="isNew" />
        <NumberField source="popularity" />
        <TextField source="vendorCode" />
        <TextField source="characteristics" />
      </SimpleShowLayout>
    </Show>
  );
};
