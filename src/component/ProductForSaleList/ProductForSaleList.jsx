import { ProductList } from "/src/component/ProductList";
import styles from "./ProductForSaleList.module.css";
import searchInputIcon from "/src/assets/search.svg";


export function ProductForSaleList ({ productList }) {


  return (
    <div className={styles.productListComponent}>
      <div className={styles.gnb}>
        <h2 className={styles.title}>판매중인 상품</h2>
        <div className={styles.listOptionContainer}>
          <div className={styles.searchInputWrap}>
            <input className={styles.searchInput} placeholder="검색할 상품을 입력해주세요"/>
            <img className={styles.searchInputIcon} src={searchInputIcon}/>
          </div>
          <button className={styles.regBtn}>상품 등록하기</button>

          <div className={styles.orderSelector}>
            <button className={styles.orderBtn}>최신순<img src="/src/assets/icon_order.svg"/></button>            
            <div className={styles.orderBtnList}>
              <button className={styles.orderBtn}>최신순</button>
              <button className={styles.orderBtn}>좋아요</button>
            </div>
          </div>
        </div>
      </div>
      <ProductList productList={productList} />
    </div>
  );
}
