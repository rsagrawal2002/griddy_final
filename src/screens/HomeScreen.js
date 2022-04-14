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

 import HomeHeader from '../components/HomeHeader';

 
 const HomeScreen: () => Node = ({navigation}) => {
 
   return (
     <View style = {styles.container}>
       <HomeHeader />
       <View style = {{borderColor : "black", flex : 0.9}}>

         <View style = {{flex : 0.39, backgroundColor : "#E4A6C8"}}>

           <View style = {{width : "40%", margin : 10, marginLeft : 15}}>
            <Text style = {{fontSize : 24, fontWeight : "bold"}}>TRENDING THRIFTS</Text>
           </View>

           <TouchableOpacity onPress = {() => navigation.navigate("Product")} style = {{height : 200, width : 175, alignSelf : "flex-end", marginTop : -60, marginRight : 7}}>
                <Image source = {require("../../assets/solidTee.png")} style = {{height : 200, width : 175}}></Image>
           </TouchableOpacity>

            <TouchableOpacity onPress = {() => navigation.navigate("Product")} style = {{height : 35, alignContent : "center", flexDirection : "row"}}>
                <Text style = {{fontSize : 23, paddingTop : 2, paddingLeft : 5}}>
                  DAZY Lettuce Solid Tee (M) | 
                </Text>
                <View style = {{backgroundColor : "green", width : 70, height : 27, alignContent : "center", justifyContent : "center", alignSelf : "center", marginLeft : 20, padding : 2}}>
                    <Text style = {{fontSize : 23, alignSelf : "center"}}>
                      $45
                    </Text>
                </View>
            </TouchableOpacity>
         </View>
         <Text style = {{fontSize : 20, padding : 10, alignSelf : "center"}}>
           Shop By Category
         </Text>

         <View style = {{flex : 0.2, flexDirection : "row"}} horizontal = {true}>
           <ScrollView horizontal = {true}>
            <TouchableOpacity style = {{width : 100, height : 100, backgroundColor : "#A5CEE4", margin : 10, borderRadius : 50, alignContent : "center", justifyContent : "center"}}>
              <Image style = {{alignSelf : "center"}} source = {require("../../assets/dress.png")}></Image>
            </TouchableOpacity>
            <TouchableOpacity style = {{width : 100, height : 100, backgroundColor : "#A5CEE4", margin : 10, borderRadius : 50, alignContent : "center", justifyContent : "center"}}>
              <Image style = {{alignSelf : "center"}} source = {require("../../assets/pants.png")}></Image>
            </TouchableOpacity>
            <TouchableOpacity style = {{width : 100, height : 100, backgroundColor : "#A5CEE4", margin : 10, borderRadius : 50, alignContent : "center", justifyContent : "center"}}>
              <Image style = {{alignSelf : "center"}} source = {require("../../assets/shoes.png")}></Image>
            </TouchableOpacity>
            <TouchableOpacity style = {{width : 100, height : 100, backgroundColor : "#A5CEE4", margin : 10, borderRadius : 50, alignContent : "center", justifyContent : "center"}}>
              <Image style = {{alignSelf : "center"}} source = {require("../../assets/watch.png")}></Image>
            </TouchableOpacity>
            <TouchableOpacity style = {{width : 100, height : 100, backgroundColor : "#A5CEE4", margin : 10, borderRadius : 50, alignContent : "center", justifyContent : "center"}}>
              <Image style = {{alignSelf : "center"}} source = {require("../../assets/glasses.png")}></Image>
            </TouchableOpacity>
            <TouchableOpacity style = {{width : 100, height : 100, backgroundColor : "#A5CEE4", margin : 10, borderRadius : 50, alignContent : "center", justifyContent : "center"}}>
              <Image style = {{alignSelf : "center"}} source = {require("../../assets/necklace.png")}></Image>
            </TouchableOpacity>
            </ScrollView>
         </View>

         <View style = {{flex : 0.4, flexDirection : "row"}}>
            <TouchableOpacity style = {{flex : 0.5, flexDirection : "column"}}>
                <Image style = {{alignSelf : "center", margin : 5}} source = {require("../../assets/cargos.png")}>
                </Image>
                <Text style = {{fontSize : 20, alignSelf : "center", fontWeight : "bold"}}>
                  Cargos
                </Text>
                <Text style = {{alignSelf : "center"}}>
                  Plain or Patterned,
                </Text>
                <Text style = {{alignSelf : "center"}}>
                  we love them
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style = {{flex : 0.5, flexDirection : "column"}}>
                <Image style = {{alignSelf : "center", margin : 5}} source = {require("../../assets/vacayvibes.png")}>
                </Image>
                <Text style = {{fontSize : 20, alignSelf : "center", fontWeight : "bold"}}>
                  Vacay Vibes
                </Text>
                <Text style = {{alignSelf : "center"}}>
                  You know that's
                </Text>
                <Text style = {{alignSelf : "center"}}>
                  bright
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
         alignContent : 'center',
         alignSelf : 'center',
         justifyContent : 'center',
         width : "100%"
     },


 });
 
 export default HomeScreen;
 