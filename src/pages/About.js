import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import sobre from '../../assets/images/sobre.png';

export default function About({navigation}) {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0455BF"></StatusBar>
      <View style={styles.container}>
        <View style={styles.imageView}>
          <Image source={sobre} />
        </View>
        <View style={styles.textView}>
          <Text style={styles.textBold}>Pesquisador:</Text>
          <Text style={styles.textLight}>sdasddsasda</Text>
          <Text style={styles.textBold}>Orientação:</Text>
          <Text style={styles.textLight}>
            Prof. Dr. Francisco Adelton Alves Rrbeiro:
          </Text>
          <Text style={styles.textBold}>Coorientação:</Text>
          <Text style={styles.textLight}>
            Prof Dr. Alváro Itauna Schalcher Pereira
          </Text>
          <Text style={styles.textBold}>Desenvolvedores:</Text>
          <Text style={styles.textLight}>Pedro Lucas Souza Carneiro</Text>
          <Text style={styles.textLight}>Rainan Carneiro Araújo</Text>
          <Text style={styles.textBold}>Colaborador:</Text>
          <Text style={styles.textLight}>Kayo Emanuel Ribeiro de Araújo</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  horizontalView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  imageView: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
  },
  textView: {
    alignItems: 'center',
  },
  textBold: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    color: '#000',
  },
  textLight: {
    textAlign: 'center',
    fontSize: 14,
    color: '#000',
  },
});
