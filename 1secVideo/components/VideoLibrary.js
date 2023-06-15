import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, FlatList, Video } from 'react-native';
import { createStackNavigator, Stack } from '@react-navigation/stack';
const VideoLibrary = () => {
    const [videos, setVideos] = useState([]);
  
    useEffect(() => {
      getSavedVideos().then(videos => {
        setVideos(videos);
      });
    }, []);
  
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Video Library</Text>
        <FlatList
          data={videos}
          keyExtractor={(item) => item.uri}
          renderItem={({ item }) => (
            <View style={styles.videoContainer}>
              <Video
                source={{ uri: item.uri }}
                style={styles.videoPlayer}
                resizeMode="contain"
                shouldPlay={false}
                isLooping={false}
              />
              <Text style={styles.videoName}>{item.name}</Text>
            </View>
          )}
        />
      </View>
    );
  };
  
  export default VideoLibrary;
  