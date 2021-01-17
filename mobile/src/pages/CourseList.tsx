import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Dimensions, ImageBackground } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const padlock = (color: string) => (
    <Svg width="18" height="26">
        <Path d="M14.7955 11.423V6.74998C14.7955 3.31662 11.9994 0.520508 8.566 0.520508C5.13265 0.520508 2.33653 3.31662 2.33653 6.74998V11.423C1.04661 11.423 0 12.4697 0 13.7596V23.1057C0 24.3918 1.04661 25.4422 2.33653 25.4422H14.7955C16.0854 25.4422 17.132 24.3956 17.132 23.1057V13.7596C17.1281 12.4697 16.0815 11.423 14.7955 11.423ZM3.89294 6.74998C3.89294 4.174 5.99002 2.07691 8.566 2.07691C11.142 2.07691 13.2391 4.174 13.2391 6.74998V11.423H3.89294V6.74998ZM15.5717 23.1018C15.5717 23.5305 15.2203 23.882 14.7916 23.882H2.33267C1.90399 23.882 1.55254 23.5344 1.55254 23.1018V13.7557C1.55254 13.327 1.90399 12.9756 2.33267 12.9756H14.7916C15.2203 12.9756 15.5717 13.3232 15.5717 13.7557V23.1018Z" stroke={color} fill="none" strokeWidth="1.0" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
);

const heart = (color: string) => (
    <Svg width="27" height="26">
        <Path d="M25.9349 8.32148H25.9023C25.9349 8.02599 26 7.73051 26 7.43502C26 3.88919 23.1354 1 19.6198 1C16.6901 1 14.2813 2.96991 13.5 5.69494C12.7513 3.00274 10.3099 1 7.38021 1C3.86458 1 1 3.88919 1 7.43502C1 7.73051 1.03255 8.02599 1.09765 8.32148H1C1 8.32148 1.84635 15.1833 13.5 25C13.5 25 24.3398 16.1354 25.8372 8.87962C25.8698 8.78112 25.8698 8.68263 25.9023 8.58413C25.9023 8.51847 25.9349 8.41997 25.9349 8.32148Z" stroke={color} fill="none" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
);

const star = (color: string) => (
    <Svg width="29" height="28">
        <Path d="M15.2143 1.49183L18.7445 8.67077C18.8816 8.91237 19.1215 9.08494 19.3957 9.15397L27.2787 10.2929C27.9642 10.3965 28.2384 11.2593 27.7585 11.7425L22.0691 17.3338C21.8634 17.5409 21.7949 17.817 21.8292 18.0931L23.1658 25.9969C23.2687 26.6872 22.5489 27.2394 21.932 26.8943L14.9058 23.1667C14.6659 23.0287 14.3575 23.0287 14.1175 23.1667L7.09139 26.8943C6.47446 27.2394 5.75471 26.6872 5.85753 25.9969L7.19421 18.0931C7.22849 17.817 7.15993 17.5409 6.95429 17.3338L1.26483 11.7425C0.750722 11.2593 1.02491 10.3965 1.74466 10.2929L9.62766 9.15397C9.90185 9.11945 10.1418 8.94689 10.2789 8.67077L13.8091 1.49183C13.9804 0.836058 14.9058 0.836058 15.2143 1.49183Z" stroke={color} fill="none" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
);

