import styled from 'styled-components';

import { shark, punch, appleBlossom } from '@colors';

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

export const NewTeam = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px dashed rgba(255, 255, 255, 0.3);
  color: rgba(255, 255, 255, 0.3);
  margin: 0 0 8px;
  background: transparent;
  font-weight: bold;
  font-size: 26px;
  transition: all 0.2s;
  &:hover {
    border: 1px dashed rgba(255, 255, 255, 0.6);
    color: rgba(255, 255, 255, 0.6);
  }
`;

export const Logout = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px dashed ${punch};
  background: transparent;
  color: ${punch};
  font-weight: bold;
  transition: all 0.2s;
  &:hover {
    border-color: ${appleBlossom};
    color: ${appleBlossom};
  }
`;
