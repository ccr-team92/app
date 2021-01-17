import React from 'react';
import { ScrollView, View, StyleSheet, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';


export default function MyBadges() {
    return (
        <View style={styles.container}>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={['rgba(248,189,9,1)', 'rgba(255,132,64,1)', 'rgba(254,18,67,1)']} style={styles.background}></LinearGradient>
            <View style={styles.rect}>
                <LinearGradient start={{ x: 0.1, y: 0.9 }} end={{ x: 0.9, y: 0 }} colors={['rgba(255,255,255,0.6)', 'rgba(255,255,255,0.0)']} style={styles.backgroundCard}></LinearGradient>
                <View style={styles.containerImage}>
                    <Image style={styles.imageProfile} source={require('../assets/avatar.png')} />
                </View>
                <View style={styles.containerProfile}>
                    <Text style={styles.title}></Text>
                    <TouchableOpacity>
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
                <Text style={styles.titleBold}>SUAS CONQUISTAS</Text>
                <Image source={require('../assets/medals.png')} style={{ width: 131, height: 30, marginTop: 5 }} />
                <ScrollView style={styles.scrollContainer} showsHorizontalScrollIndicator={false}>
                    <View style={styles.headerContent}>
                        <Image source={require('../assets/forca.png')} style={{ width: 74, height: 74 }} />
                        <View>
                            <Text style={styles.titleContent}>Força, foco e fé</Text>
                            <Text style={styles.subTitleContent}>NO CURSO DEFINA SEUS OBJETIVOS</Text>
                        </View>
                    </View>
                    <View style={styles.headerContent}>
                        <Image source={require('../assets/agoravai.png')} style={{ width: 74, height: 74 }} />
                        <View>
                            <Text style={styles.titleContent}>#agoravai</Text>
                            <Text style={styles.subTitleContent}>NO CURSO DEFINA SEUS OBJETIVOS</Text>
                        </View>
                    </View>
                    <View style={styles.headerContent}>
                        <Image source={require('../assets/resiliencia.png')} style={{ width: 74, height: 74 }} />
                        <View>
                            <Text style={styles.titleContent}>Resiliência é uma dádiva!</Text>
                            <Text style={styles.subTitleContent}>NO CURSO DESENVOLVA SUAS SOFT SKILLS</Text>
                        </View>
                    </View>
                    <View style={styles.headerContent}>
                        <Image source={require('../assets/flexivel.png')} style={{ width: 74, height: 74 }} />
                        <View>
                            <Text style={styles.titleContent}>Mais flexível que grafeno!</Text>
                            <Text style={styles.subTitleContent}>NO CURSO DESENVOLVA SUAS SOFT SKILLS</Text>
                        </View>
                    </View>
                    <View style={styles.headerContent}>
                        <Image source={require('../assets/ted.png')} style={{ width: 74, height: 74 }} />
                        <View>
                            <Text style={styles.titleContent}>Quase um TedTalker!</Text>
                            <Text style={styles.subTitleContent}>NO CURSO PREPARE-SE PARA FALAR EM PÚBLICO</Text>
                        </View>
                    </View>
                    <View style={styles.headerContent}>
                        <Image source={require('../assets/felipe.png')} style={{ width: 74, height: 74 }} />
                        <View>
                            <Text style={styles.titleContent}>Felipe Neto que se cuide!</Text>
                            <Text style={styles.subTitleContent}>NO CURSO PREPARE-SE PARA FALAR EM PÚBLICO</Text>
                        </View>
                    </View>
                    <View style={styles.headerContent}>
                        <Image source={require('../assets/julius.png')} style={{ width: 74, height: 74 }} />
                        <View>
                            <Text style={styles.titleContent}>Julius ficaria orgulhoso!</Text>
                            <Text style={styles.subTitleContent}>NO CURSO PLANEJE SUAS FINANÇAS</Text>
                        </View>
                    </View>
                    <View style={styles.headerContent}>
                        <Image source={require('../assets/nath.png')} style={{ width: 74, height: 74 }} />
                        <View>
                            <Text style={styles.titleContent}>Discípulo da Nath Finanças</Text>
                            <Text style={styles.subTitleContent}>NO CURSO PLANEJE SUAS FINANÇAS</Text>
                        </View>
                    </View>
                </ScrollView>

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
    },
    background: {
        position: 'absolute',
        width: Dimensions.get('window').width,
        height: 2100
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
        display: 'flex',
        height: Dimensions.get('window').height - 100,
        top: 100,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderColor: 'rgba(255, 255, 255, 0.30)',
        borderWidth: 1,
        width: 314,
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
        fontSize: 26,
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
        color: '#878684',
        fontSize: 14,
        fontFamily: 'Dosis_400Regular',
        lineHeight: 17,
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
    },
    scrollContainer: {
        marginLeft: -30,
        marginTop: 10,
        paddingVertical: 10
    },
    headerContent: {
        width: 317,
        height: 62,
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        backgroundColor: 'rgba(253,82,66,0.61)',
        borderRadius: 36,
    },
    headerPoints: {
        width: 314,
        height: 131,
        alignItems: 'center',
        marginBottom: 10,
        borderRadius: 20,
        marginTop: 50
    },
    titleContent: {
        color: '#FFF',
        fontSize: 20,
        textAlign: 'left',
        marginLeft: 10,
        fontFamily: 'Dosis_700Bold',
    },
    subTitleContent: {
        color: '#FFF',
        fontSize: 10,
        textAlign: 'left',
        marginLeft: 10,
        fontFamily: 'Dosis_400Regular',
    },
    headerRanking: {
        width: 307,
        height: 62,
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 15,
        flexDirection: 'row',
    },
    titleRanking: {
        color: '#FC1243',
        fontSize: 17,
        textAlign: 'center',
        marginLeft: 10,
        fontFamily: 'Dosis_800ExtraBold',
    },
    subTitleRanking: {
        color: '#878684',
        fontSize: 16,
        textAlign: 'left',
        marginLeft: 10,
        fontFamily: 'Dosis_400Regular',
    },
})
