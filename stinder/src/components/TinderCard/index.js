import react from 'react';
import {Text, Image, ImageBackground, View, StyleSheet} from 'react-native';

const Card = (props) => {
    const {name, image, bio} = props.user;
    return (
      <View style={styles.card}>
        <ImageBackground source={{ uri:
            image,}} style={styles.image}>
            <View style={styles.cardInner}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.bio}>{bio}</Text>
            </View>
        </ImageBackground>
      </View>
    );
 };


const styles = StyleSheet.create({
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
    color: 'white',
    fontWeight: 'bold', 
    },
    bio: {
    fontSize: 18,
    color: 'white',
    lineHeight: 24,
    },
  });

export default Card;