import { createServer, Factory, Model } from "miragejs";
import { faker } from "@faker-js/faker";

type Product = {
  id: number;
  productName: string;
  amount: string;
  image: string;
};

export function makeServer() {
  const server = createServer({
    models: {
      product: Model.extend<Partial<Product>>({}),
    },

    factories: {
      product: Factory.extend({
        id(i) {
          return i + 1;
        },
        productName() {
          return faker.commerce.productName();
        },
        amount() {
          return faker.commerce.price();
        },
        image() {
          return faker.image.technics(640, 480, true);
        },
      }),
    },

    seeds(server) {
      server.createList("product", 5);
    },

    routes() {
      this.namespace = "api";
      this.timing = 750;

      this.get("/products");
      // this.post("/payment");

      this.namespace = "";
      this.passthrough();
    },
  });
  return server;
}
