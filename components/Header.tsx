import * as React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background-color: lightblue;
`;

const Heading = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

const Header: React.FC = () => (
  <Wrapper>
    <Heading>XKCD Comics</Heading>
  </Wrapper>
);

export default Header;
