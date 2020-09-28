import React, { useState, useEffect } from 'react';
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
import apiBuscaLetra from '../../api/apiBuscaLetra.js';
import AsyncStorage from '@react-native-community/async-storage';

const Home = ({ navigation }) => {

  const [artista, setArtista] = useState("");
  const [musica, setMusica] = useState("");

  const storeData = async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(key, jsonValue)
      console.log("deu bom", jsonValue, key)
    } catch (e) {
      console.log('Deu ruim no Async Storage')
    }
  }

  const lerArmazenamento = async () => {
    let keys = []
    try {
      keys = await AsyncStorage.getAllKeys()
    } catch(e) {
      console.log('deu ruim')
    }
    console.log(keys)
    return keys
  }

  async function latestSearches() {

    const storage = await lerArmazenamento()

    navigation.navigate('LatestSearches', { storage });
  }

  async function buscaLetra(save){

    const response = await apiBuscaLetra.get(`${artista}/${musica}`);
    
    if(response.data.lyrics == ""){
      navigation.navigate('SearchMusicNotFound');
    }else{
      storeData(save.musica, save)
      navigation.navigate('SearchResult', { artista, musica, response });
    }
    
  }

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
          <Text style={styles.buscarLetra}>Buscar letra</Text>
        </View>
        
        <View style={styles.boxMeio}>
          <Text style={styles.artista}>Artista</Text>
          <TextInput
            style={styles.input}
            placeholder={'Insira o nome do artista'}
            placeholderTextColor='#828282'
            onChangeText={texto => setArtista(texto.trim())}
          />
          <Text style={styles.barraInput}></Text>
          <Text style={styles.musica}>Música</Text>
          <TextInput
            style={styles.input}
            placeholder={'Insira o nome da música'}
            placeholderTextColor='#828282'
            onChangeText={texto => setMusica(texto.trim())}
          />
          <Text style={styles.barraInput}></Text>
          </View>
        
        <TouchableOpacity 
          style={styles.buscarButton}
          onPress={() => buscaLetra({musica})}
        >
          <View style={styles.dentroButton}>
            <Image 
              source={require('../../res/img/buscar.png')}
              style={styles.imgBuscar}
            />
            <Text style={styles.buscar}>Buscar</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.ultimasBuscasButton}
          onPress={() => latestSearches()}
        >
          <Text style={styles.ultimasBuscas}>Últimas buscas</Text>
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
  buscarLetra:{
    fontFamily: 'OpenSans-Bold',
    fontSize: 24,
    color: '#FFFFFF',
    marginTop: 49,
  },
  boxMeio:{
    marginTop: 50,
    alignSelf: 'center'
  },
  artista:{
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
    color: '#FFFFFF',
  },
  input:{
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    color: '#FFFFFF'
  },
  barraInput:{
    width: 274,
    height: 1,
    backgroundColor: "#828282"
  },
  musica:{
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
    color: '#FFFFFF',
    marginTop: 50,
  },
  buscarButton:{
    marginTop: 50,
    marginLeft: largura/6,
    marginRight: largura/6,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#FFB703",
  },
  dentroButton:{
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
  ultimasBuscasButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
    marginLeft: largura/6,
    marginRight: largura/6,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#FFB703",
  },
  ultimasBuscas:{
    marginTop: 13,
    marginBottom: 13,
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
    color: '#FFB703'
  },
  loaderStyles:{
    marginTop: 50,
    marginBottom: 5
  }
});

export default Home;