import React, { useState } from 'react';
import {ScrollView, View, StyleSheet, Text, TouchableOpacity, Image, Dimensions, ImageBackground, TextInput } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import api from '../services/api';

export default function Signup() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        username: '',
        password: '',
        password_confirm: '',
        date_of_birth: '',
        city: '',
    });


    const [signingUp, setSigningUp] = useState(false);
    const [failure, setFailure] = useState(false);

    const navigation = useNavigation();
    
    //FOR DEMO
    function handleNavigation(route: string) {
      navigation.navigate(route);
    }//ENDFORDEMO

    function handleForm(field: string) {
        return function (value: string) {
            setForm({ ...form, [field]: value });
        }
    }

    async function login() {
        if (signingUp) {
            return;
        }
        setSigningUp(true);
        try {
            const response = await api.post(
                '/users/register',
                form
            );
            localStorage.setItem('token', response.data.token);
            navigation.navigate("Home");
        } catch (error) {
            setFailure(true);
        }
        setSigningUp(false);
    }
    return (
      <ScrollView style={styles.container}>
        <ImageBackground source={require('../assets/signup.png')} style={styles.imgBackground}>
          <View style={styles.containerMain}>
            <View style={styles.rect}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>CADASTRO</Text>
              </View>
              <TextInput style={styles.textInput} placeholder={"NOME"} value={form.name} onChangeText={handleForm('name')} />
              <TextInput style={styles.textInput} placeholder={"E-MAIL"} value={form.email} onChangeText={handleForm('email')} />
              <TextInput style={styles.textInput} placeholder={"NOME DE USUÁRIO"} value={form.username} onChangeText={handleForm('username')} />
              <Text style={styles.titleFill}>CRIE SUA SENHA</Text>
              <TextInput style={styles.textInput} placeholder={"DIGITE SUA SENHA"} secureTextEntry={true} value={form.password} onChangeText={handleForm('password')} />
              <TextInput style={styles.textInput} placeholder={"REPITA SUA SENHA"} secureTextEntry={true} value={form.password_confirm} onChangeText={handleForm('password_confirm')} />
              <Text style={styles.titleFill}>DADOS PESSOAIS</Text>
              <TextInput style={styles.textInput} placeholder={"DATA DE NASCIMENTO"} value={form.date_of_birth} onChangeText={handleForm('date_of_birth')} />
              <TextInput style={styles.textInput} placeholder={"CIDADE"} value={form.city} onChangeText={handleForm('city')} />
              <View style={styles.interestsContainer}>
                <TouchableOpacity style= {styles.interest}>COMPUTAÇÃO</TouchableOpacity>
                <TouchableOpacity style= {styles.interest}>CINEMA</TouchableOpacity>
                <TouchableOpacity style= {styles.interest}>NATUREZA</TouchableOpacity>
                <TouchableOpacity style= {styles.interest}>LIVROS</TouchableOpacity>
                <TouchableOpacity style= {styles.interest}>JOGOS</TouchableOpacity>
                <TouchableOpacity style= {styles.interest}>MÚSICA</TouchableOpacity>
                <TouchableOpacity style= {styles.interest}>ARTE</TouchableOpacity>
                <TouchableOpacity style= {styles.interest}>PESSOAS</TouchableOpacity>
                <TouchableOpacity style= {styles.interest}>FINANÇAS</TouchableOpacity>
                <TouchableOpacity style= {styles.interest}>EMPREENDEDORISMO</TouchableOpacity>
              </View>
              <TouchableOpacity onPress={login} style={styles.button}>
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
    interestsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      width:'100%', 
      marginTop: 10
    },
    interest: {
      padding:10,
      borderRadius: 50,
      color: '#fff',
      backgroundColor: '#F9B610',
      fontFamily: 'Dosis_400Regular',
      fontSize: 14,
      margin:1
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
