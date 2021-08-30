import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screen/SplashScreen';
import WelcomeScreen from './src/screen/WelcomeScreen/index';
import Login from './src/screen/LoginScreen';


const initialStack = createNativeStackNavigator();

function App() {

   const InitalStackScreen=()=>(
       <initialStack.Navigator screenOptions={{ headerShown:false }}>
          <initialStack.Screen name="SplashScreen" component={SplashScreen}/>
          <initialStack.Screen name="WelcomeScreen" component={WelcomeScreen}/>
          <initialStack.Screen name="Login" component={Login}/>
       </initialStack.Navigator>
   );

   return(
    <NavigationContainer>
         <InitalStackScreen></InitalStackScreen>
    </NavigationContainer>
   );
  
}



export default App;