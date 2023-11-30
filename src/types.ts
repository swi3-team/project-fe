export type Brand = {
  id: number;
  name: string;
  country: string;
};

export type Owner = {
  id?: number;
  name: string;
  surname: string;
  city: string;
  age: number;
  gender: string;
};

export type Car = {
  id: number;
  name: string;
  country: string;
  brand: Brand;
  owner: Owner;
  year_made: number;
  type: string;
  engine: string;
  image_url: string;
};

export enum FormInputAddCardOwner {
  owner_name = 'owner_name',
  surname = 'surname',
  city = 'city',
  age = 'age',
  gender = 'gender',
}

export enum FormInputAddCardBrand {
  brand_name = 'brand_name',
  brand_country = 'brand_country',
}

export enum FormInputAddCardCar {
  name = 'name',
  country = 'country',
  brand = 'brand',
  owner = 'owner',
  year_made = 'year_made',
  type = 'type',
  engine = 'engine',
  image_url = 'image_url',
}

export interface FormInput {
  name: string;
  country: string;
  brand: string;
  owner: string;
  year_made: number;
  type: string;
  engine: string;
  image_url: string;
  owner_name: string;
  surname: string;
  city: string;
  age: number;
  gender: string;
  brand_name: string;
  brand_country: string;
}

export type FormInputProgress = 'owner' | 'car' | 'brand';

export type CarBodyType = 'Combi' | 'Sedan' | 'SUV' | 'Liftback' | '';
