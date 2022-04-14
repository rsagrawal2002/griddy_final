import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FirstScreen from '../screens/FirstScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';

const Stack = createStackNavigator();

const Navigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown : false
                }}
            >
                <Stack.Screen name = "Welcome" component={FirstScreen}/>
                <Stack.Screen name = "Login" component={LoginScreen}/>
                <Stack.Screen name = "Registration" component={RegisterScreen}/>
                <Stack.Screen name = "Home" component={HomeScreen}/>
                <Stack.Screen name = "Product" component={ProductScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;