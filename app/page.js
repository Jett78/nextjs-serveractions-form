import React from "react";
import { addProductToDatabase } from "./actions/ServerActions";

const page = async () => {
  const res = await fetch(
    "https://665951b0de346625136bf3a7.mockapi.io/products",{
      cache:"no-cache",
      next:{
        tags:["products"]
      }
    }
  );
  const products = await res.json();
  console.log(products)

 
  return (
    <div>
      <h2 className="text-4xl font-bold text-center mt-10">
        Product Warehouse{" "}
      </h2>
      <form action={addProductToDatabase} className="grid gap-2 items-center justify-center mt-4  ">
        <input
        name="product"
          type="text"
          placeholder="Enter product name"
          className="border p-2 w-[30em] outline-none"
        />
        <input
        name="price"
          type="text"
          placeholder="Enter product price "
          className="border p-2 w-[30em] outline-none"
        />
        <button className="bg-blue-300 p-2 rounded-lg">Add Product</button>
      </form>

      <div className="mt-8 flex flex-wrap gap-6 justify-center">
        {products.map((product) => (
          <div key={product.id} className="border p-4 w-40 bg-purple-200">
            <h2 className="font-semibold text-xl">{product.product}</h2>
            <p className="text-right py-2 text-red-600 font-semibold">
              ${product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
