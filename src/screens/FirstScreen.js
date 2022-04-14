/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import type {Node} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StyleSheet,
   TouchableOpacity,
   Text,
   View,
   Image
 } from 'react-native';

 
 const FirstScreen: () => Node = ({navigation}) => {
 
   return (
     <View style = {styles.container}>
         <Image source={require("../../assets/LSD.png")} style = {{ flex : 1, alignSelf : 'flex-start'}}></Image>


         <View styles =  {{alignSelf : 'flex-end', color : 'white', flexDirection : "row", }}>

            <View style = {{flexDirection : 'row', alignItems : "center", height : 100}}>

                <TouchableOpacity onPress = {() => navigation.navigate("Login")} style = {{flex : 0.5,  borderColor : "black", borderWidth : 2, margin : 10, height : "50%", justifyContent : "center", marginLeft : 20, borderRadius : 5}}>
                        <Text style = {{alignSelf : "center"}}>
                            LOG IN
                        </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress = {() => navigation.navigate("Registration")}style = {{flex : 0.5,  borderColor : "black", borderWidth : 2, margin : 10, height : "50%", justifyContent : "center", marginRight : 20, borderRadius : 5, backgroundColor : "black"}}>
                        <Text style = {{alignSelf : "center", color : "white"}}>
                            REGISTER
                        </Text>
                </TouchableOpacity>
            </View>
         </View>
     </View>
   );
 };
 
 const styles = StyleSheet.create({
     container : {
         flex : 1,
         alignContent : 'flex-start',
         alignSelf : 'center',
         justifyContent : 'flex-start',
     },


 });
 
 export default FirstScreen;
 