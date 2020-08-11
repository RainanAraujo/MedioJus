import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Image, TouchableOpacity} from 'react-native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import Start from './pages/Start';
import Menu from './pages/Menu';
import About from './pages/About';
import logored from '../assets/images/namelogo.png';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';
const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen
          name="Start"
          component={Start}
          options={{
            headerShown: false,
            headerTitleAlign: 'center',
          }}
        />
        <AppStack.Screen
          name="Menu"
          component={Menu}
          options={({navigation}) => ({
            headerTitleAlign: 'center',
            headerLeft: () => null,
            headerStyle: {
              backgroundColor: '#044BD9',
            },
            headerTitleAlign: 'left',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('About')}>
                <FontAwesomeIcon
                  icon={faInfoCircle}
                  size={30}
                  color="#fff"
                  style={{marginRight: 10}}
                />
              </TouchableOpacity>
            ),
            headerTitle: () => <Image source={logored} />,
          })}
        />
        <AppStack.Screen
          name="About"
          component={About}
          options={{
            title: 'Sobre',
            headerTitleAlign: 'center',
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#044BD9',
            },
            headerTitleAlign: 'left',
          }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
