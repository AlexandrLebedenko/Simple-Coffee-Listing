import ProductCard from "@/entities/Product/ui/Card/ProductCard";
import styles from "./ProductGrid.module.scss";
function ProductGrid({ products }) {
  return (
    <section className={styles.cardsGrid}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
          rating={product.rating}
          votes={product.votes}
          available={product.available}
          popular={product.popular}
        ></ProductCard>
      ))}
    </section>
  );
}
export default ProductGrid;
