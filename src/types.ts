export type Brand = {
  id: number;
  name: string;
  country: string;
};

export type Owner = {
  id: number;
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
