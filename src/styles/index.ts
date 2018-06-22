import { css } from "styled-components";

export const CardStyle = css`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-color: white;
  border-radius: ${props => props.theme.spacing.unit}rem;
  padding ${props => props.theme.spacing.gutter}rem;
`;

export { default as theme } from "./theme";
