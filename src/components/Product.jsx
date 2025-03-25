const Product = (props) => {
    return (
        <>
            <h4 className="product-name">{props.name}</h4>
            <p className="product-description">{props.description}</p>
            <p className="product-price">{props.price}</p>
        </>
    )
}

export default Product;