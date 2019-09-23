import styled from 'styled-components';

export const Row = styled.tr`
  width: 100%;
  text-align: center;

  & th, & td {
    padding: 1em;
  }

  & th{
    color: #dd5;
    font-weight: bold;
  }
`;