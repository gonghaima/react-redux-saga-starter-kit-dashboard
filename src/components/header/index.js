import React from 'react';
import { FaBars, FaElementor } from 'react-icons/fa';
import {
  Bars,
  Header,
  HeaderContent,
  LeftSection,
  Title
} from '../../modules/styled/Header';

export default () => {
  return (
    <Header>
      <HeaderContent>
        <LeftSection>
          <Bars href="/">
            <FaBars />
          </Bars>
          <Title>Product Name</Title>
        </LeftSection>
        <FaElementor />
      </HeaderContent>
    </Header>
  );
};
