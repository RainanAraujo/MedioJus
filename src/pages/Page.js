import {SharedElement} from 'react-navigation-shared-element';
import React from 'react';
import {StatusBar, Image} from 'react-native';

export default Page = ({navigation, route}) => {
  const {icon, name, content} = route.params.selected;

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#044BD9"></StatusBar>
      <SharedElement id={`item.${name}.photo`}>
        <Image source={icon} />
      </SharedElement>
    </>
  );
};
