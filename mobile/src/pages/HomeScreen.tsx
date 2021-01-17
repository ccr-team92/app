import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Dimensions, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function Home() {
    return (
      <ImageBackground source={require('../assets/home.png')} style={styles.imgBackground}>
        <View style={styles.container}>
          <LinearGradient colors={['rgba(248,189,9,0.3)', 'rgba(255,132,65,0.3', 'rgba(254,18,67,0.3)']} style={styles.background}></LinearGradient>
          <Image style={styles.imageTrophy} source={require('../assets/trophy10.png')} />
          <Text style={styles.title}>Parabéns,</Text>
          <Text style={styles.text}>Você ganhou 10 pontos pelo seu cadastro.</Text>
          <TouchableOpacity style= {styles.buttonSubscribe}>
                <Text style={styles.buttonText}>CONHEÇA OS CURSOS</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <View style={styles.circleContainer}>
            <TouchableOpacity style= {styles.circles}>
                <Image source={require('../assets/trilha.png')} style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.textMenu}>Trilha</Text>
          </View>
          <View style={styles.circleContainer}>
            <TouchableOpacity style= {styles.circles}>
                <Image source={require('../assets/cursos.png')} style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.textMenu}>Cursos</Text>
          </View>
          <View style={styles.circleContainer}>
            <TouchableOpacity style= {styles.circles}>
                <Image source={require('../assets/novidades.png')} style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.textMenu}>Novidades</Text>
          </View>
          <View style={styles.circleContainer}>
            <TouchableOpacity style= {styles.circles}>
                <Image source={require('../assets/biblioteca.png')} style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.textMenu}>Biblioteca</Text>
          </View>
          <View style={styles.circleContainer}>
            <TouchableOpacity style= {styles.circles}>
                <Image source={require('../assets/perfil.png')} style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.textMenu}>Perfil</Text>
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
        backgroundColor:'rgba(254,18,67,0.3)',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,

    },
    imgBackground: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height
    },
    background: {
      position: 'absolute',
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width
    },
    imageTrophy: {
      height: 144,
      width: 144
    },
    title: {
      top: 0,
      color: '#FFF',
      fontSize:47, 
      textAlign: 'center',
      textWeight: 'bold',
      fontFamily: 'Dosis_800ExtraBold',
    },
    text: {
      color: '#FFF',
      fontSize: 28, 
      textAlign: 'center',
      textWeight: 'bold',
      fontFamily: 'Dosis_400Regular',
      marginBottom:10
    },
    textForgot: {
      color: '#FFF',
      fontSize:16, 
      textAlign: 'center',
      marginBottom: 5
    },
    textInput: {
      width: 326,
      height: 72,
      backgroundColor: 'rgba(255, 255, 255, 0.65)',
      borderRadius: 36,
      marginBottom: 14
    },
    button: {
      backgroundColor: '#FE1243',
      bottom:0,
      borderRadius:36,
      width: 326,
      height: 72,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonSubscribe: {
      backgroundColor: 'rgba(255, 255, 255, 0.65)',
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
    footer: {
      position: "absolute",
      left: 24,
      right: 24,
      bottom: 0,
  
      backgroundColor: "rgba(255, 255, 255, 0.65)",
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      height: 56,
  
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
  
      elevation: 3,
    },
    circleContainer: {
      justifyContent: "center",
      borderColor:'#fff'
    },
    circles:{
      backgroundColor: '#fff',
      width:59,
      height:59,
      borderRadius:50,
      marginTop: -50,
      alignItems: "center",
      justifyContent: "center"
    },
    icon: {
      width: 31,
      height: 31
    },
    textMenu: {
      color: '#FFF',
      fontSize: 14, 
      textAlign: 'center',
      textWeight: 'bold',
      fontFamily: 'Dosis_800ExtraBold',
      marginTop: 5
    }
})
