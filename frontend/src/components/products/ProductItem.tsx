export const ProductItem = ({ product }: any ) => (
    <div className="product-card">
        <h4>{product.name} - ${product.price.toFixed(2)}</h4>
        <p>{product.description}</p>
        <div className="tags">
            {product.tags.map((t: string) => (
                <span key={t} className="tag">
                    {t}
                </span>
            ))}
        </div>
    </div>
)