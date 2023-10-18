import {StyleSheet, Text, View, StatusBar, Image} from 'react-native';
import React from 'react';
import {Colors, Fonts, Images} from '../contants';
import {Display} from '../utils';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="black"
        backgroundColor={Colors.DEFAULT_BLACK}
        translucent
      />
      <Image source={Images.TEAMZ} resizeMode="contain" style={styles.image} />
      <Text style={styles.titel}>Teamz Delivery</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.DEFAULT_BLACK,
  },
  image: {
    width: Display.setWidth(80),
    height: Display.setHeight(70),
    marginBottom: 10,
  },
  titel: {
    color: Colors.DEFAULT_WHITE,
    fontSize: 32,
    fontFamily: Fonts.POPPINS_LIGHT,
  },
});
