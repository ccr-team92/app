import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Dimensions, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function Profile() {
    const navigation = useNavigation();

    function handleNavigation(route: string) {
        navigation.navigate(route);
    }
    return (
        <View style={styles.container}>
            <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['rgba(248,189,9,1)', 'rgba(255,132,64,1)', 'rgba(254,18,67,1)']} style={styles.background}></LinearGradient>
            <View style={styles.rect}>
                <LinearGradient start={{x: 0.1, y: 0.9}} end={{x: 0.9, y: 0}} colors={['rgba(255,255,255,0.6)', 'rgba(255,255,255,0.0)']} style={styles.backgroundCard}></LinearGradient>
                <View style={styles.containerImage}>
                    <Image style={styles.imageProfile} source={require('../assets/avatar.png')} />
                </View>
                <View style={styles.containerProfile}>
                    <Text style={styles.title}>PERFIL</Text>
                    <TouchableOpacity onPress={() => handleNavigation('CourseList')}>
                        <AntDesign name="closecircle" size={30} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.containerScore}>
                    <View style={[styles.bubble, styles.leftBubble]}>
                        <Image style={[styles.bubbleImage, { width: 34, height: 28 }]} source={require('../assets/points.png')} />
                        <View style={styles.bubbleText}>
                            <Text style={styles.text}>Conquistas</Text>
                            <Text style={styles.textGray}>8/32</Text>
                        </View>
                    </View>
                    <View style={[styles.bubble, styles.rightBubble]}>
                        <Image style={[styles.bubbleImage, { width: 40, height: 20 }]} source={require('../assets/ranking.png')} />
                        <View style={styles.bubbleText}>
                            <Text style={styles.text}>Pontos</Text>
                            <Text style={styles.textGray}>1809 pt</Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.titleBold}>CURSOS EM ANDAMENTO</Text>
                <TouchableOpacity>
                    <ImageBackground source={require('../assets/bgCurso.png')} style={styles.bgCurso}>
                        <Text style={styles.titleBold}>Amadureça sua inteligência emocional</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleNavigation('CourseList')} style={styles.buttonSeeAll}>
                    <Text style={styles.buttonText}>VER TODOS</Text>
                </TouchableOpacity>
                <View style={styles.menuProfile}>
                    <TouchableOpacity>
                        <Text style={styles.textMenu}>certificados</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleNavigation('MyBadges')}>
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
                    <TouchableOpacity onPress={() => handleNavigation('Login')}>
                        <Text style={styles.textMenu}>sair</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
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
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    backgroundCard: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        borderRadius: 31,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    rect: {
        position: 'absolute',
        top: 100,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderColor: 'rgba(255, 255, 255, 0.30)',
        borderWidth: 1,
        width: 314,
        flexWrap: 'wrap',
        paddingTop: 0,
        alignItems: 'center',
        borderRadius: 31,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    bubble: {
        width: 157,
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 36,
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        paddingLeft: 5,
        position: 'absolute',
    },
    leftBubble: {
        left: 0,
    },
    rightBubble: {
        right: 0,
    },
    bubbleImage: {
        marginLeft: 10,
        marginRight: 5,
    },
    bubbleText: {
        flexGrow: 1,
        paddingVertical: 15,
        paddingLeft: 10,
    },
    containerScore: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        height: 100,
    },
    containerImage: {
        width: 314,
        marginTop: -10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        alignContent: 'center',
    },
    containerProfile: {
        width: 254,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 30,
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
    },
    imageProfile: {
        width: 81,
        height: 81,
        position: 'absolute',
        top: 0,
    },
    title: {
        color: '#FFF',
        fontSize: 26,
        textAlign: 'center',
        fontFamily: 'Dosis_700Bold',
    },
    titleBold: {
        top: 0,
        color: '#FFF',
        fontSize: 19,
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
        textWeight: 'bold',
        fontFamily: 'Dosis_700Bold',
        lineHeight: 10,
    },
    textGray: {
        color: '#9C9A98',
        fontSize: 19,
        textWeight: 'bold',
        fontFamily: 'Dosis_700Bold',
    },
    buttonSeeAll: {
        backgroundColor: 'rgba(253,82,66,0.65)',
        bottom: 0,
        borderRadius: 36,
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
        marginTop: 10,
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
    },
    textMenu: {
        color: '#000',
        fontSize: 19,
        textAlign: 'center',
        fontFamily: 'Dosis_400Regular',
        marginTop: 5,
        borderTopColor: '#fff',
        borderTopWidth: 1,
    }
})
