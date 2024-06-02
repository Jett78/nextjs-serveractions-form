"use server"
import { revalidateTag } from "next/cache";


export const addProductToDatabase = async(e) => {
   
    const product = e.get("product")?.toString();
    const price = e.get("price")?.toString();

    if(!product || !price) return ;
    await fetch("https://665951b0de346625136bf3a7.mockapi.io/products",{
      method:"POST",
      body:JSON.stringify({product,price}),
      headers:{
        "Content-type":"application/json",
      },
    })
revalidateTag("products")
}