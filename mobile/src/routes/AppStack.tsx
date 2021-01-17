import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Dimensions, ImageBackground } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import Login from '../pages/Login';
import Signup from '../pages/Signup';
import CoursePage from '../pages/CoursePage';
import Home from '../pages/HomeScreen';
import Welcome from '../pages/Welcome';
import CourseList from '../pages/CourseList';
import CourseBadges from '../pages/CourseBadges';
import MyBadges from '../pages/MyBadges';
import Profile from '../pages/Profile';

const tabBar = () => (
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
)

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator
                initialRouteName="Welcome"
                headerMode="none"
                screenOptions={{
                    cardStyle: { backgroundColor: '#F2F3F5' },
                }}>

                <Screen
                    name="Welcome"
                    component={Welcome}
                />
                <Screen
                    name="Signup"
                    component={Signup}
                />
                <Screen
                    name="Login"
                    component={Login}
                />
                <Screen
                    name="Home"
                    component={Home}
                />
                <Screen
                    name="CourseList"
                    component={CourseList}
                />
                <Screen
                    name="CoursePage"
                    component={CoursePage}
                />

                <Screen
                    name="CourseBadges"
                    component={CourseBadges}
                />

                <Screen
                    name="MyBadges"
                    component={MyBadges}
                />

                <Screen
                    name="Profile"
                    component={Profile}
                />
            </Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
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
})
