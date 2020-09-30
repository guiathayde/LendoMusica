import React, { useState }from 'react';
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
import styles from './styles.js';

const LatestSearches = ({ route, navigation }) => {

  const { storage } = route.params;
  console.log(storage)

  const limpaStorage = async () => {
    try {
      await AsyncStorage.clear()
      setPesquisas(null)
    } catch(e) {
      console.log('deu ruim pra limpa o storage')
    }
  
    console.log('Storage limpa')
  }

  const [pesquisas, setPesquisas] = useState(
    <View style={styles.dentroMusicasButton}>
      <Text style={styles.textoPesquisa}>{storage.toString().replace(/,/gi, "\n\n")}</Text>
    </View>);

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
            <TouchableOpacity 
              style={styles.boxHistorico}
              onPress={() => limpaStorage()}
            >
              <Text style={styles.limparHistorico}>Limpar histórico X</Text>
            </TouchableOpacity>
          </View>

          {pesquisas}

          <TouchableOpacity
            style={styles.buttonBuscar}
            onPress={() => navigation.navigate('Home')}
          >
            <View style={styles.dentroBuscarButton}>
              <Image
                source={require('../../../res/img/buscar.png')}
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

export default LatestSearches;