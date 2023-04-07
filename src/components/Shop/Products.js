import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 1,
    price: 6,
    title: 'Book1',
    description: 'This is a first product - amazing!',
  },
  {
    id: 2,
    price: 5,
    title: 'Book2',
    description: 'This is a second product - amazing!',
  }
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(p => {
          return (
            <ProductItem
              key={p.id}
              id={p.id}
              title={p.title}
              price={p.price}
              description={p.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
