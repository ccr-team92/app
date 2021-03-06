import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Dimensions, ImageBackground, TextInput } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import api from '../services/api';

export default function Login() {

    const [user, setUser] = useState('julianaalmeida');
    const [password, setPassword] = useState('123412341');
    const [signingIn, setSigningIn] = useState(false);
    const [failure, setFailure] = useState(false);

    const navigation = useNavigation();

    function handleNavigation(route: string) {
        navigation.navigate(route);
    }

    async function login() {
        if (signingIn) {
            return;
        }
        setSigningIn(true);
        try {
            const response = await api.post(
                '/users/login',
                { user, password }
            );
            localStorage.setItem('token', response.data.token);
            navigation.navigate("Home");
        } catch (error) {
            setFailure(true);
        }
        setSigningIn(false);
    }

    return (
        <ImageBackground source={require('../assets/login.png')} style={styles.imgBackground}>
            <View style={styles.container}>
                <Image style={styles.image} source={require('../assets/logo.svg')} />
                <View style={styles.rect}>
                    <Text style={styles.title}>FAÇA SEU LOGIN</Text>
                    <TextInput style={styles.textInput} value={user} onChangeText={setUser} />
                    <TextInput style={styles.textInput} secureTextEntry={true} value={password} onChangeText={setPassword} />
                    <Text style={styles.textForgot}>Esqueci a minha senha</Text>
                    <TouchableOpacity style={[styles.button, signingIn && styles.buttonDisabled]} onPress={() => handleNavigation('Profile')}>
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.text}>É a sua primeira vez aqui?</Text>
                <TouchableOpacity style={styles.buttonSubscribe}  onPress={login}>
                    <Text style={styles.buttonText}>CADASTRE-SE</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height

    },
    imgBackground: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    rect: {
        backgroundColor: 'rgba(255, 255, 255, 0.40)',
        width: 374,
        height: 370,
        flexWrap: 'wrap',
        paddingTop: 30,
        alignItems: 'center',
        borderRadius: 31,
    },
    title: {
        top: 0,
        color: '#FFF',
        fontSize: 20,
        textAlign: 'center',
        textWeight: 'bold',
        fontFamily: 'Dosis_800ExtraBold',
        marginBottom: 23
    },
    text: {
        color: '#FFF',
        fontSize: 16,
        textAlign: 'center',
        textWeight: 'bold',
        fontFamily: 'Dosis_700Bold',
        marginTop: 40,
        marginBottom: 10,
    },
    textForgot: {
        color: '#FFF',
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 5
    },
    textInput: {
        width: 326,
        height: 72,
        backgroundColor: 'rgba(255, 255, 255, 0.65)',
        borderRadius: 36,
        padding: 20,
        marginBottom: 14,
        fontFamily: 'Dosis_400Regular',
        fontSize: 24,
        color: "#CD4F0C"
    },
    button: {
        backgroundColor: '#FE1243',
        bottom: 0,
        borderRadius: 36,
        width: 326,
        height: 72,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonDisabled: {
        backgroundColor: '#DDD',
    },
    buttonSubscribe: {
        backgroundColor: 'rgba(255, 255, 255, 0.65)',
        bottom: 0,
        borderRadius: 36,
        width: 256,
        height: 72,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'Dosis_800ExtraBold'
    },
    image: {
        width: 216,
        height: 92.35,
        marginBottom: 20
    }
})
