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
import Icon from 'react-native-vector-icons/Feather';
import data from '../assets/data';
import {SharedElement} from 'react-navigation-shared-element';

export default function Menu({navigation}) {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0455BF" />
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.textTitle}>Tópicos</Text>
          <ScrollView
            contentContainerStyle={styles.scrollView}
            showsVerticalScrollIndicator={false}>
            <View style={styles.scrollContent}>
              {data.map((item, index) => {
                if (item.type == 'topic') {
                  return (
                    <View key={index} style={styles.buttonOption}>
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate('Page', {
                            selected: {...item, id: index},
                          })
                        }>
                        <SharedElement
                          id={`item.${index}.photo`}
                          style={styles.imageView}>
                          <Image source={item.icon} />
                        </SharedElement>
                        <Text style={styles.textButtonOption}>{item.name}</Text>
                      </TouchableOpacity>
                    </View>
                  );
                } else if (item.type == 'collection') {
                  return (
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('Page', {
                          selected: {...item, id: index},
                        })
                      }
                      key={index}
                      style={styles.buttonOtherOptions}>
                      <Text style={styles.textButtonOtherOptions}>
                        {item.name}
                      </Text>
                      <Icon name="arrow-right" color="#7B7B7B" size={30} />
                    </TouchableOpacity>
                  );
                }
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0455BF',
  },
  content: {
    justifyContent: 'center',
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  scrollContent: {
    marginBottom: hp('6%'),
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: wp('100%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonOtherOptions: {
    width: wp('89%'),
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    paddingVertical: 20,
    margin: wp('1.5%'),
  },
  textButtonOtherOptions: {
    fontFamily: 'Roboto-Regular',
    fontSize: hp('1.8%'),
    color: '#79828B',
  },
  textTitle: {
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
    width: wp('100%'),
    textAlign: 'center',
    color: '#656565',
    marginVertical: hp('3%'),
  },
  scrollView: {
    flexGrow: 1,
  },
  buttonOption: {
    width: wp('43%'),
    height: wp('43%'),
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    margin: wp('1.5%'),
  },
  textButtonOption: {
    color: '#79828B',
    textAlign: 'center',
    fontSize: hp('1.8%'),
    fontFamily: 'Roboto-Regular',
    marginBottom: wp('3%'),
  },
  imageView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: 10,
  },
});
