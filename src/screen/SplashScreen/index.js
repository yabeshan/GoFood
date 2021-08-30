import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import AppStatusBar from '../../components/AppStatusBar';
import Colors from '../../theme/Colors';
import Fonts from '../../theme/Fonts';
import {useNavigation} from '@react-navigation/native';
import Logo from '../../assets/images/logo-light.png'

function SplashScreen() {
    const navigation = useNavigation();

    useEffect(()=>{
        setTimeout(()=>{
            navigation.replace("WelcomeScreen");
        },3000)
    });

    return(
         <View style={styles.container} >
             <AppStatusBar/>
             <Image source={Logo} style={styles.logo}/>
         </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: Colors.colorPrimary
    },
    testStyle:{
        fontSize:50,
        color:Colors.white,
        fontFamily:Fonts.primaryExtraBold
    },
    logo:{
        height:200,
        width:200,
        resizeMode:'contain'
    }
});

export default SplashScreen; 