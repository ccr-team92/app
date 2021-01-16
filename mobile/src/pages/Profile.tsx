import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Dimensions, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AppLoading from 'expo-app-loading';
import { useFonts, Dosis_700Bold, Dosis_800ExtraBold, Dosis_400Regular } from '@expo-google-fonts/dosis';
import { AntDesign } from '@expo/vector-icons'; 

const image = {uri:'https://i.imgur.com/UGpGAkN.png'}

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
      <ImageBackground source={image} style={styles.imgBackground}>
        <View style={styles.container}>
          <LinearGradient colors={['rgba(248,189,9,0.3)', 'rgba(255,132,65,0.3', 'rgba(254,18,67,0.3)']} style={styles.background}></LinearGradient>
          <View style={styles.rect}>
            <View style={styles.containerProfile}>
              <Text style={styles.title}>Perfil</Text>
              <Image style={styles.imageProfile} source={require('./assets/JohnDoe.png')} />
              <TouchableOpacity>
                <AntDesign name="closecircle" size={24} color="white" />
              </TouchableOpacity>
            </View>
            <View style={styles.containerScore}>
              <View style={styles.bubble}>
                <Image style={{width:40, height:20}} source={require('./assets/ranking.png')} />
                <View>
                  <Text style={styles.text}>Ranking</Text>
                  <Text style={styles.textGray}>1º Lugar</Text>
                </View>
              </View>
              <View style={styles.bubble}>
                <Image style={{width:34, height:28}} source={require('./assets/points.png')} />
                <View>
                  <Text style={styles.text}>Pontuação</Text>
                  <Text style={styles.textGray}>1809</Text>
                </View>
              </View>
            </View>
            <Text style={styles.titleBold}>Cursos em andamento</Text>
            <TouchableOpacity>
              <ImageBackground source={require('./assets/bgCurso.png')} style={styles.bgCurso}>
                <Text style={styles.titleBold}>Amadureça sua inteligência emocional</Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style= {styles.buttonSeeAll}>
                  <Text style={styles.buttonText}>VER TODOS</Text>
            </TouchableOpacity>
            <View style= {styles.menuProfile}>
              <TouchableOpacity>
                <Text style={styles.textMenu}>certificados</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.textMenu}>conquistas</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.textMenu}>suas playlists</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.textMenu}>recomendações</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.textMenu}>monte seu portfólio</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.textMenu}>crie seu curso</Text>
              </TouchableOpacity>
            </View>
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
    rect: {
      top:100,
      backgroundColor: 'rgba(255, 255, 255, 0.60)',
      width: 314,
      height: 700,
      flexWrap: 'wrap',
      paddingTop: 0,
      alignItems: 'center',
      borderRadius: 31,
    },
    bubble: {
      width: 120,
      height: 60,
      backgroundColor: '#fff',
      borderRadius: 36,
      margin: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: "center",
      paddingLeft: 5
    },
    containerScore: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      alignContent: 'center',
    },
    containerProfile: {
      width:314,
      marginTop: -10,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      alignContent: 'center',
    },
    imageProfile: {
      width: 81,
      height: 81,
    },
    title: {
      top: 0,
      color: '#FFF',
      fontSize:26, 
      textAlign: 'center',
      fontFamily: 'Dosis_400Regular',
    },
    titleBold: {
      top: 0,
      color: '#FFF',
      fontSize:24, 
      textAlign: 'center',
      fontFamily: 'Dosis_700Bold',
    },
    bgCurso: {
      width: 314,
      height: 100,
      marginTop: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: '#FAA025',
      fontSize: 13, 
      textAlign: 'center',
      textWeight: 'bold',
      fontFamily: 'Dosis_700Bold',
      marginBottom:10,
      marginLeft: 12,
      marginTop:0, 
    },
    textGray: {
      color: '#9C9A98',
      fontSize: 13, 
      textAlign: 'center',
      textWeight: 'bold',
      fontFamily: 'Dosis_700Bold',
      marginBottom:10,
      marginLeft: 12,
      marginTop:0, 
    },
    buttonSeeAll: {
      backgroundColor: 'rgba(253,82,66,0.65)',
      bottom:0,
      borderRadius:36,
      width: 256,
      height: 72,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20
    },
    buttonText: {
      color: '#fff',
      fontSize: 20, 
      fontFamily: 'Dosis_800ExtraBold'
    },
    menuProfile: {
      width: 290,
      marginTop:10,
      borderBottomColor: '#fff',
      borderBottomWidth:1,
    },
    textMenu: {
      color: '#000',
      fontSize: 19, 
      textAlign: 'center',
      fontFamily: 'Dosis_400Regular',
      marginTop: 5,
      borderTopColor: '#fff',
      borderTopWidth:1,
    }
})