export default function CourseList() {

    const [path, setPath] = useState('A');

    function pathCourses(path: string) {
        switch (path) {
            default:
            case 'A':
                return (
                    <>
                        <Text style={styles.textDescription}>Comece aqui sua jornada. Finalize as duas trilhas para desbloquear novos cursos</Text>
                        <View style={styles.titleBox}>
                            <Text style={styles.title}>CURSOS</Text>
                        </View>
                        <TouchableOpacity>
                            <ImageBackground source={require('../assets/bgCurso.png')} style={styles.bgCurso}>
                                <Text style={styles.titleCourse}>Descubra seus objetivos</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <ImageBackground source={require('../assets/bgCurso.png')} style={styles.bgCurso}>
                                <Text style={styles.titleCourse}>Desenvolva suas soft skills</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </>
                );
            case 'B':
                return (
                    <>
                        <Text style={styles.textDescription}>Escolha seus quatro cursos favoritos</Text>
                        <View style={styles.titleBox}>
                            <Text style={styles.title}>CURSOS</Text>
                        </View>
                        <TouchableOpacity>
                            <ImageBackground source={require('../assets/bgCurso.png')} style={styles.bgCurso}>
                                <Text style={styles.titleCourse}>Empreenda</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <ImageBackground source={require('../assets/bgCurso.png')} style={styles.bgCurso}>
                                <Text style={styles.titleCourse}>Amadureça sua inteligência emocional</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <ImageBackground source={require('../assets/bgCurso.png')} style={styles.bgCurso}>
                                <Text style={styles.titleCourse}>Planeje suas finanças</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </>
                );
            case 'C':
                return (
                    <>
                        <Text style={styles.textDescription}>Use seus pontos para desbloquear os cursos extras</Text>
                        <View style={styles.titleBox}>
                            <Text style={styles.title}>CURSOS</Text>
                        </View>
                        <TouchableOpacity>
                            <ImageBackground source={require('../assets/bgCurso.png')} style={styles.bgCurso}>
                                <Text style={styles.titleCourse}>Envolva-se</Text>
                                <Image source={require('../assets/padlock.png')} style={styles.iconLock} />
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <ImageBackground source={require('../assets/bgCurso.png')} style={styles.bgCurso}>
                                <Text style={styles.titleCourse}>Exerça sua cidadania</Text>
                                <Image source={require('../assets/padlock.png')} style={styles.iconLock} />
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <ImageBackground source={require('../assets/bgCurso.png')} style={styles.bgCurso}>
                                <Text style={styles.titleCourse}>Diversifique e inclua</Text>
                                <Image source={require('../assets/padlock.png')} style={styles.iconLock} />
                            </ImageBackground>
                        </TouchableOpacity>
                    </>
                );
        }
    }

    return (
        <View style={styles.imgBackground}>
            <View style={styles.container}>
                <View style={styles.titleBox}>
                    <Text style={styles.title}>TRILHAS DE APRENDIZAGEM</Text>
                </View>
                <View style={styles.courseCategory}>
                    <TouchableOpacity style={[styles.squareA, path === 'A' && styles.squareSelected]} onPress={() => setPath('A')}>
                        <Text style={path === 'A' ? styles.text : styles.textGray}>PREPARE-SE PARA A VIDA</Text>
                        { padlock(path === 'A' ? '#FFE8DD' : '#FE8342') }
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.squareB, path === 'B' && styles.squareSelected]} onPress={() => setPath('B')}>
                        <Text style={path === 'B' ? styles.text : styles.textGray}>ESTUDE O QUE AMA</Text>
                        { heart(path === 'B' ? '#FFE8DD' : '#FE8342') }
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.squareC, path === 'C' && styles.squareSelected]} onPress={() => setPath('C')}>
                        <Text style={path === 'C' ? styles.text : styles.textGray}>SE CONHEÇA MELHOR</Text>
                        { star(path === 'C' ? '#FFE8DD' : '#FE8342') }
                    </TouchableOpacity>
                </View>
                

                {pathCourses(path)}

            </View>

            <ImageBackground source={require('../assets/menuGradient.png')} style={styles.footer}>
                <View style={styles.circleContainer}>
                    <TouchableOpacity style={styles.circles}>
                        <Image source={require('../assets/trilha.png')} style={styles.icon} />
                    </TouchableOpacity>
                </View>
                <View style={styles.circleContainer}>
                    <TouchableOpacity style={styles.circles}>
                        <Image source={require('../assets/cursos.png')} style={styles.icon} />
                    </TouchableOpacity>
                </View>
                <View style={styles.circleContainer}>
                    <TouchableOpacity style={styles.circles}>
                        <Image source={require('../assets/novidades.png')} style={styles.icon} />
                    </TouchableOpacity>
                </View>
                <View style={styles.circleContainer}>
                    <TouchableOpacity style={styles.circles}>
                        <Image source={require('../assets/biblioteca.png')} style={styles.icon} />
                    </TouchableOpacity>
                </View>
                <View style={styles.circleContainer}>
                    <TouchableOpacity style={styles.circles}>
                        <Image source={require('../assets/perfil.png')} style={styles.icon} />
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
        backgroundColor: '#fff',
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
        fontSize: 20,
        textAlign: 'center',
        textWeight: 'bold',
        fontFamily: 'Dosis_400Regular',
    },
    courseCategory: {
        height: 113,
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
        height: 113,
        alignItems: 'center',
        justifyContent: "center",
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
    },
    squareB: {
        backgroundColor: 'rgba(254,131,66,0.2)',
        width: 113,
        height: 113,
        alignItems: 'center',
        justifyContent: "center",
    },
    squareC: {
        backgroundColor: 'rgba(254,131,66,0.2)',
        width: 113,
        height: 113,
        alignItems: 'center',
        justifyContent: "center",
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
    },
    squareSelected: {
        color: 'white',
        backgroundColor: '#FE8342',
    },
    text: {
        color: '#FFF',
        fontSize: 17,
        textAlign: 'center',
        textWeight: 'bold',
        fontFamily: 'Dosis_800ExtraBold',
        marginBottom: 10
    },
    textGray: {
        color: '#878684',
        fontSize: 17,
        textAlign: 'center',
        textWeight: 'bold',
        fontFamily: 'Dosis_800ExtraBold',
        marginBottom: 10
    },
    textDescription: {
        color: '#878684',
        fontSize: 17,
        textAlign: 'center',
        textWeight: 'bold',
        fontFamily: 'Dosis_400Regular',
        marginBottom: 10,
        marginTop: 10
    },
    bgCurso: {
        width: 345,
        height: 100,
        marginTop: 10,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: "cover",
        flexDirection: "row",
    },
    titleCourse: {
        top: 0,
        color: '#FFF',
        fontSize: 25,
        textAlign: 'left',
        flexGrow: 1,
        fontFamily: 'Dosis_700Bold',
    },
    footer: {
        position: "absolute",
        left: 20,
        right: 20,
        bottom: 0,
        padding: 5,

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
        borderColor: '#fff'
    },
    circles: {
        backgroundColor: '#fff',
        width: 59,
        height: 59,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    icon: {
        width: 31,
        height: 31
    },
    iconLock: {
        height: 24,
        width: 17,
        marginLeft: 20,
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
