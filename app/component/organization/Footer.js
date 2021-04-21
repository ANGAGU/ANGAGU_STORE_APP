// react import
import React from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';

// lib import
import styled from 'styled-components/native';

// local import
import ButtonWithText from '../atom/ButtonWithText';
import IconLogin from '../../asset/icon/icon_login.png';
import IconOrder from '../../asset/icon/icon_order.png';
import IconSearch from '../../asset/icon/icon_search.png';
import { useEffect, useState } from 'react/cjs/react.development';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/core';
const Footer = ({navigation, title}) => {
    const [token, setToken] = useState("")
    const [isLoading, setIsLoading] = useState(false);
    const goLink = link => {
        navigation.navigate(link);
    };
    
    useEffect(()=> {
        initFunction = async () => {
            setToken(await AsyncStorage.getItem('token'));
            setIsLoading(true);
        }
        initFunction();
    })
    
    const menuList = [
        {
        icon: IconSearch,
        name: '검색',
        link: 'ProductList',
        },
        {
        icon: IconOrder,
        name: '주문목록',
        link: 'OrderList',
        },
    ];
    return (
      
        <MenuWrapper>
            {isLoading && 
            <>
                <Menu onPress={() => token != null && token != '' ? logout() : goLink('Login')}>
                    <MenuIcon source={IconLogin} />
                    <MenuText>{token != null && token != '' ? '로그아웃' : '로그인'}</MenuText>
                </Menu>  
                {menuList.map((item, index) => {
                    return (
                        <Menu key={index} onPress={() => goLink(item.link)}>
                            <MenuIcon source={item.icon} />
                            <MenuText>{item.name}</MenuText>
                        </Menu>
                    );
                })}
            </>
            }
        </MenuWrapper>
    );
};
const MenuWrapper = styled.View`
  flex-direction: row;
  height: 80px;
  margin-bottom: 10px;
`;
const Menu = styled(TouchableOpacity)`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const MenuIcon = styled.Image`
  width: 30px;
  height: 30px;
  resize-mode: contain;
`;
const MenuText = styled.Text`
  font-weight: 700;
`;
export default Footer;
