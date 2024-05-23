import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  width: calc(100% - 48px);
  max-width: 1100px;
  position: relative;
  background-color: ${(props) => props.theme.colors.background};
  overflow: scroll;
`;

export default Container;
