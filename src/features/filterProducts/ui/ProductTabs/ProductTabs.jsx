import styles from "./ProductTabs.module.scss";
function ProductTabs({ activeTab, onTabChange }) {
  return (
    <nav className={styles.tabsBox}>
      <button className={`${styles.tab} ${activeTab === "all" ? styles["tab--active"] : ""}`} onClick={() => onTabChange("all")}>
        All Products
      </button>
      <button className={`${styles.tab} ${activeTab === "available" ? styles["tab--active"] : ""}`} onClick={() => onTabChange("available")}>
        Available Now
      </button>
    </nav>
  );
}
export default ProductTabs;
