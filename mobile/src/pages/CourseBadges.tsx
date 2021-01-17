import React from 'react';
import {ScrollView, View, StyleSheet, Text, TouchableOpacity, Image, Dimensions, ImageBackground } from 'react-native';

export default function Login() {
    return (
      <ScrollView style={styles.container}>
        <ImageBackground source={require('./assets/bgCurso.png')} style={styles.header}>
          <Text style={styles.titleCourse}>Descubra seus objetivos</Text>
        </ImageBackground>
        <View style={styles.containerFix}>
          <View style={styles.containerMain}>
            <Image source={require('./assets/progressBar100.png')} style={{width: 309, height:10, marginTop: 10}}/>
            <View style={styles.medalsContainer}>
              <Image source={require('./assets/trophyColor.png')} style={{width: 27, height:22, marginRight:5,}}/> 
              <Text style={styles.medals}>2 CONQUISTAS</Text>
            </View>
            <Image source={require('./assets/line.png')} style={{width:309, height:1, marginTop: 10, marginBottom:10}}/>
            
            <View style={styles.headerContent}>
              <Image source={require('./assets/forca2.png')} style={{width: 74, height:74}}/> 
              <Text style={styles.titleContent}>Força, foco e fé</Text>
            </View>
            <View style={styles.headerContent}>
              <Image source={require('./assets/agora2.png')} style={{width: 74, height:74}}/> 
              <Text style={styles.titleContent}>#agoravai</Text>
            </View>

            <ImageBackground source={require('./assets/rectHeaderPoints.png')} style={styles.headerPoints}>
              <Image source={require('./assets/ranking2.png')} style={{width: 65, height:65, marginTop: -30, marginBottom: 20}}/> 
              <Text style={styles.medals}>Você fez 2080 pontos!</Text>
            </ImageBackground>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>VER TODAS AS CONQUISTAS</Text>
            </TouchableOpacity>
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
    medalsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 20,
    },
    medals: {
      fontSize:23,
      fontFamily: 'Dosis_400Regular',
      color: "#878684"
    },
    headerContent: {
      width:307,
      height: 62,
      alignItems: 'center',
      marginTop: 10, 
      marginBottom: 10,
      flexDirection: 'row',
      backgroundColor: 'rgba(253,82,66,0.61)',
      borderRadius: 36
    },
    headerPoints: {
      width:314,
      height: 131,
      alignItems: 'center',
      marginBottom: 10,
      borderRadius: 20,
      marginTop: 50
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
    },
    button: {
      backgroundColor: 'rgba(253,82,66,0.61)',
      bottom:0,
      borderRadius:36,
      width: 326,
      height: 72,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
      marginBottom: 40
    },
    buttonText: {
      color: '#fff',
      fontSize: 20, 
      fontFamily: 'Dosis_800ExtraBold'
    }
})
