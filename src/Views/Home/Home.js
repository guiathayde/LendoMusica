import React, { useState } from 'react';
import {
  View,
  Text,
  StatusBar, 
  Image, 
  TextInput, 
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import apiBuscaLetra from '../../api/apiBuscaLetra.js';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles.js';

const Home = ({ navigation }) => {

  const [artista, setArtista] = useState("");
  const [musica, setMusica] = useState("");
  const [loader, setLoader] = useState();

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

    setLoader(
      <View style={styles.loaderStyles}>
        <ActivityIndicator size="large" color="#FFB703" />
        <Text style={styles.buscandoLoader}>Buscando letra...</Text>
      </View>
    )

    const response = await apiBuscaLetra.get(`${artista}/${musica}`);
    
    if(response.data.lyrics == ""){
      setLoader(null)
      navigation.navigate('SearchMusicNotFound');
    }else{
      storeData(save.musica, save)
      setLoader(null)
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
            source={require('../../../res/img/lendo_musica_logo.png')}
            style={styles.logo}
          />
          {loader}
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
              source={require('../../../res/img/buscar.png')}
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

export default Home;