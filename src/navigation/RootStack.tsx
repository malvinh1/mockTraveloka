import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import {RootParamList} from '../types/Navigation';
import TabNavigator from './TabNavigator';
import ScanQR from '../screens/ScanQR';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

let Stack = createStackNavigator<RootParamList>();

export default function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <TouchableOpacity
            style={{
              minWidth: 44,
              minHeight: 45,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
          </TouchableOpacity>
        ),
        headerTitle: '',
        headerStyle: {
          shadowColor: 'transparent',
        },
      }}
      mode="modal"
    >
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen name="ScanQR" component={ScanQR} />
    </Stack.Navigator>
  );
}
