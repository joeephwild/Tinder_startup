import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import Card from './src/components/TinderCard';
import users from './assets/data/users';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, useAnimatedGestureHandler } from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';

const App = () => {

  const translateX = useSharedValue(0);

  const cardStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value * 500 - 250,
    },
  ],   
  }));

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.startX = translateX.value;
    },
    onActive: (event, context) => {
      translateX.value = context.startX + event.translationX;
    },

    onEnd: () => {
      console.warn('Touch ended');
    },
  });

  return (
    <View style={styles.pageContainer}>
      <PanGestureHandler onGestureEvent={gestureHandler}>
       <Animated.View style={[styles.animatedCard, cardStyle]}>
         <Card user={users[2]} />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
pageContainer: {
  justifyContent: 'center', 
  alignItems: 'center', 
  flex: 1,
  },
  animatedCard: {
    width: '100', 
    height: '100',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.5,
  },
});

export default App;