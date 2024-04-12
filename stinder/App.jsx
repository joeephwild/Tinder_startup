import React, {useState} from 'react';
import {View, StyleSheet, Pressable, SafeAreaView} from 'react-native';
import {
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import HomeScreen from './src/screens/HomeScreen';
import MatchesScreen from './src/screens/MatchesScreen';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';



const App = () => {  
  const [activeScreen, setActiveScreen] = useState('HOME');
  const color = '#b5b5b5';
  const activeColor = '#F76C6B';
    return (
      <GestureHandlerRootView style={{flex: 1}}>
        <SafeAreaView style={{flex: 1}}>
         <View style={styles.pageContainer}>
           <View style={styles.topNavigation}>
            <Pressable onPress={() => setActiveScreen('HOME')}>
            <Octicons name="home" size={25} color={activeScreen === 'HOME' ? activeColor : color} />
            </Pressable>
           <MaterialCommunityIcons name="star-four-points" size={24} color={color} />
            <Pressable onPress={() => setActiveScreen('CHAT')}>
            <Ionicons name="chatbubbles-outline"size={24} color={activeScreen === 'CHAT' ? activeColor : color} />
            </Pressable>
            <FontAwesome name="user" size={24} color={color} />
            </View>  
           {activeScreen === 'HOME' && <HomeScreen />}
           {activeScreen === 'CHAT' && <MatchesScreen />}
         </View>
        </SafeAreaView>
      </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: 'center', 
    alignItems: 'center', 
    flex: 1,
  },
 topNavigation: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  width: '100%',
  paddingTop: 10,

 }
});

export default App;
