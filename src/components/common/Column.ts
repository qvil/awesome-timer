import styled from "styled-components";

interface IColumn {
  style: object;
}

const Column = styled<IColumn, any>("div")`
  display: flex;
  flex-direction: column;
`;

export default Column;
