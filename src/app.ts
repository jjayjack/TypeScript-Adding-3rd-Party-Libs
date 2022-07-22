import "reflect-metadata";
import { plainToClass } from "class-transformer";

import { Product } from "./product-model";

// const p1 = new Product("Book", 12.99);
// console.log(p1.getInformation());
const products = [
  { title: "A Carpet", price: 29.99 },
  { title: "A Book", price: 10.99 },
];
const loadedProducts = products.map((product) => {
  return new Product(product.title, product.price);
});
for (const product of loadedProducts) {
  console.log(product.getInformation());
}
