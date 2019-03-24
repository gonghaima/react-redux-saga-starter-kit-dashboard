import React from 'react';
import { Link } from 'react-router-dom';
import {
  Background,
  Heading,
  LinkText,
  StyledContainer
} from '../modules/styled/NotFound';
export const NotFound = () => {
  return (
    <Background>
      <StyledContainer>
        <Heading>404</Heading>
        <Link to="/">
        <LinkText>go home</LinkText>
      </Link>
      </StyledContainer>
    </Background>
  );
};
