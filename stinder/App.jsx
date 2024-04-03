import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, useWindowDimensions} from 'react-native';
import Card from './src/components/TinderCard';
import users from './assets/data/users';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, useAnimatedGestureHandler, useDerivedValue, interpolate, runOnJS } from 'react-native-reanimated';
import { PanGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';

const ROTATION = 60;
const SWIPE_VELOCITY = 800;


const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(currentIndex +1);

  const currentProfile = users[currentIndex];
  const nextProfile = users[nextIndex];


  const { width: screenWidth } = useWindowDimensions();

  const hiddenTranslateX = 2 * screenWidth;

    const translateX = useSharedValue(0);
    const rotate = useDerivedValue(() => interpolate(
      translateX.value,
      [0, hiddenTranslateX],
      [0, ROTATION]) + 'deg',);

    const cardStyle = useAnimatedStyle(() => ({
      transform: [{ translateX: translateX.value},{ rotate: rotate.value }],
    }));

    const nextCardStyle = useAnimatedStyle(() => ({
      transform: [{ scale: interpolate(translateX.value, [-hiddenTranslateX, 0, hiddenTranslateX],[1, 0.8, 1])},
      ],
      opacity: interpolate(
        translateX.value,
        [-hiddenTranslateX, 0, hiddenTranslateX],
        [1, 0.5, 1],
      ),
    }));

    const gestureHandler = useAnimatedGestureHandler({
       onStart: (_, ctx) => {
         ctx.startX = translateX.value;
       },
       onActive: (event, ctx) => {
         translateX.value = ctx.startX + event.translationX;
       },
       onEnd: event => {
         if (Math.abs(event.velocityX) < SWIPE_VELOCITY) {
           translateX.value = withSpring(0);
           return;
         } 

         translateX.value = withSpring(
          hiddenTranslateX = Math.sign(event.velocityX),
          {},
          () =>    runOnJS(setCurrentIndex)(currentIndex + 1),
         );
       },
    });

    useEffect(() => {
      translateX.value = 0;
      setNextIndex(currentIndex +1);
    }, [currentIndex, translateX]);

    
    return (
      <GestureHandlerRootView style={{flex: 1}}>
        <View style={styles.pageContainer}>
          {nextProfile && (<View style={styles.nextCardContainer}>
            <Animated.View style={[styles.animatedCard, nextCardStyle]}>
              <Card user={nextProfile} />
            </Animated.View>
          </View>
          )}

         {currentProfile && ( 
          <PanGestureHandler onGestureEvent={gestureHandler}>
            <Animated.View style={[styles.animatedCard, cardStyle]}>
              <Card user={currentProfile} />
            </Animated.View>
          </PanGestureHandler>
          )}
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
 animatedCard: {
    width: '100%', 
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
 },
 nextCardContainer: {
  ...StyleSheet.absoluteFillObject,
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
 },
});

export default App;
