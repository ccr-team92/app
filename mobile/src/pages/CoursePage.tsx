import React from 'react';
import {ScrollView, View, StyleSheet, Text, TouchableOpacity, Image, Dimensions, ImageBackground } from 'react-native';

export default function Course() {
    return (
      <ScrollView style={styles.container}>
        <ImageBackground source={require('../assets/bgCurso.png')} style={styles.header}>
          <Text style={styles.titleCourse}>Descubra seus objetivos</Text>
        </ImageBackground>
        <View style={styles.containerFix}>
          <View style={styles.containerMain}>
            <View style={styles.progress}>
                <View style={styles.progressProgress}></View>
                <Text style={styles.progressText}>25% CONCLUÍDO</Text>
            </View>
            <View style={styles.progressInfoBar}>
                <View style={styles.progressInfo}><Image source={require('../assets/trophy.png')} style={{width: 13, height:11}}/><Text style={styles.progressInfoText}>3 MEDALHAS</Text></View>
                <View style={styles.progressInfo}><Image source={require('../assets/time.png')} style={{width: 11, height:11}}/><Text style={styles.progressInfoText}>8H RESTANTES</Text></View>
            </View>
            <View style={styles.line}></View>
            <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</Text>
            <ImageBackground source={require('../assets/rectCourseContent.png')} style={styles.headerContent}>
              <Image source={require('../assets/microphone.png')} style={{width: 49, height:49}}/>
              <Text style={styles.titleContent}>VÍDEO: Como definir objetivos?</Text>
            </ImageBackground>
            <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</Text>
            <ImageBackground source={require('../assets/rectCourseContent.png')} style={styles.headerContent}>
              <Image source={require('../assets/play.png')} style={{width: 49, height:49}}/>
              <Text style={styles.titleContent}>PODCAST: O que é um objetivo?</Text>
            </ImageBackground>
            <Image style={styles.image} source={require('../assets/studying.png')} />
            <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam  sed do eiusmod tempor incididunt ut,  sed do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam  sed do eiusmod tempor incididunt ut,  sed do eiusmod tempor incididunt ut.</Text>
            <ImageBackground source={require('../assets/rectCourseContent.png')} style={styles.headerContent}>
              <Image source={require('../assets/download.png')} style={{width: 49, height:49}}/>
              <Text style={styles.titleContent}>DOWNLOAD: Metodologia OBJ</Text>
            </ImageBackground>
            <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</Text>
          </View>
        </View>
      </ScrollView>
    )
}

const styles = StyleSheet.create({
    progress: {
        backgroundColor: 'rgba(254,197,196,0.65)',
        borderRadius: 10,
        width: '100%',
        padding: '1%',
        position: 'relative',
        marginVertical: 10,
    },
    progressProgress: {
        backgroundColor: 'rgba(255,132,65,1)',
        borderRadius: 10,
        width: '25%',
        left: 0,
        top: 0,
        bottom: 0,
        position: 'absolute',
        margin: 3,
        zIndex: 9,
    },
    progressText: {
        width: '100%',
        left: 0,
        textAlign: 'center',
        fontFamily: 'Dosis_700Bold',
        fontSize: 10,
        zIndex: 10,
    },
    progressInfoBar: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
    },
    progressInfo: {
        flexDirection: 'row',
        padding: 3,
    },
    progressInfoText: {
        fontFamily: 'Dosis_400Regular',
        fontSize: 10,
        marginLeft: 5,
    },
    container: {
        flex: 1,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: '#fff',
        paddingBottom: 30,
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
