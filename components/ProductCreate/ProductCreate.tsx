import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  BooleanInput,
  SelectInput,
  useNotify,
  useRedirect,
  ImageInput,
  ImageField,
} from "react-admin";

const ProductCreate = (props: any) => {
  const notify = useNotify();
  const redirect = useRedirect();

  const onSuccess = () => {
    notify("Продукт успешно создан");
    redirect("list", "goods");
  };

  return (
    <Create {...props} onSuccess={onSuccess}>
      <SimpleForm>
        <TextInput required source="name" label="Название" />
        <SelectInput
          required
          source="category"
          label="Категория"
          choices={[
            { id: "audio", name: "Аудио", value: "audio" },
            { id: "subwoofer", name: "Сабвуферы", value: "subwoofer" },
            { id: "accessories", name: "Аксессуары", value: "accessories" },
            { id: "speakers", name: "Колонки", value: "speakers" },
          ]}
          required
        />
        <SelectInput
          required
          source="type"
          label="Тип"
          choices={[
            { id: "1din", name: "1-DIN" },
            { id: "2din", name: "2-DIN" },
            { id: "active", name: "Активный" },
            { id: "passive", name: "Пассивный" },
            { id: "coaxial", name: "Коаксиальные" },
            { id: "component", name: "Компонентные" },
            { id: "fullRange", name: "Широкополосные" },
            { id: "recorder", name: "Видео-регистраторы" },
            { id: "charger", name: "Зарядки" },
            { id: "fastening", name: "Держатели" },
          ]}
        />
        <TextInput source="companyName" label="Производитель" />
        <TextInput source="model" label="Модель" />
        <NumberInput required source="price" label="Цена" />
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
        <ImageInput
          source="images"
          label="Изображения"
          multiple
          accept="image/*"
        >
          <ImageField source="src" title="title" />
        </ImageInput>
      </SimpleForm>
    </Create>
  );
};

export default ProductCreate;
