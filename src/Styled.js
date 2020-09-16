import styled from 'styled-components'
import { container } from "./StyledMixins"

export const FormContainer = styled.article`
  ${container}
  background-color: ${({theme}) => theme.backgroundColor};
  color: ${({theme}) => theme.textColor};
  
  > label {
    display: block;
    padding: ${({theme}) => theme.spacingXm} 0;
    color: ${({theme, hasError}) => hasError ? theme.errorColor : theme.textColor}
  }
  
  > input {
    padding: ${({theme}) => theme.spacingXm};
    font-size: ${({theme}) => theme.fontSizeSm};
    color: ${({theme}) => theme.textColorMuted};
    border-radius: ${({theme}) => theme.borderRadius};
    background-color: ${({theme}) => theme.backgroundAlt};
    border: 1px solid ${({theme, hasError}) => hasError ? theme.errorColor : theme.inputBorderColor};
    color: ${({theme, hasError}) => hasError ? theme.errorColor : theme.textColor}
  }

  button {
    display: block;
    margin-top: ${({theme}) => theme.spacingXm};
    background-color: ${({theme}) => theme.primary};
    color: white;
    border: 0;
    padding: ${({theme}) => `${theme.spacingXm} ${theme.spacingMd}`};
    border-radius: ${({theme}) => theme.borderRadius};
  }
`

export const TextContainer = styled.article`
  ${container}
  background-color: ${({theme}) => theme.backgroundColor};
  color: ${({theme}) => theme.textColor};

  p {
    font-size: ${({theme}) => theme.fontSizeSm};
    line-height: 160%;

    strong{
      color: ${({theme}) => theme.primary};
    }
  }
`

export const TableContainer = styled.article`
  ${container}
  background-color: ${({theme}) => theme.backgroundColor};
  color: ${({theme}) => theme.textColor};

  table {
      border: 2px solid #DDD;
      width: 100%;

      thead th {
        background-color: ${({theme}) => theme.backgroundAlt};
        padding: ${({theme}) => theme.spacingXm};
        text-align: left;
      }

      tbody td {
        padding: ${({theme}) => theme.spacingXm};
        text-align: left;
        background-color: ${({theme}) => theme.backgroundColor};
      }
    }
`