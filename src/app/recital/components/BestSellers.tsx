'use client';
import ProductCard from "../ui/ProductCard";
import { useState, useEffect } from "react";
import productsData from "../data/Catalogo_recital.json"; // Import JSON from assets/datas

interface Product {
  id: string;
  name: string;
  category: string;
  colors: string[];
  brand: string;
  price: string;
  imageSrc: string[];
  description: string;
}

export default function BestSellers() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const desiredIds = ['3AC', '3LCOTAIL', '14LCOBRA', 'PROC-1']; // Replace with the specific IDs you want |  , '3LCOTAIL', '14LCOBRA', 'PROC-1'

        // Filter the products by the desired IDs
        const selectedProducts = productsData.filter((product) =>
          desiredIds.includes(product.id)
        );

        // Store the filtered products in state
        setProducts(selectedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    console.log("BestSellers products:", products);
  }, [products]);

  return (
    <div className="grid grid-cols-2  w-full max-w-[90dvw] mx-auto justify-items-center pb-8 gap-x-4
    md:grid-cols-4 md:gap-x-12 md:pb-12
    lg:max-w-[70dvw] lg:pt-4 lg:pb-16
    xl:max-w-[60dvw]">
    {products.map((product) => (
        <ProductCard
        key={product.id}
        imageSrc={product.imageSrc[0]}
        name={product.name}
        price={product.price}
        />
    ))}
    </div>
  );
}