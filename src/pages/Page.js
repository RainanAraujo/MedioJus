import {SharedElement} from 'react-navigation-shared-element';
import React from 'react';
import {StatusBar, Text, Image, Button, ScrollView, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default Page = ({navigation, route}) => {
  const {icon, name, content, id} = route.params.selected;

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
              height: 120,
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <SharedElement id={`item.${id}.photo`}>
              <Image source={icon} />
            </SharedElement>
          </View>

          <ScrollView
            contentContainerStyle={{flexGrow: 1}}
            showsVerticalScrollIndicator={false}>
            <View style={{marginHorizontal: 25, marginBottom: 10}}>
              {content.map((paragraph) => (
                <Text
                  style={{
                    fontSize: 20,
                    color: '#656565',
                    textAlign: 'justify',
                    lineHeight: 30,
                  }}>
                  {paragraph}
                </Text>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
};
