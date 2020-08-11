import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Image, TouchableOpacity} from 'react-native';
import Start from './pages/Start';
import Menu from './pages/Menu';
import Home from './pages/Home';
import About from './pages/About';
import logored from '../assets/images/namelogo.png';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {screensEnabled, enableScreens} from 'react-native-screens';
import Page from './pages/Page';

enableScreens();

const AppStack = createSharedElementStackNavigator();

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
          sharedElementsConfig={(route, otherRoute, showing) => {
            if (otherRoute.name == 'Page') {
              const {name} = otherRoute.params.selected;
              console.log(name);
              return [{id: `item.${name}.photo`, animation: 'move'}];
            }
          }}
          options={({navigation}) => ({
            headerTitleAlign: 'center',
            headerLeft: () => null,
            headerStyle: {
              backgroundColor: '#0455BF',
              height: 100,
            },
            headerTitleAlign: 'left',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('About')}>
                <FontAwesomeIcon
                  icon={faInfoCircle}
                  size={30}
                  color="#fff"
                  style={{marginRight: 20}}
                />
              </TouchableOpacity>
            ),
            headerTitle: () => (
              <Image source={logored} style={{marginLeft: 10}} />
            ),
          })}
        />

        <AppStack.Screen
          name="Home"
          component={Home}
          options={() => ({
            header: () => null,
          })}
        />
        <AppStack.Screen
          name="Page"
          component={Page}
          sharedElementsConfig={(route, otherRoute, showing) => {
            const {name} = route.params.selected;
            return [{id: `item.${name}.photo`, animation: 'move'}];
          }}
          options={{
            title: 'Page',
            headerTitleAlign: 'center',
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#0455BF',
            },
            headerTitleAlign: 'left',
          }}
        />
        <AppStack.Screen
          name="About"
          component={About}
          options={{
            title: 'Sobre',
            headerTitleAlign: 'center',
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#0455BF',
            },
            headerTitleAlign: 'left',
          }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
