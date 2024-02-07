import { DateType } from "./types";

export type LeadT = {
  _id: string;
  location: {
    type: string;
    coordinates: Array<number>;
  };
  agent: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
  };
  name: string;
  phoneNumber: string;
  product: {
    image: string;
    product_name: string;
    _id: string;
  };
  price_level: string;
  ranking: string;
  show: boolean;
};

export interface IBound {
  sw: Object;
  ne: Object;
}

export type IProduct = {
  product_name: string;
  _id: string;
};

export type IFilterParams = {
  product: string | null | undefined;
  agent: string | null | undefined;
  client: string | null | undefined;
  stage: string | null | undefined;
  from: DateType | null | undefined;
  to: DateType | null | undefined;
  longitude: number | null | undefined;
  latitude: number | null | undefined;
  name?: string | null | undefined;
};
