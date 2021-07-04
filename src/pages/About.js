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
import sobre from '../assets/images/sobre.png';

export default function About({navigation}) {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0455BF" />
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.imageView}>
            <Image source={sobre} style={styles.image} />
            <Text style={styles.textAbout}>
              Este aplicativo tem por objetivo possibilitar o contato dos
              discentes de Ensino Médio com orientações ou conhecimentos
              jurídicos, especialmente direitos e deveres, que contribuirão para
              a formação, cada vez mais cedo, de cidadãos ativos, críticos,
              lúcidos e conscientes de seu papel na construção de uma sociedade
              mais livre, justa e solidária.
            </Text>
          </View>
          <View style={styles.textView}>
            <Text style={styles.textBold}>Pesquisador:</Text>
            <Text style={styles.textLight}>Lauro Henrique Borges Leal</Text>
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
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    height: 130,
    aspectRatio: 1.539,
  },
  horizontalView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  imageView: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },
  scrollView: {
    flexGrow: 1,
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
  textAbout: {
    textAlign: 'center',
    fontSize: 15,
    marginTop: 20,
    lineHeight: 20,
    color: '#000',
  },
});
