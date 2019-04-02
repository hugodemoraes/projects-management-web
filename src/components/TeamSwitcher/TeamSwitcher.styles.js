import styled from 'styled-components';

import { shark } from '@colors';

export const Container = styled.aside`
  background: ${shark};
  padding: 20px 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const TeamList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Team = styled.button`
  border: 0;
  background: transparent;
  margin: 0 0 8px;
`;

export const Avatar = styled.img`
  transition: all 0.2s;
  border-radius: 50%;
  width: 50px;
  height: 50px;

  &:hover {
    border-radius: 30%;
  }
`;
