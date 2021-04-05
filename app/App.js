/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import styled from 'styled-components/native';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Container>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <TopView/>
        <Logo>
          <LogoText>안가구</LogoText>
          <LogoSmallText>오픈마켓 가구 AR</LogoSmallText>
        </Logo>
        <BotView/>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #35BCD6;
`;
const TopView = styled.View` flex: 0.92;`
const BotView = styled.View` flex: 1;`
const Logo = styled.View`
  justify-content: center;
  align-items: center;
`
const LogoText = styled.Text`
  font-size: 60px;
  color: #ffffff;
  font-weight: 800;
`
const LogoSmallText = styled.Text`
  margin-top: 5px;
  font-size: 20px;
  color: #ffffff;
  font-weight: 600;
`
export default App;
