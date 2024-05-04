import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font'

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
    const [fontsLoaded, error] = useFonts({
        'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
        'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
        'Poppins-ExtraLight': require('../assets/fonts/Poppins-ExtraLight.ttf'),
        'Poppins-ExtraBold': require('../assets/fonts/Poppins-ExtraBold.ttf'),
        'Poppins-Thin': require('../assets/fonts/Poppins-Thin.ttf'),
        'Poppins-Black': require('../assets/fonts/Poppins-Black.ttf'),
    })

    useEffect(() => {
        if (error) throw error

        if (fontsLoaded) SplashScreen.hideAsync();

        // if (!fontsLoaded & !error) return null;

    }, [fontsLoaded, error])

    return (
        <Stack>
            <Stack.Screen name="index" options={{
                headerShown: false
            }} />
            <Stack.Screen name="(auth)" options={{
                headerShown: false
            }} />
            <Stack.Screen name="(tabs)" options={{
                headerShown: false
            }} />
            {/* <Stack.Screen name="/search/[query]" options={{
                headerShown: false
            }} /> */}
        </Stack>
    )
}

export default RootLayout