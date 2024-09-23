import { AntDesign } from '@expo/vector-icons';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useRef, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PicturePreview from './PicturePreview';

export default function Camera() {

    const [facing, setFacing] = useState('front');
    const [permission, requestPermission] = useCameraPermissions();
    const [photo, setPhoto] = useState(null);
    const cameraRef = useRef(null)

    if(!permission){
        return <View />
    }

    if(!permission.granted) {
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: 'center' }}>Allow Access</Text>
                <Button onPress={requestPermission} title='Permission Grant' />
            </View>
        )
    }


    const toggleCameraFacing = () => {
        setFacing(current => (current === 'back' ? 'front' : 'back'));
    }


    const handleTakePhoto = async () => {
        if(cameraRef.current) {
            const options = {
                quality: 1,
                base64 : true,
                exit: false,
            };

            const takedPhoto = await cameraRef.current.takePictureAsync(options);
            
            setPhoto(takedPhoto);
        }
    }

    const handleRetakePhoto = () => setPhoto(null);

    if (photo) {
        return <PicturePreview photo={photo} handleRetakePhoto={handleRetakePhoto} />
    }



  return (
    <View style={styles.container}> 
        <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
           <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
                    <AntDesign name='retweet' size={28} color='black' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleTakePhoto}>
                    <AntDesign name='camera' size={28} color='black' />
                </TouchableOpacity>
           </View>
        </CameraView>
    </View>
  )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    camera: {
      flex: 1,
    },
    buttonContainer: {
        backgroundColor:'transparent',
        marginBottom:30,
        flex: 1,
        flexDirection: 'row',
        
    },
    button: {
      flex: 1,
      alignSelf: 'flex-end',
      alignItems: 'center',
      marginHorizontal: 10,
      backgroundColor: 'gray',
      borderRadius: 10,
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
    },
  });