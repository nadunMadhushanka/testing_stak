import axios  from "axios";
const apiClient = axios.create({
    baseURL: "http://localhost:3000/api",
})

export const createProduct = async (productData: {name: string; category: string, price: number }) => {
    try {
        const response = await apiClient.post("/products", productData);
        return response.data;
    } catch (error) {
        console.error("Error creating product:", error);
        throw error;
    }
};

export const getProducts = async () => {
    const respons = await apiClient.get('/products');
    return respons.data;
}


