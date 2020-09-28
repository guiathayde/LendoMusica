import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';

const LatestSearches = ({ route, navigation }) => {

  /*const { nomeArtista } = route.params;
  const { nomeMusica } = route.params;
  console.log(nomeArtista, nomeMusica)*/

  const { storage } = route.params;
  console.log(storage)

  const lerArmazenamento = async () => {
    let keys = []
    try {
      keys = await AsyncStorage.getAllKeys()
    } catch(e) {
      console.log('deu ruim')
    }
    console.log(keys)
  }

  const limpaStorage = async () => {
    try {
      await AsyncStorage.clear()
    } catch(e) {
      console.log('deu ruim pra limpa o storage')
    }
  
    console.log('Storage limpa')
  }

  let button = 
    <TouchableOpacity 
      style={styles.button}
    >
      <View style={styles.dentroMusicasButton}>
        <Text style={styles.textoButton}>{storage}</Text>
      </View>
    </TouchableOpacity>

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
            <TouchableOpacity 
              style={styles.boxHistorico}
              onPress={() => limpaStorage()}
            >
              <Text style={styles.limparHistorico}>Limpar histórico X</Text>
            </TouchableOpacity>
          </View>

          {button}

          <TouchableOpacity 
            style={styles.button}
            onPress={() => lerArmazenamento()}
          >
            <View style={styles.dentroMusicasButton}>
              <Text style={styles.textoButton}>Quem ta no armazenamento</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonBuscar}
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
  container: {
    flex: 1,
  },
  boxTop: {
    marginTop: 60,
    alignItems: 'center'
  },
  logo: {
    width: 232,
    height: 30,
  },
  limparHistorico: {
    marginTop: 40,
    fontFamily: 'OpenSans-Regular',
    fontSize: 18,
    color: '#FFFFFF'
  },
  button: {
    marginTop: 50,
    marginLeft: largura / 6,
    marginRight: largura / 6,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#FFB703",
  },
  buttonBuscar:{
    marginTop: 50,
    marginBottom: 50,
    marginLeft: largura / 6,
    marginRight: largura / 6,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#FFB703",
  },
  textoButton: {
    marginTop: 13,
    marginBottom: 13,
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    color: '#FFB703'
  },
  dentroMusicasButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  dentroBuscarButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imgBuscar: {
    width: 22,
    height: 24
  },
  buscar: {
    marginTop: 13,
    marginLeft: 15,
    marginBottom: 13,
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
    color: '#FFB703'
  },
});

export default LatestSearches;