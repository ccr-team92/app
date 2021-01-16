import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image } from 'react-native';

export default function WelcomeScreen() {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: 'https://fmnova.com.br/images/noticias/safe_image.jpg' }} />
            <Text style={styles.title}>Bem-vindo, estudante!</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>COMECE SUA JORNADA</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
