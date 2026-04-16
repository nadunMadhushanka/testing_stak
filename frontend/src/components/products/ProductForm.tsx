import { useState, FormEvent } from "react";

type ProductFormValues = {
    name: string;
    category: string;
    price: number;
}

type ProductFormProps = {
    onAdd: (form: ProductFormValues) => void;
    loading: boolean;
}
export const ProductForm = ({ onAdd, loading }: ProductFormProps
) => {
    const [form, setForm] = useState({
        name: '',
        category: '',
        price: 0,
    });

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onAdd(form);
        setForm({name: '', category: '', price: 0});
    };
    return (
        <form onSubmit={handleSubmit} className="product-form">
            <input placeholder="Name" value = {form.name} onChange={event => setForm({...form, name: event.target.value})}/>
            <input placeholder="Category" value={form.category} onChange={event => setForm({...form, category: event.target.value})}/>
            <input placeholder="Price" type="number" value={form.price} onChange={event => setForm({...form, price: Number(event.target.value)})} />
            <button type="submit" disabled={loading}>{loading ? 'Saving...' : 'Add Product'}</button>
        </form>
    );
}
