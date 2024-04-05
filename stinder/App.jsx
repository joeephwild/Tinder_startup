import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, useWindowDimensions} from 'react-native';
import Card from './src/components/TinderCard';
import users from './assets/data/users';
import AnimatedStack from './src/components/AnimatedStack';
import {
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

const App = () => {  
    return (
      <GestureHandlerRootView style={{flex: 1}}>
        <View style={styles.pageContainer}>
        <AnimatedStack data={users} renderItem={(({ item }) => <Card user={item} />)}
        />         
        </View>
      </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
 pageContainer: {
    justifyContent: 'center', 
    alignItems: 'center', 
    flex: 1,
 },
});

export default App;
