import styles from './ProductListPage.module.css';
import { ProductForSaleList } from '/src/component/ProductForSaleList';
import { BestProductList } from '/src/component/BestProductList';


export function ProductListPage ( { ProductList } ) {


  return (
    <div className={styles.pageContainer}>
      <BestProductList productList={ProductList} />
      <ProductForSaleList productList={ProductList} />
    </div>

  );
}

export default ProductListPage;