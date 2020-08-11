import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  FlatList,
  SafeAreaView,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import data from '../../assets/data';

export default function Menu({navigation}) {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#044BD9"></StatusBar>
      <FlatList
        contentContainerStyle={{paddingTop: 10}}
        numColumns={2}
        data={data}
        renderItem={({item}) => (
          <View style={styles.buttonOption}>
            <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
              <View style={styles.imageView}>
                <Image source={item.icon} />
              </View>

              <Text style={styles.textButtonOption}>{item.name}</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.name}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafa',
  },
  buttonOption: {
    width: wp('47%'),
    height: wp('47%'),
    backgroundColor: '#fff',
    marginBottom: wp('3%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    shadowColor: '#f5f5f5',
    elevation: 1,
    marginLeft: wp('2%'),
  },
  textButtonOption: {
    color: '#000',
    textAlign: 'center',
    fontSize: hp('2%'),
    marginBottom: wp('3%'),
  },
  imageView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: 10,
  },
});
