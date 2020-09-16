import { css } from "styled-components"
import theme from "./lightTheme"

export const container = css`

  display: block;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: ${theme.fontSizeMd};
  padding: ${theme.spacingMd};
  border: 1px solid ${theme.borderColor};

`