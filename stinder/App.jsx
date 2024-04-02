import React from 'react';
import {Text, Image, ImageBackground, View, StyleSheet} from 'react-native';


const App = () => {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.card}>
        <ImageBackground source={{ uri:
           'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png'}} style={styles.image}>
          <Text style={styles.name}>Elon Musk</Text>
          <Text style={styles.bio}>A dude with a rocket is looking for a gal with fuel
          </Text>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: 'center', 
    alignItems: 'center', 
    flex: 1,
  },
  card: {
    width: '95%',
    height: '70%',
    borderRadius: 10,


    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 6,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  image: {
    width: '100%', 
    height: '100%',
    borderRadius: 10,
    overFlow: 'hidden',
    justifyContent: 'flex-end',
  },
  cardInner: {
    padding: 10,
  },

  name: {
    fontSize: 30,
    color: 'White',
    fontWeight: 'bold', 
  },
  bio: {
    fontSize: 18,
    color: 'white',
    lineHeight: 24,
    padding: 10,
  },
});

export default App;