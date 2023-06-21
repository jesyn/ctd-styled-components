import { FC, PropsWithChildren } from 'react';
import { StyledCardBody } from './card.styles';

const CardBody: FC<PropsWithChildren<object>> = ({ children }: PropsWithChildren<object>) => (
  <StyledCardBody>{children}</StyledCardBody>
);

export default CardBody;
