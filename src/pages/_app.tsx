import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from "styled-components";
import { CartContext, CartProvider } from "../contexts/CartContext";
import { ShippingDetailProvider } from "../contexts/ShippingDetailContext";

import { makeServer } from "../service/mirage";
import GlobalStyle from "../styles/global";
import theme from "../styles/theme";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ShippingDetailProvider>
      <CartProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />;
            <GlobalStyle />
          </ThemeProvider>
          {/* <ReactQueryDevtools /> */}
        </QueryClientProvider>
      </CartProvider>
    </ShippingDetailProvider>
  );
}

export default MyApp;
