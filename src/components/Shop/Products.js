import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = ({items}) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {items.map((item, index)=>{
          return  <ProductItem {...item} key={`item-${index}`}/>
        })}
      </ul>
    </section>
  );
};

export default Products;
