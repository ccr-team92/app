import React from 'react';
import {ScrollView, View, StyleSheet, Text, TouchableOpacity, Image, Dimensions, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AppLoading from 'expo-app-loading';
import { useFonts, Dosis_700Bold, Dosis_800ExtraBold, Dosis_400Regular } from '@expo-google-fonts/dosis';

export default function Login() {
  let [fontsLoaded] = useFonts({
    Dosis_700Bold,
    Dosis_800ExtraBold,
    Dosis_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
    return (
      <ScrollView style={styles.container}>
        <ImageBackground source={require('./assets/bgCurso.png')} style={styles.header}>
          <Text style={styles.titleCourse}>Descubra seus objetivos</Text>
        </ImageBackground>
        <View style={styles.containerFix}>
          <View style={styles.containerMain}>
            <Image source={require('./assets/progressBar.png')} style={{width: 314, height:14, marginTop: 10}}/>
            <Image source={require('./assets/courseStats.png')} style={{width: 145, height:13, marginTop: 10}}/>
            <View style={styles.line}></View>
            <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</Text>
            <ImageBackground source={require('./assets/rectCourseContent.png')} style={styles.headerContent}>
              <Image source={require('./assets/microphone.png')} style={{width: 49, height:49}}/>
              <Text style={styles.titleContent}>VÍDEO: Como definir objetivos?</Text>
            </ImageBackground>
            <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</Text>
            <ImageBackground source={require('./assets/rectCourseContent.png')} style={styles.headerContent}>
              <Image source={require('./assets/play.png')} style={{width: 49, height:49}}/>
              <Text style={styles.titleContent}>PODCAST: O que é um objetivo?</Text>
            </ImageBackground>
            <Image style={styles.image} source={require('./assets/studying.png')} />
            <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam  sed do eiusmod tempor incididunt ut,  sed do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam  sed do eiusmod tempor incididunt ut,  sed do eiusmod tempor incididunt ut.</Text>
            <ImageBackground source={require('./assets/rectCourseContent.png')} style={styles.headerContent}>
              <Image source={require('./assets/download.png')} style={{width: 49, height:49}}/>
              <Text style={styles.titleContent}>DOWNLOAD: Metodologia OBJ</Text>
            </ImageBackground>
            <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</Text>
          </View>
        </View>
      </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: '#fff',
    },
    containerFix: {
      alignItems: 'center',
    },
    containerMain: {
      alignItems: 'center',
      width: 314,
    },
    header: {
      width: Dimensions.get('window').width,
      backgroundColor: '#fff',
      height: 201,
      alignItems: 'center',
      justifyContent: 'center'

    },
    titleCourse: {
      color: '#FFF',
      fontSize: 43, 
      textAlign: 'left',
      marginLeft: 20,
      fontFamily: 'Dosis_700Bold',
    },
    headerContent: {
      width:314,
      height: 37,
      alignItems: 'center',
      marginTop: 10, 
      marginBottom: 10,
      flexDirection: 'row'
    },
    titleContent: {
      color: '#FFF',
      fontSize: 16, 
      textAlign: 'center',
      marginLeft: 10,
      fontFamily: 'Dosis_700Bold',
    },
    line: {
      width: 314,
      height:10,
      borderWeight: 3,
      borderColor: '#FF8441'
    },
    description: {
      color: '#686464',
      fontSize: 16, 
      textAlign: 'justify',
      marginTop: 10,
      marginBottom: 10,
      fontFamily: 'Dosis_400Regular',
    },
    image: {
      width: 320,
      height: 212
    }
})
