import styled from 'styled-components';
import ItemTitle from '../../components/ItemTitle';
import ItemsContents from '../../components/ItemContents';
import { type ReactNode } from 'react';

const StyledPreviewItems = styled.div`
  /* background-color: aquamarine; */
  display: grid;
  padding: 1rem;
  grid-template-rows: 6rem 1fr;
  @media screen and (max-width: 600px) {
    height: fit-content;
  }
`;

interface PreviewItmesPrsop {
  title: string;
  render: ReactNode;
  type: string;
}

const PreviewItems = ({ title, render, type }: PreviewItmesPrsop) => {
  return (
    <StyledPreviewItems>
      <ItemTitle>{title}</ItemTitle>
      <ItemsContents render={render} type={type} />
    </StyledPreviewItems>
  );
};
export default PreviewItems;
