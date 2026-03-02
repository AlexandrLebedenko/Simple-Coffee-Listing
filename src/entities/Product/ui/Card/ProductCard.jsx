import styles from "./ProductCard.module.scss";
import starFillIcon from "@/assets/icons/Star_fill.svg";
import starIcon from "@/assets/icons/Star.svg";
function ProductCard({ image, name, price, rating, votes, available, popular }) {
  return (
    <div className={styles.card}>
      <img className={styles.cardImage} src={image} alt={name} />
      {popular ? <span className={styles.popular}>Popular</span> : <></>}
      <div className={styles.cardDescription}>
        <div className={styles.cardHeading}>
          <h2 className={styles.cardTitle}>{name}</h2>
          <p className={styles.cardPrice}>{price}</p>
        </div>
        <p className={styles.cardRatingRow}>
          <img className={styles.starIcon} src={rating ? starFillIcon : starIcon} alt="star icon" />
          {rating ? (
            <>
              <span className={styles.ratingValue}>{rating}</span>
              <span className={styles.votesCount}>({votes} votes)</span>
              {available ? <></> : <span className={styles.soldOut}>Sold out</span>}
            </>
          ) : (
            <span className={styles.noRating}>No ratings</span>
          )}
        </p>
      </div>
    </div>
  );
}
export default ProductCard;
