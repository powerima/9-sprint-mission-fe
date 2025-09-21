/*
    ProductList.jsx

    2025. 09. 16

    상품 리스트를 화면에 그리는 컴포넌트
*/
import styles from './ProductList.module.css'

export function ProductList( {productList} ) {
  
  const handleSortByName = () => {

  };

  return (
    <div >
      <ul className={styles.productList}>
        {productList.map((el) => (
          <li key={el.id} className={styles.productItem} >
            <div>
              <img className={styles.productThumbnail} src={el.images[0]} />
              <strong>{el.description}</strong>
              <span>({el.price})</span>              
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}