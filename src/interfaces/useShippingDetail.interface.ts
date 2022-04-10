import { ReactNode } from "react";
import { ShippingDetail } from "./ShippingDetail.interface";

export interface ShippingDetailContextData {
  handleSetShippingDetail: (shippingDetail: ShippingDetail) => void;
  clearShippingDetail: () => void;
  shippingDetail: ShippingDetail;
}
export interface ShippingDetailProviderProps {
  children: ReactNode;
}
