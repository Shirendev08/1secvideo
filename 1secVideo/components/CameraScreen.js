import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity,StyleSheet  } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
export default function CameraScreen() {
  
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleRecord = async () => {
    if (cameraRef.current) {
      try {
        const { uri } = await cameraRef.current.recordAsync({ maxDuration: 1 });
        await saveVideo(uri);
        console.log('Video saved:', uri);
      } catch (error) {
        console.log('Error recording video:', error);
      }
    }
  };

  const saveVideo = async (videoUri) => {
    try {
      await MediaLibrary.saveToLibraryAsync(videoUri);
    } catch (error) {
      console.log('Error saving video:', error);
    }
  };
  const navigateToVideoLibrary = () => {
    navigation.navigate('VideoLibrary');
  };

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={Camera.Constants.Type.back} ref={cameraRef}>
        <View style={{ flex: 1, backgroundColor: 'transparent', flexDirection: 'row' }}>
          <TouchableOpacity
            style={{ alignSelf: 'flex-end', alignItems: 'center', margin: 16 }}
            onPress={handleRecord}
          >
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>Record</Text>
          </TouchableOpacity>
        </View>
      </Camera>
      <TouchableOpacity onPress={navigateToVideoLibrary} style={styles.videoLibraryButton}>
        <Text style={styles.videoLibraryButtonText}>Video Library</Text>
      </TouchableOpacity>
    </View>
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