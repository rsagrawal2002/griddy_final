/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState} from 'react';
 import type {Node} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StyleSheet,
   TouchableOpacity,
   Text,
   View,
   Image,
   Keyboard,
   Alert
 } from 'react-native';

 import HomeHeader from '../components/HomeHeader';
import { TextInput } from 'react-native-gesture-handler';
import { setGestureState } from 'react-native-reanimated/lib/reanimated2/NativeMethods';

 
 const ProductScreen: () => Node = ({navigation}) => {
    
    const [bid, setBid] = useState(0);
    const [highestBid, setHighestBid] = useState(45)

    function add5(num)
    {
        console.log("In add");
        console.log(bid);
        parseInt(num);
        parseInt(bid);
        setBid(bid + num);
        console.log(bid);
    }

    function minus5(num)
    {
        console.log("In subtract");
        console.log(bid);
        parseInt(num);
        parseInt(bid);
        setBid(bid - num);
        console.log(bid);
    }

    function placeBid(bid)
    {
        if (bid > highestBid)
        {
            setHighestBid(bid);
        }
        else
        {
            Alert.alert("Bid is lower than the current highest bid");
        }
    }
 
   return (
     <View style = {styles.container} onPress = {() => Keyboard.dismiss()}>
         <HomeHeader/>

         <View style = {{flex : 0.9}}>
         <Image source = {require("../../assets/solidTee.png")}>
         </Image>
         <View style = {{flex : 0.2, marginTop : 10, alignContent : "center", justifyContent : "center"}}>
            <Text style = {{alignSelf : "center", fontSize : 18}}>
                DAZY Lettuce Trim Textured Solid Tee
            </Text>
            <Text style = {{alignSelf : "center", fontSize : 18}}>
                Size : M
            </Text>
         </View>
         <View style = {{borderWidth : 1, flex : 0.25, justifyContent : "center", flexDirection : "row", alignContent : "center"}}>
             <TouchableOpacity onPress = {() => minus5(5)}>
                 <View style = {{borderWidth : 1, borderColor : "#50555C", width : 50, height : 50, borderRadius : 25, justifyContent : "center", margin : 10}}>
                     <Image style = {{alignSelf : "center"}} source = {require("../../assets/-.png")}>

                     </Image>
                 </View>
             </TouchableOpacity>

             <TextInput onChangeText={(text) => setBid(parseInt(text))} keyboardType = {'numeric'} placeholder='Enter Bid (HK$)' style = {{flex : 0.78, textAlign : "center", fontSize : 20}}>

             </TextInput>

             <TouchableOpacity onPress = {() => add5(5)}>
                 <View style = {{borderWidth : 1, borderColor : "#50555C", width : 50, height : 50, borderRadius : 25, justifyContent : "center", margin : 10}}>
                     <Image style = {{alignSelf : "center"}} source = {require("../../assets/+.png")}>

                     </Image>
                 </View>
             </TouchableOpacity>
         </View>

         <View style = {{ flex : 0.2, flexDirection : "row"}}>
            <View style = {{flex : 0.7, flexDirection : "column"}}>
                <Text style = {{fontSize : 18, margin : 5}}>
                    Highest Bid
                </Text>
                <Text style = {{marginLeft : 5}}>
                    Final Price will be calculated at checkout
                </Text>
            </View>
            <View style = {{flex : 0.3, alignContent : "center", justifyContent : 'center'}}>
                <Text style = {{fontSize : 18, alignSelf : "center", fontWeight : "bold"}}>
                    HK$ {highestBid}
                </Text>
            </View>
         </View>

         <View style = {{flex : 0.2, backgroundColor : "#E7EBF2"}}>
             <View style = {{flex : 0.33}}>
                <Text style = {{marginLeft : 5}}>
                    Only <Text style = {{fontWeight : "bold"}}>18 hours</Text> left to bid!
                </Text>
             </View>
             <View style = {{flex : 0.33}}>
                <Text style = {{marginLeft : 5}}>
                    Seller : ThriftRift
                </Text>
             </View>
             <View style = {{flex : 0.33}}>
                <Text style = {{marginLeft : 5}}>
                    Seller Rating : 4.5/5
                </Text>
             </View>
         </View>

         <TouchableOpacity style = {{alignContent : "center", justifyContent : "center", borderWidth : 1, flex : 0.15, marginVertical : 5, backgroundColor : "#C93434"}}>
            <Text style = {{alignSelf : "center", color : "white", fontSize : 20, fontWeight : "bold"}}>
                Move to Wishlist
            </Text>
         </TouchableOpacity>
         <TouchableOpacity onPress = {() => placeBid(bid)}style = {{alignContent : "center", justifyContent : "center",borderWidth : 1, flex : 0.15, backgroundColor : "#1E6325"}}>
            <Text style = {{alignSelf : "center", color : "white", fontSize : 20, fontWeight : "bold"}}>
                Place Bid
            </Text>
         </TouchableOpacity>
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
     },


 });
 
 export default ProductScreen;
 