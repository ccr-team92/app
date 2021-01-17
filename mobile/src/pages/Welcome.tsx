import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Dimensions, ImageBackground } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function Welcome() {

    const navigation = useNavigation();

    function handleNavigateToLogin() {
        navigation.navigate("Login");
    }

    return (
        <ImageBackground source={require('../assets/welcome.png')} style={styles.imgBackground}>
            <View style={styles.container}>
                <View style={styles.rect}>
                    <Image style={styles.image} source={{ uri: 'https://fmnova.com.br/images/noticias/safe_image.jpg' }} />
                    <Text style={styles.title}>Bem-vindo, estudante!</Text>
                    <TouchableOpacity style={styles.button} onPress={handleNavigateToLogin}>
                        <Text style={styles.buttonText}>COMECE SUA JORNADA</Text>
                    </TouchableOpacity> 
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

    },
    imgBackground: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: Dimensions.get('window').width,
        backgroundColor: 'black',
    },
    rect: {
        backgroundColor: 'rgba(255, 255, 255, 0.60)',
        width: 350,
        height: 540,
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 31,
    },
    title: {
        top: 0,
        color: '#FC1243',
        fontSize: 47,
        textAlign: 'center',
        textWeight: 'bold',
        fontFamily: 'Dosis_800ExtraBold',
        textShadowRadius: 2,
        textShadowColor: 'white',
        textShadowOffset: { width: 0, height: 3 },
    },
    button: {
        backgroundColor: '#FE1243',
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
    },
    image: {
        width: 147,
        height: 147
    }
})
