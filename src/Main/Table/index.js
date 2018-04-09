import styled from 'styled-components';

const TableRow = styled.div`
  display: flex;
`;

const TableHeader = styled.div`
  font-weight: bold;
  width: calc(100% / 6 - 10px);
  margin: 0 5px;
  text-align: center;
  padding: 5px 0;
`;

const TableCol = TableHeader.extend`
  font-weight: normal;
`;

const Button = styled.button`
  display: block;
  margin-left: auto;
  :hover {
    cursor: pointer;
  }
`;

export { TableRow, TableCol, TableHeader, Button };
