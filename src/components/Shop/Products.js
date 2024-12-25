import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 699,
    title: "iPhone 12",
    description: "The latest iPhone with A14 Bionic chip and 5G technology.",
  },
  {
    id: "p2",
    price: 799,
    title: "Samsung Galaxy S21",
    description:
      "Experience the new Samsung Galaxy with 108MP camera and 8K video recording.",
  },
  {
    id: "p3",
    price: 499,
    title: "Google Pixel 5",
    description:
      "Google's flagship phone with pure Android experience and excellent camera.",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
