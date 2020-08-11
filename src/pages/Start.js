import React, {useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';
import LottieView from 'lottie-react-native';
import anim from '../../assets/animations/anim.json';

export default function Start({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Menu');
    }, 1100);
  });

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#044BD9"></StatusBar>
      <View style={styles.container}>
        <LottieView resizeMode="contain" source={anim} autoPlay loop={false} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#044BD9',
  },
  buttonContinue: {
    height: 45,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9,
  },
  textButtonContinue: {
    color: '#044BD9',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
