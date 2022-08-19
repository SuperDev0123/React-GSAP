import styled from "styled-components";


const Row = styled.div`
  width: 100%;  
  &::after {
    content: "";
    clear: both;
    display: table;
  }
`

export default Row;