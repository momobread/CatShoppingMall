import styled from 'styled-components';
import EtcContents from './EtcContents';
import React from 'react';
import { itemDetailEtc } from '../../data/itemEtc';

const StyledItemEtc = styled.div`
  height: 100rem;
  display: flex;
  align-items: center;
  gap: 5rem;
  flex-direction: column;
  padding: 3rem 0;
  #table_content {
    width: 80%;
  }
  span {
    font-weight: 600;
    font-size: 2rem;
  }
`;

const ItemEtc = () => {
  const title = ['배송정보', '교환/반품 안내', '교환/반품 제한사항', '판매자 정보'];
  return (
    <StyledItemEtc>
      {itemDetailEtc.map((table, i) => (
        <div id="table_content">
          <span>{title.at(i)}</span>
          <EtcContents tableData={table} />
        </div>
      ))}
    </StyledItemEtc>
  );
};
export default ItemEtc;
