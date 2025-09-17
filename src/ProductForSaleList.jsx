import ProductList from "./ProductList";
import styles from "./ProductForSaleList.module.css";
import searchInputIcon from "./assets/search.svg";
function ProductForSaleList ({ productList }) {


  return (
    <>
      <div className={styles.gnb}>
        <span>판매중인 상품</span>
        <div className={styles.listOptionContainer}>
          <div className={styles.searchInputWrap}>
            <input className={styles.searchInput} placeholder="검색할 상품을 입력해주세요"/>
            <img className={styles.searchInputIcon} src={searchInputIcon}/>
          </div>
          <button className={styles.regBtn}>상품 등록하기</button>
          <select className={styles.orderSelector}>
            <option>최신순</option>
            <option>좋아요</option>
          </select>
        </div>
      </div>
      <ProductList productList={productList} />
    </>
  );
}

export default ProductForSaleList;