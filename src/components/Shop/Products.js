import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { useSelector } from "react-redux";

const Products = (props) => {
  const products = useSelector((state) => state.products.products);
  const isLoading = useSelector((state) => state.products.isLoading);
  console.log(products);

  return (
    <section className={classes.products}>
      <h2>Just some random products</h2>
      {!isLoading ? (
        <ul>
          {products.map((product) => (
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          ))}
        </ul>
      ) : (
        <div style={{color: "white", display: "flex",justifyContent: "center" }}>
          <h3>Loading...</h3>
        </div>
      )}
    </section>
  );
};

export default Products;
