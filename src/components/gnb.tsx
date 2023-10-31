import { Link } from "react-router-dom"
import styled from "styled-components";

const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
const Gnb = () => (
  <nav className="gnb">
    <StyledUl>
      <li><Link to="/">홈</Link></li>
      <li><Link to="/products">상품목록</Link></li>
      <li><Link to="/cart">장바구니</Link></li>
    </StyledUl>
  </nav>
);
export default Gnb;