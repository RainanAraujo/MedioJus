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
import {faInfoCircle, faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {screensEnabled, enableScreens} from 'react-native-screens';
import {HeaderBackButton} from '@react-navigation/stack';
import Page from './pages/Page';
import Icon from 'react-native-vector-icons/Feather';
enableScreens();

const AppStack = createSharedElementStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          gestureEnabled: false,
        }}>
        <AppStack.Screen
          name="Start"
          screenOptions={{
            gestureEnabled: false,
          }}
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
              backgroundColor: '#0455BF',
              height: hp('12%'),
              elevation: 0,
            },
            headerTitleAlign: 'left',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('About')}>
                <Icon
                  name="info"
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
            const {id, type} = route.params.selected;
            if (type == 'topic') {
              return [`item.${id}.photo`];
            }
          }}
          options={({navigation, route}) => ({
            title: route.params.selected.name,
            headerTitleAlign: 'center',
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#0455BF',
              height: hp('11%'),
              elevation: 0,
            },
            headerTitleAlign: 'left',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                <Icon
                  name="arrow-left"
                  size={25}
                  color="#fff"
                  style={{marginLeft: 20}}
                />
              </TouchableOpacity>
            ),
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
              backgroundColor: '#0455BF',
            },
            headerTitleAlign: 'left',
          }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
