import {SharedElement} from 'react-navigation-shared-element';
import React from 'react';
import {
  StatusBar,
  Text,
  Image,
  View,
  FlatList,
  ImageBackground,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default Page = ({navigation, route}) => {
  const {icon, name, content, id, background} = route.params.selected;

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0455BF" />
      <View style={{flexGrow: 1, flex: 1, backgroundColor: '#0455BF'}}>
        <View
          style={{
            flexGrow: 1,
            flex: 1,
            backgroundColor: '#fff',
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <ImageBackground
              source={background}
              style={{
                width: '100%',
                resizeMode: 'cover',
                justifyContent: 'center',
              }}
              imageStyle={{borderTopRightRadius: 30, borderTopLeftRadius: 30}}>
              <View
                style={{
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderTopRightRadius: 30,
                  borderTopLeftRadius: 30,
                  backgroundColor: '#0455BF50',
                }}>
                <View
                  style={{
                    height: 120,
                    width: 120,
                    borderRadius: 999,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#fff',
                    margin: 10,
                  }}>
                  <SharedElement id={`item.${id}.photo`}>
                    <Image source={icon} />
                  </SharedElement>
                </View>
              </View>
            </ImageBackground>
          </View>

          <FlatList
            data={content}
            initialNumToRender={50}
            maxToRenderPerBatch={50}
            windowSize={101}
            showsVerticalScrollIndicator={false}
            style={{flex: 1, paddingHorizontal: 25}}
            keyExtractor={({index}) => index}
            renderItem={({item, index}) => {
              if (item.type == 'paragraph') {
                return (
                  <Text
                    key={index}
                    style={{
                      fontSize: 20,
                      color: '#656565',
                      textAlign: 'justify',
                      lineHeight: 30,
                      marginBottom: 10,
                    }}>
                    {item.data}
                  </Text>
                );
              } else if (item.type == 'title') {
                return (
                  <Text
                    style={{
                      fontSize: 20,
                      color: '#494848',
                      textAlign: 'justify',
                      lineHeight: 40,
                      fontFamily: 'Roboto-Bold',
                      marginBottom: 10,
                    }}>
                    {item.data}
                  </Text>
                );
              } else if (item.type == 'item') {
                return (
                  <Text
                    style={{
                      fontSize: 20,
                      color: '#656565',
                      textAlign: 'justify',
                      lineHeight: 30,
                      marginBottom: 10,
                      marginLeft: 20,
                    }}>
                    {item.data}
                  </Text>
                );
              } else if (item.type == 'subItem') {
                return (
                  <Text
                    style={{
                      fontSize: 20,
                      color: '#656565',
                      textAlign: 'justify',
                      lineHeight: 30,
                      marginBottom: 10,
                      marginLeft: 50,
                    }}>
                    {item.data}
                  </Text>
                );
              } else if (item.type == 'subSubItem') {
                return (
                  <Text
                    style={{
                      fontSize: 20,
                      color: '#656565',
                      textAlign: 'justify',
                      lineHeight: 30,
                      marginBottom: 10,
                      marginLeft: 80,
                    }}>
                    {item.data}
                  </Text>
                );
              } else if (item.type == 'quote') {
                return (
                  <Text
                    key={index}
                    style={{
                      fontSize: 18,
                      color: '#656565',
                      textAlign: 'justify',
                      lineHeight: 30,
                      marginBottom: 10,
                      marginLeft: 40,
                      fontFamily: 'Roboto-Light',
                    }}>
                    {item.data}
                  </Text>
                );
              } else if (item.type == 'titleCenter') {
                return (
                  <Text
                    style={{
                      fontSize: 20,
                      color: '#494848',
                      textAlign: 'center',
                      fontFamily: 'Roboto-Bold',
                      lineHeight: 30,
                      marginBottom: 10,
                    }}>
                    {item.data}
                  </Text>
                );
              }
            }}>
            <View style={{marginHorizontal: 25, marginBottom: 10}}></View>
          </FlatList>
        </View>
      </View>
    </>
  );
};
