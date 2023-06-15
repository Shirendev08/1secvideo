import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity,StyleSheet } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import VideoLibrary from './components/VideoLibrary';
import CameraScreen from './components/CameraScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Camera">
      <Stack.Screen name="Camera" component={CameraScreen} />
      <Stack.Screen name="VideoLibrary" component={VideoLibrary} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  videoLibraryButton: {
    alignSelf: 'center',
    marginVertical: 20,
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
  },
  videoLibraryButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

