import React, { useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import apiBuscaLetra from '../../api/apiBuscaLetra.js';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles.js';

const Home = ({ navigation }) => {
  const [artista, setArtista] = useState('');
  const [musica, setMusica] = useState('');
  const [botaoHistorico, setBotaoHistorico] = useState(false);

  const storeData = async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      console.log('Deu ruim pra grava no Async Storage');
    }
  };

  const lerArmazenamento = async () => {
    let keys = [];
    try {
      keys = await AsyncStorage.getAllKeys();
    } catch (e) {
      console.log('Deu ruim pra ler o armazenamento do Async Storage');
    }
    console.log(keys);
    return keys;
  };

  async function latestSearches() {
    const storage = await lerArmazenamento();

    navigation.navigate('LatestSearches', { storage });
  }

  async function buscaLetra(save) {
    const response = await apiBuscaLetra.get(`${artista}/${musica}`);

    if (response.data.lyrics == '') {
      navigation.navigate('SearchMusicNotFound');
    } else {
      storeData(save.musica, save);
      setBotaoHistorico(true);
      setArtista('');
      setMusica('');
      navigation.navigate('SearchResult', { artista, musica, response });
    }
  }

  let ultimasBuscas;
  if (botaoHistorico) {
    ultimasBuscas = (
      <TouchableOpacity
        style={styles.ultimasBuscasButton}
        onPress={() => latestSearches()}>
        <Text style={styles.ultimasBuscas}>Últimas buscas</Text>
      </TouchableOpacity>
    );
  } else {
    ultimasBuscas = null;
  }

  return (
    <>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <LinearGradient
        colors={['#023047', '#000000']}
        style={styles.linearGradient}>
        <ScrollView>
          <View style={styles.boxTop}>
            <Image
              source={require('../../../res/img/lendo_musica_logo.png')}
              style={styles.logo}
            />
            <Text style={styles.buscarLetra}>Buscar letra</Text>
          </View>

          <View style={styles.boxMeio}>
            <Text style={styles.artista}>Artista</Text>
            <TextInput
              style={styles.input}
              placeholder={'Insira o nome do artista'}
              placeholderTextColor="#828282"
              onChangeText={(texto) => setArtista(texto.trim())}
            />
            <Text style={styles.barraInput} />
            <Text style={styles.musica}>Música</Text>
            <TextInput
              style={styles.input}
              placeholder={'Insira o nome da música'}
              placeholderTextColor="#828282"
              onChangeText={(texto) => setMusica(texto.trim())}
            />
            <Text style={styles.barraInput} />
          </View>

          <TouchableOpacity
            style={styles.buscarButton}
            onPress={() => buscaLetra({ musica })}>
            <View style={styles.dentroButton}>
              <Image
                source={require('../../../res/img/buscar.png')}
                style={styles.imgBuscar}
              />
              <Text style={styles.buscar}>Buscar</Text>
            </View>
          </TouchableOpacity>

          {ultimasBuscas}
        </ScrollView>
      </LinearGradient>
    </>
  );
};

export default Home;
