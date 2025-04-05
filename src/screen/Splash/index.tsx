import React, {useEffect} from 'react';
import {ImageBackground, StatusBar, Text, View} from 'react-native';
import {styles} from './style';
import SCREEN from '../../data/ScrName';
import {COLOR} from '../../themes/StyleGuides';
import { Images } from '../../assest';

export default function Splash(props: any) {
  const {navigation} = props;

  useEffect(() => {
    setTimeout(() => {
      navigation.replace(SCREEN.AccountSetUp);
    }, 3000);
  }, []);
  return (
    <ImageBackground style={styles.container} source={Images.Splash}  >
      <StatusBar backgroundColor={COLOR.primary} />
    </ImageBackground>
  );
};
