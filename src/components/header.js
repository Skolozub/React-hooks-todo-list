import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  padding: 0.75rem 1.25rem;
`;
const LeftSide = styled.div`
  width: 68%;
  margin-right: 2%;
`;
const RightSide = styled.div`
  width: 30%;
`;

Header.LeftSide = LeftSide;
Header.RightSide = RightSide;
