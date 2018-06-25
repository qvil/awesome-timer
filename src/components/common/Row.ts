import styled from "styled-components";

interface IRow {
  style: object;
}

const Row = styled<IRow, any>("div")`
  display: flex;
  flex-direction: Row;
  width: 100%;
`;

export default Row;
