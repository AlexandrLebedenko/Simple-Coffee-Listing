import styles from "./Header.module.scss";
import vectorIcon from "@/assets/backgrounds/vector.svg";
function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.vectorIcon} src={vectorIcon} alt="" aria-hidden="true" />
      <h1 className={styles.title}>Our Collection</h1>
      <p className={styles.subtitle}>
        Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and
        shipped fresh weekly.
      </p>
    </header>
  );
}
export default Header;
