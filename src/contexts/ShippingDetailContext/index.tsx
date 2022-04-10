import { createContext, ReactNode, useState } from "react";
import {
  ShippingDetail,
  ShippingDetailProps,
} from "../../interfaces/ShippingDetail.interface";
import {
  ShippingDetailContextData,
  ShippingDetailProviderProps,
} from "../../interfaces/useShippingDetail.interface";

export const ShippingDetailContext = createContext<ShippingDetailContextData>(
  {} as ShippingDetailContextData
);

export function ShippingDetailProvider({
  children,
}: ShippingDetailProviderProps) {
  const [shippingDetail, setShippingDetail] = useState<ShippingDetail>(
    {} as ShippingDetail
  );

  function handleSetShippingDetail(shippingDetail: ShippingDetail) {
    setShippingDetail(shippingDetail);
  }

  function clearShippingDetail() {
    setShippingDetail(null);
  }

  return (
    <ShippingDetailContext.Provider
      value={{
        shippingDetail,
        handleSetShippingDetail,
        clearShippingDetail,
      }}
    >
      {children}
    </ShippingDetailContext.Provider>
  );
}
