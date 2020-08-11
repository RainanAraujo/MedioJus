import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import homeImage from '../../assets/images/homeImage.png';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function Home({navigation}) {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0455BF" />
      <View style={styles.container}>
        <Image source={homeImage} style={styles.homeImage} />
        <View>
          <Text style={styles.textTitle}>Descubra seus direitos.</Text>
          <Text style={styles.textSubTitle}>
            Conteúdos destinados aos alunos de Ensino Médio.
          </Text>
        </View>

        <TouchableOpacity
          style={styles.buttonAccess}
          onPress={() => navigation.navigate('Menu')}>
          <Text style={styles.textButton}>Acessar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    backgroundColor: '#0455BF',
    paddingHorizontal: 30,
  },

  homeImage: {
    height: 300,
    aspectRatio: 1.1,
  },
  textTitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: 34,
  },
  textSubTitle: {
    marginTop: 10,
    fontFamily: 'Roboto-Light',
    fontSize: 14,
    width: 250,
    lineHeight: 24,
  },
  buttonAccess: {
    width: '100%',
    backgroundColor: '#F24445',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  textButton: {
    fontSize: 16,
  },
});
