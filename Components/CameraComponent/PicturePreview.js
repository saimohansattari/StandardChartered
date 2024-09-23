import * as FileSystem from 'expo-file-system'; // Import the FileSystem
import React from 'react';
import { Dimensions, Image, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';




const { width, height } = Dimensions.get('window');

export default function PicturePreview({ photo, handleRetakePhoto }) {
  
  
  const handleSave = async () => {
    try {
      // Define the path where the image will be saved
      const fileUri = `${FileSystem.documentDirectory}photo.jpg`;

      // Convert base64 image to a file and save it to the device
      await FileSystem.writeAsStringAsync(fileUri, photo.base64, {
        encoding: FileSystem.EncodingType.Base64,
      });

      // Download success feedback
      alert('Photo saved to: ' + fileUri);
    } catch (error) {
      console.error('Error saving photo: ', error);
      alert('Error saving photo');
    }
  };
  
  
  
  
  
  
  
  
  return (
    <SafeAreaView>
      <View>
        <Image
          style={[styles.previewContainer, { width : width * 0.93, height: height * 0.78}]} 
          source={{ uri: 'data:image/jpg;base64,' + photo.base64 }}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity>         
          <Icon name='trash' style={styles.button} size={28} color='red' onPress={handleRetakePhoto} />
        </TouchableOpacity>
        <TouchableOpacity>         
          <Icon name='save' style={styles.button} size={28} color='green' onPress={handleSave} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
  previewContainer: {
    borderRadius: 5,
  },
  buttonContainer: {
    position:'absolute',
    bottom:15,
    flexDirection: 'row',
    gap:40,
    justifyContent:'center',
    width: '100%',
  },
  button: {
    backgroundColor: 'whitesmoke',
    borderRadius: 50,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
