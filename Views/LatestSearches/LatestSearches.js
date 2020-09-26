import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar, 
  Image, 
  TextInput, 
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

const LatestSearches = ({ route, navigation }) => {

    const { artista } = route.params;
    const { musica } = route.params;

    return (
      <>
        <StatusBar 
        backgroundColor='black'
        barStyle='light-content'
        />
        <LinearGradient colors={['#023047', '#000000']} style={styles.linearGradient} style={styles.container}>
  
        <ScrollView>
          
          <View style={styles.boxTop}>
            <Image 
              source={require('../../res/img/lendo_musica_logo.png')}
              style={styles.logo}
            />
          </View>

          <TouchableOpacity style={styles.button}>
            <View style={styles.dentroMusicasButton}>
                <Text style={styles.textoButton}>Michael Jackson - Billie Jean</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <View style={styles.dentroMusicasButton}>
                <Text style={styles.textoButton}>Queen - I Wan to Break Free</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <View style={styles.dentroMusicasButton}>
                <Text style={styles.textoButton}>Billie Eilish - bad guy</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <View style={styles.dentroMusicasButton}>
                <Text style={styles.textoButton}>Bruno Mars - Billionaire</Text>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate('Home')}
          >
            <View style={styles.dentroBuscarButton}>
              <Image 
                source={require('../../res/img/buscar.png')}
                style={styles.imgBuscar}
              />
              <Text style={styles.buscar}>Buscar</Text>
            </View>
          </TouchableOpacity>
          
          </ScrollView>
        </LinearGradient>
      </>
    );
  };
  
  const largura = Dimensions.get("screen").width;
  
  const styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
      paddingLeft: 15,
      paddingRight: 15,
    },
    container:{
      flex: 1,
    },
    boxTop:{
      marginTop: 60,
      alignItems: 'center'
    },
    logo:{
      width: 232,
      height: 30,
    },
    button:{
      marginTop: 50,
      marginLeft: largura/6,
      marginRight: largura/6,
      borderWidth: 1,
      borderRadius: 4,
      borderColor: "#FFB703",
    },
    textoButton:{
        marginTop: 13,
        marginBottom: 13,
        fontFamily: 'OpenSans-Regular',
        fontSize: 16,
        color: '#FFB703'
    },
    dentroMusicasButton:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    dentroBuscarButton:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    imgBuscar:{
      width: 22,
      height: 24
    },
    buscar:{
      marginTop: 13,
      marginLeft: 15,
      marginBottom: 13,
      fontFamily: 'OpenSans-Bold',
      fontSize: 16,
      color: '#FFB703'
    },
  });

export default LatestSearches;