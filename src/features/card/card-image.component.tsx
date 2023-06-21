import { FC, PropsWithChildren } from 'react';
import { StyledCardImage } from './card.styles';

const CardImage: FC<PropsWithChildren<object>> = ({ children }: PropsWithChildren<object>) => (
  <StyledCardImage>{children}</StyledCardImage>
);

export default CardImage;
