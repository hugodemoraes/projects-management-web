import styled from 'styled-components';

import { Button as BaseButton } from '@components';

export const Container = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: scroll;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 20px;
`;

export const HeaderTitle = styled.h1`
  font-size: 20px;
`;

export const Button = styled(BaseButton)`
  margin-left: 10px;
`;

export const Project = styled.div`
  background: rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin: 0 0 20px;
  padding: 20px;
`;

export const Description = styled.p`
  font-size: 18px;
`;
