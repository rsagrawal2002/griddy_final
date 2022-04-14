import React from 'react';
import type { Node } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';


const HomeHeader: () => Node = props => {

  return (
    <View style = {styles.headerBar}>
        <Image source = {require("../../assets/Logo.jpeg")} style = {{alignSelf : "center", height : 40}} resizeMode = 'contain'></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBar : {
    width : "100%",
    flexDirection : "row",
    justifyContent : "center",
  }
});

export default HomeHeader;