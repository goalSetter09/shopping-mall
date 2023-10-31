import { useQuery } from "react-query";
import { QueryKeys, fetcher } from "../../queryClient";
import { Product } from "../../types"
import ProductItem from "../../components/products/item";
import styled from "styled-components";


const StyledUl = styled.ul`
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;
const ProductList = () => {
  const { data } = useQuery<Product[]>(QueryKeys.PRODUCTS, () =>
    fetcher({
      method: 'GET',
      path: '/products',
    }),
  )
  console.log(data);

  return (
    <StyledUl>
      {data?.map(product => (
        <ProductItem {...product} key={product.id} />
      ))}
    </StyledUl>
  );
}
export default ProductList;
