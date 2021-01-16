import React from 'react';
import { StatusBar } from 'react-native'
import AppLoading from 'expo-app-loading';
import { useFonts, Dosis_700Bold, Dosis_800ExtraBold, Dosis_400Regular } from '@expo-google-fonts/dosis'

import AppStack from './src/routes/AppStack';

export default function App() {
  let [fontsLoaded] = useFonts({
    Dosis_700Bold,
    Dosis_800ExtraBold,
    Dosis_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <StatusBar backgroundColor="transparent" translucent barStyle="dark-content" />
        <AppStack />
      </>
    );
  }
}
