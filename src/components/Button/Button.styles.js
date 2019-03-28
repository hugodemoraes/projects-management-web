import styled, { css } from 'styled-components';
import {
  white,
  chetwodeBlue,
  blueViolet,
  punch,
  appleBlossom,
  silverSand,
  doveGray,
  dustyGray,
} from '@colors';

const sizes = {
  small: css`
    height: 28px;
    font-size: 12px;
  `,
  default: css`
    height: 36px;
    font-size: 14px;
  `,
  big: css`
    height: 44px;
    font-size: 18px;
  `,
};

const colors = {
  default: css`
    background: ${chetwodeBlue};
    &:hover {
      background: ${blueViolet};
    }
  `,
  danger: css`
    background: ${punch};
    &:hover {
      background: ${appleBlossom};
    }
  `,
  gray: css`
    background: ${silverSand};
    color: ${doveGray};
    &:hover {
      background: ${dustyGray};
    }
  `,
};

export const StyledButton = styled.button.attrs({
  type: 'button',
})`
  border-radius: 3px;
  transition: background-color 0.15s ease;
  background: ${chetwodeBlue};
  border: 0;
  color: ${white};
  font-size: 12px;
  padding: 0 10px;
  text-transform: uppercase;
  font-weight: 700;
  ${props => sizes[props.size || 'default']};
  ${props => colors[props.color || 'default']};
  ${props => props.filled === false
    && css`
      background: none;
      &:hover {
        background: none;
        opacity: 0.6;
      }
    `};
`;
