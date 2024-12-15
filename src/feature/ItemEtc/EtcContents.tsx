import React from 'react';
import styled from 'styled-components';

interface EtcContentsProps {
  tableData: TableType[];
}
interface TableType {
  th: string;
  tb: string;
}

const StyledEtcContents = styled.table`
  width: 100%;
  border-collapse: collapse;

  tr {
    border: 1px solid var(--color-grey-300);
  }
  th {
    padding: 0.5rem 0.7rem;
    background-color: var(--color-grey-200);
    width: 20rem;
  }
  td {
    padding: 0.5rem 0.7rem;
    white-space: pre-wrap;
  }
`;

const formatText = (text: string) => {
  return text.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
};

const EtcContents = ({ tableData }: EtcContentsProps) => {
  return (
    <StyledEtcContents>
      <tbody>
        {tableData.map((table) => (
          <tr>
            <th>{table.th}</th>
            <td>{formatText(table.tb)}</td>
          </tr>
        ))}
      </tbody>
    </StyledEtcContents>
  );
};
export default EtcContents;
