import {SharedElement} from 'react-navigation-shared-element';
import React from 'react';
import {StatusBar, Text, Image, Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default Page = ({navigation, route}) => {
  const {icon, name, content, id} = route.params.selected;

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#044BD9"></StatusBar>
      <SharedElement id={`item.${id}.photo`}>
        <Image source={icon} />
      </SharedElement>
      <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
        <Text style={{fontSize: 50, color: 'blue'}}>Voltar</Text>
      </TouchableOpacity>
      <Text style={{fontSize: 30, color: 'black'}}>{name}</Text>
      {content.map((paragraph) => (
        <Text style={{fontSize: 10, color: 'black'}}>{paragraph}</Text>
      ))}
    </>
  );
};
