import React from 'react';
import {SafeAreaView,  ScrollView,  StatusBar,  StyleSheet,  Text,  useColorScheme,  View,} from 'react-native';

import {Colors,  DebugInstructions,  Header,  LearnMoreLinks,  ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';

//um ou outro
import { createStackNavigator } from '@react-navigation/stack';
//import { createDrawerNavigator } from '@react-navigation/drawer';

import {NavigationContainer} from '@react-navigation/native';
import Login from '../flashcard/src/Telas/Login';
import Signin from './src/Telas/Signin';


//um ou outro
const Stack = createStackNavigator();
//const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Signin/>
    /*<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>*/
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
