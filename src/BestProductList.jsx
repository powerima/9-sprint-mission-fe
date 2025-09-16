import ProductList from './ProductList';

function BestProductList( {productList} ) {

  const bestProductList = productList.slice(0,4);

  return (
    <>
      <h1>판매중인 상품</h1>
      <ProductList productList={bestProductList}  />
    </>
  );
  
}
export default BestProductList;