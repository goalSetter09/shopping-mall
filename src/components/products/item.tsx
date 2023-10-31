import { Link } from 'react-router-dom'
import { Product } from '../../types'
import styled from 'styled-components'


const StyledItem = styled.li`
  border: 1px solid rgb(0, 0, 0);
  padding: 10px;
  list-style: none;
  gap: 10px;
`;
const StyledImg = styled.img`
    width: 100%;
    height: 150px;
    object-fit: contain;
`;
const ProductItem = ({ category, image, price, rating, title, id }: Product) => {

  return (
    <StyledItem className="product-item" >
      <Link to={`/products/${id}`}>
        <p className="product-item__category">{category}</p>
        <p className="product-item__title">{title}</p>
        <StyledImg className="product-item__image" src={image} />
        <span className="product-item__price">${price}</span>
        <span className="product-item__rating">{rating.rate}</span>
      </Link>
    </StyledItem>
  );
}


// export const StyledList;


export default ProductItem;