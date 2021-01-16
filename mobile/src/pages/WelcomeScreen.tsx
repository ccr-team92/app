import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Dimensions, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AppLoading from 'expo-app-loading';
import { useFonts, Dosis_700Bold, Dosis_800ExtraBold } from '@expo-google-fonts/dosis';
const image = {uri: 'https://i.imgur.com/4ht2Gwi.png'}
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  let [fontsLoaded] = useFonts({
    Dosis_700Bold,
    Dosis_800ExtraBold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const navigation = useNavigation();

  function handleNavigateToLogin() {
    navigation.navigate("Login");
  }

    return (
      <ImageBackground source={image} style={styles.imgBackground}>
        <View style={styles.container}>
        <LinearGradient colors={['RGBA(248,189,9,0.3)', 'RGBA(255,132,65,0.3', 'RGBA(254,18,67,0.3)']} style={styles.background}></LinearGradient>
            <View style={styles.rect}>
              <Image style={styles.image} source={{ uri: 'https://fmnova.com.br/images/noticias/safe_image.jpg' }} />
              <Text style={styles.title}>Bem-vindo, estudante!</Text>
              <TouchableOpacity style={styles.button} onPress={handleNavigateToLogin}>
                  <Text style={styles.buttonText}>COMECE SUA JORNADA</Text>
              </TouchableOpacity>
            </View>
        </View>
      </ImageBackground> 
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    imgBackground: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      width: Dimensions.get('window').width
    },
    background: {
      position: 'absolute',
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width
    },
    rect: {
      backgroundColor: 'rgba(255, 255, 255, 0.60)',
      width: 350,
      height: 540, 
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderRadius: 31,
    },
    title: {
      top: 0,
      color: '#FC1243',
      fontSize: 47, 
      textAlign: 'center',
      textWeight: 'bold',
      fontFamily: 'Dosis_800ExtraBold'
    },
    button: {
      backgroundColor: '#FE1243',
      bottom:0,
      borderRadius:36,
      width: 256,
      height: 72,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 20, 
      fontFamily: 'Dosis_800ExtraBold'
    },
    image: {
      width: 147,
      height: 147
    }
})
