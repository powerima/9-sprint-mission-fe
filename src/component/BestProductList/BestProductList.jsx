import { ProductList } from '/src/component/ProductList';
import styles from './BestProductList.module.css';

export function BestProductList( {productList} ) {

  const bestProductList = productList.slice(0,4);

  return (
    <div className={styles.productListComponent}>
      <h2 className={styles.title}>베스트 상품</h2>
      <ProductList productList={bestProductList}  />
    </div>
  );
  
}
