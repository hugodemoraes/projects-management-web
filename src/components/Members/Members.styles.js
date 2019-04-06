import styled from 'styled-components';

import { doveGray } from '@colors';

export const MemberList = styled.ul`
  list-style: none;
  margin: 20px 0 0;
`;

export const MemberListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0 0;

  &:first-child {
    margin: 0;
  }

  > div {
    width: 400px;
    color: ${doveGray};
  }
`;

export const MemberName = styled.strong`
  font-size: 18px;
`;
