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
  SelectInput,
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
        <TextInput source="name" label="Название" />
        <TextInput source="category" label="Категория" disabled />
        <SelectInput
          source="type"
          label="Тип"
          choices={[
            { id: "1din", name: "1DIN" },
            { id: "2din", name: "2DIN" },
          ]}
        />
        <TextInput source="companyName" label="Производитель" />
        <TextInput source="model" label="Модель" />
        <NumberInput source="price" label="Цена" />
        <TextInput source="description" label="Описание" multiline />
        <SelectInput
          source="installationType"
          label="Тип установки"
          choices={[
            { id: "Универсальный", name: "Универсальный" },
            { id: "Toyota", name: "Toyota" },
            { id: "Nissan", name: "Nissan" },
            { id: "Mazda", name: "Mazda" },
            { id: "Honda", name: "Honda" },
            { id: "MMC", name: "MMC" },
            { id: "Subaru", name: "Subaru" },
            { id: "Suzuki", name: "Suzuki" },
            { id: "Daihatsu", name: "Daihatsu" },
            { id: "Lexus", name: "Lexus" },
            { id: "Infiniti", name: "Infiniti" },
            { id: "Isuzu", name: "Isuzu" },
            { id: "Acura", name: "Acura" },
          ]}
        />
        <SelectInput
          source="collections"
          label="Коллекция"
          choices={[
            { id: "Premium", name: "Premium" },
            { id: "Sport", name: "Sport" },
            { id: "Classic", name: "Classic" },
            { id: "Luxury", name: "Luxury" },
            { id: "Бюджетный", name: "Бюджетный" },
            { id: "Из Японии", name: "Из Японии" },
          ]}
        />
        <NumberInput source="inStock" label="В наличии" />
        <BooleanInput source="isBestseller" label="Бестселлер" />
        <BooleanInput source="isNew" label="Новинка" />
        <NumberInput source="popularity" label="Популярность" />
        <TextInput source="vendorCode" label="Артикул" />

        {/* Характеристики */}
        <TextInput source="characteristics.features" label="Особенности" />
        <TextInput
          source="characteristics.productSizes"
          label="Размеры продукта"
        />

        {/* Изображения */}
        <TextInput source="images.0" label="Изображение 1" />
        <TextInput source="images.1" label="Изображение 2" />
      </SimpleForm>
    </Edit>
  );
};

export default ProductEdit;
