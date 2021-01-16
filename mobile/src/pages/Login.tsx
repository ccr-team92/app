import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Dimensions, ImageBackground, TextInput } from 'react-native';

export default function Login() {
    return (
        <ImageBackground source={require('../assets/login.png')} style={styles.imgBackground}>
            <View style={styles.container}>
                <View style={styles.rect}>
                    <Text style={styles.title}>FAÇA SEU LOGIN</Text>
                    <TextInput style={styles.textInput} />
                    <TextInput style={styles.textInput} />
                    <Text style={styles.textForgot}>Esqueci a minha senha</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.text}>É a sua primeira vez aqui?</Text>
                <TouchableOpacity style={styles.buttonSubscribe}>
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
    background: {
        position: 'absolute',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width * 2.16,
        right: 0,
    },
    rect: {
        backgroundColor: 'rgba(255, 255, 255, 0.60)',
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
        marginBottom: 10
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
        marginBottom: 14
    },
    button: {
        backgroundColor: '#FE1243',
        bottom: 0,
        borderRadius: 36,
        width: 326,
        height: 72,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonSubscribe: {
        backgroundColor: 'rgba(255, 255, 255, 0.65)',
        bottom: 0,
        borderRadius: 36,
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
