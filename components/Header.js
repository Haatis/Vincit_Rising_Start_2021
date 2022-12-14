import React from "react";
import { Text, View, Image, ImageBackground, StyleSheet  } from 'react-native';
import style from '../style/style';
import Images from '../constants/Images';
import { useFonts } from "expo-font";

export default function Header() {
    const [loaded] = useFonts({
        SansArabicRegular: require('../assets/fonts/IBMPlexSansArabic-Regular.ttf'),
        RobotoCondensed: require('../assets/fonts/RobotoCondensed-Regular.ttf'),
    });

    if(!loaded) {
        return null;
    }

    return(
        // <View style={styles.header}>
        //     <Text style={styles.title}>
        //         Vincit Crypto
        //     </Text>
        // </View>
        <View
            style={{
                width: '100%',
                height: 100,
                shadowOpacity: 0.5,
                shadowRadius: 11,
                shadowColor:'#000',
                shadowOffset:{width:0, height:4},
            }}    
        >
            <ImageBackground
                source={Images.banner2}
                resizeMode="cover"
                style={{
                    flex: 1,
                    alignItems: 'center',
                    opacity: 0.8,
                    borderBottomColor: 'white',
                    borderBottomWidth: 1,
                }}
            >
                <Text style={styles.heading}>Vincit Crypto</Text>
            </ImageBackground>

        </View>
    )
}
const styles = StyleSheet.create({
    heading: {
      fontFamily: 'RobotoCondensed',
      color: '#fff',
    //   fontWeight: 'bold',
      flex: 1,
      fontSize: 50,
      textAlign: 'center',
      margin: 10,
      marginTop: 15,
    },
    shadow: {
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowColor:'#000',
        shadowOffset:{width:0, height:4},
      },
  })