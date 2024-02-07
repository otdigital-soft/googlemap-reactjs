export type IValue = {
  value: string;
};

export type DateType = string | null | Date;
export type DateRangeType = {
  startDate: DateType;
  endDate: DateType;
};
export type ISelectOption = {
  value: string;
  label: string;
};
export type ILatLng = {
  lat: number;
  lng: number;
};
