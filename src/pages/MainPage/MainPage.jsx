import Container from "@/shared/ui/Container/Container";
import Header from "@/widgets/Header/Header";
import ProductTabs from "@/features/filterProducts/ui/ProductTabs/ProductTabs";
import ProductGrid from "@/widgets/ProductGrid/ProductGrid";
import styles from "./MainPage.module.scss";
import { useProductFilter } from "@/features/filterProducts/model/useProductFilter";
function MainPage() {
  //
  const { activeTab, setActiveTab, products } = useProductFilter();
  //
  return (
    <div className={styles.wrapper}>
      <Container>
        <Header></Header>
        <ProductTabs activeTab={activeTab} onTabChange={setActiveTab}></ProductTabs>
        <ProductGrid products={products}></ProductGrid>
      </Container>
    </div>
  );
}

export default MainPage;
