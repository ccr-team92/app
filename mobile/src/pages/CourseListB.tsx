import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Dimensions, ImageBackground } from 'react-native';
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
      <View style={styles.imgBackground}>
        <View style={styles.container}>
          <View style={styles.titleBox}>
            <Text style={styles.title}>TRILHAS DE APRENDIZAGEM</Text>
          </View>
          <View style={styles.courseCategory}>
            <TouchableOpacity style={styles.squareA}>
              <Text style={styles.textGray}>PREPARE-SE PARA A VIDA</Text>
              <Image style={{width:17, height:24}} source={require('./assets/padlockColor.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.squareB}>
              <Text style={styles.text}>ESTUDE O QUE AMA</Text>
              <Image style={{width:25, height:24}} source={require('./assets/loveWhite.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.squareC}>
              <Text style={styles.textGray}>SE CONHEÇA MELHOR</Text>
              <Image style={{width:27, height:24}} source={require('./assets/star.png')} />
            </TouchableOpacity>
          </View>
          <Text style={styles.textDescription}>Comece aqui sua jornada. Finalize as duas trilhas para desbloquear novos cursos</Text>
          <View style={styles.titleBox}>
            <Text style={styles.title}>CURSOS</Text>
          </View>
          <TouchableOpacity>
              <ImageBackground source={require('./assets/bgCurso.png')} style={styles.bgCurso}>
                <Text style={styles.titleCourse}>Empreenda</Text>
              </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity>
              <ImageBackground source={require('./assets/bgCurso.png')} style={styles.bgCurso}>
                <Text style={styles.titleCourse}>Amadureça sua inteligência emocional</Text>
              </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity>
              <ImageBackground source={require('./assets/bgCurso.png')} style={styles.bgCurso}>
                <Text style={styles.titleCourse}>Planeje suas finanças</Text>
              </ImageBackground>
          </TouchableOpacity>
        </View>
        
          <ImageBackground source={require('./assets/menuGradient.png')} style={styles.footer}>
            <View style={styles.circleContainer}>
                <TouchableOpacity style= {styles.circles}>
                    <Image source={require('./assets/trilha.png')} style={styles.icon} />
                </TouchableOpacity>
                
              </View>
              <View style={styles.circleContainer}>
                <TouchableOpacity style= {styles.circles}>
                    <Image source={require('./assets/cursos.png')} style={styles.icon} />
                </TouchableOpacity>
                
              </View>
              <View style={styles.circleContainer}>
                <TouchableOpacity style= {styles.circles}>
                    <Image source={require('./assets/novidades.png')} style={styles.icon} />
                </TouchableOpacity>
              </View>
              <View style={styles.circleContainer}>
                <TouchableOpacity style= {styles.circles}>
                    <Image source={require('./assets/biblioteca.png')} style={styles.icon} />
                </TouchableOpacity>
              </View>
              <View style={styles.circleContainer}>
                <TouchableOpacity style= {styles.circles}>
                    <Image source={require('./assets/perfil.png')} style={styles.icon} />
                </TouchableOpacity>
              </View>
            </ImageBackground>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor:'#fff',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        marginTop: 37,

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
    titleBox: {
      backgroundColor: '#FE8342',
      width: 345,
      height: 31,
      borderRadius: 15.5,
      justifyContent: 'center',
    },
    title: {
      top: 0,
      color: '#FFF',
      fontSize:20, 
      textAlign: 'center',
      textWeight: 'bold',
      fontFamily: 'Dosis_400Regular',
    },
    courseCategory: {
      height:113,
      width: 345,
      marginTop: 10,
      padding: 0,
      borderRadius: 20,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    squareA: {
      backgroundColor: 'rgba(254,131,66,0.2)',
      width: 113,
      height:113,
      alignItems: 'center',
      justifyContent: "center",
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
    },
    squareB: {
      backgroundColor: '#FE8342',
      width: 113,
      height:113,
      alignItems: 'center',
      justifyContent: "center",
    },
    squareC: {
      backgroundColor: 'rgba(254,131,66,0.2)',
      width: 113,
      height:113,
      alignItems: 'center',
      justifyContent: "center",
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
    },
    text: {
      color: '#FFF',
      fontSize: 17, 
      textAlign: 'center',
      textWeight: 'bold',
      fontFamily: 'Dosis_800ExtraBold',
      marginBottom:10
    },
    textGray: {
      color: '#878684',
      fontSize: 17, 
      textAlign: 'center',
      textWeight: 'bold',
      fontFamily: 'Dosis_800ExtraBold',
      marginBottom:10
    },
    textDescription: {
      color: '#878684',
      fontSize: 17, 
      textAlign: 'center',
      textWeight: 'bold',
      fontFamily: 'Dosis_400Regular',
      marginBottom:10,
      marginTop: 10
    },
    bgCurso: {
      width: 314,
      height: 100,
      marginTop: 10,
      justifyContent: 'center',
      alignItems: 'center',
      resizeMode: "cover",
    },
    titleCourse: {
      top: 0,
      color: '#FFF',
      fontSize:25, 
      textAlign: 'center',
      fontFamily: 'Dosis_700Bold',
    },
    footer: {
      position: "absolute",
      left: 20,
      right: 20,
      bottom: 0,
      padding:5,
  
      backgroundColor: "rgba(254,18,67,0.3)",
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      height: 80,
  
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
