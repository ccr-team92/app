import React from 'react';
import {ScrollView, View, StyleSheet, Text, TouchableOpacity, Image, Dimensions, ImageBackground, TextInput } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function Signup() {
    return (
      <ScrollView style={styles.container}>
        <ImageBackground source={require('../assets/signup.png')} style={styles.imgBackground}>
          <View style={styles.containerMain}>
            <View style={styles.rect}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>CADASTRO</Text>
              </View>
              <TextInput style={styles.textInput} placeholder={"NOME"} />
              <TextInput style={styles.textInput} placeholder={"E-MAIL"} />
              <TextInput style={styles.textInput} placeholder={"NOME DE USUÁRIO"} />
              <Text style={styles.titleFill}>CRIE SUA SENHA</Text>
              <TextInput style={styles.textInput} placeholder={"DIGITE SUA SENHA"} secureTextEntry={true} />
              <TextInput style={styles.textInput} placeholder={"REPITA SUA SENHA"} secureTextEntry={true} />
              <Text style={styles.titleFill}>DADOS PESSOAIS</Text>
              <TextInput style={styles.textInput} placeholder={"DATA DE NASCIMENTO"} />
              <TextInput style={styles.textInput} placeholder={"CIDADE"} />
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>CADASTRAR</Text>
              </TouchableOpacity>
            </View>
          </View>  
        </ImageBackground>
      </ScrollView> 
    )
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
    },
    containerMain: {
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    imgBackground: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
    rect: {
      marginTop: -50,
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
      width: 350, 
      alignItems: 'center',
      borderRadius: 31,
    },
    titleContainer: {
      backgroundColor:'rgba(255, 255, 255, 0.3)',
      width: 350,
      borderTopLeftRadius: 31,
      borderTopRightRadius: 31,

    },
    title: {
      top: 0,
      color: '#FFF',
      fontSize:20, 
      textAlign: 'center',
      textWeight: 'bold',
      fontFamily: 'Dosis_800ExtraBold',
      paddingBottom: 10,
      paddingTop: 10,
    },
    titleFill: {
      color: '#FFF',
      fontSize:20, 
      textAlign: 'center',
      textWeight: 'bold',
      fontFamily: 'Dosis_400Regular',
      marginTop:10,
    },
    textInput: {
      width: 326,
      height: 41,
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
      borderRadius: 36,
      fontSize: 14,
      fontFamily: 'Dosis_400Regular',
      padding: 20,
      marginTop: 10,
      color: "#CD4F0C"
    },
    button: {
      backgroundColor: '#FE1243',
      bottom:0,
      borderRadius:36,
      width: 326,
      height: 72,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
      marginBottom: -30
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
    }
})
