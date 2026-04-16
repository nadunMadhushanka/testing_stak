import { useEffect, useState } from "react";
import { createProduct, getProducts } from "../api/apiClient";

export const useProducts = () => {
    const [loading, setloading] = useState(false);
    const [products, setProducts] = useState<any[]>([]);

    const addProducts = async (form: { name: string; category: string; price: number }) => {
        setloading(true);
        try {
            await createProduct(form);
        } catch (error) {
            console.error('Error adding product:', error);
        } finally {
            setloading(false);

        }
    }
    const fetchProducts = async () => {
        const data = await getProducts();
        setProducts(data);
    };

    useEffect(() => {
    fetchProducts();
  }, []);
  
    return { loading, addProducts, products}
}

