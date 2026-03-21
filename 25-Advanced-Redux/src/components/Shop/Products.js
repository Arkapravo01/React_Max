import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "My First Book",
    description: "The first book I ever wrote",
  },
  {
    id: "p2",
    price: 12,
    title: "Mastering React",
    description: "A complete guide to React basics and advanced concepts",
  },
  {
    id: "p3",
    price: 8,
    title: "JavaScript Essentials",
    description: "Learn JS from scratch with practical examples",
  },
  {
    id: "p4",
    price: 15,
    title: "Node.js Deep Dive",
    description: "Backend development with Node and Express",
  },
  {
    id: "p5",
    price: 10,
    title: "CSS Secrets",
    description: "Tips and tricks for modern responsive design",
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
            title={product.title}
            price={product.price}
            id={product.id}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
