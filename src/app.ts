import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";

import { Product } from "./product-model";

// const p1 = new Product("Book", 12.99);
// console.log(p1.getInformation());
const products = [
  { title: "A Carpet", price: 29.99 },
  { title: "A Book", price: 10.99 },
];

const newProduct = new Product("", -5.99);
validate(newProduct).then((error) => {
  if (error.length > 0) {
    console.log("Validation errors...");
    console.log(error);
  } else {
    console.log(newProduct.getInformation());
  }
});

const loadedProducts = plainToClass(Product, products);
for (const product of loadedProducts) {
  console.log(product.getInformation());
}
