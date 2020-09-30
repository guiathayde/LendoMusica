import React from 'react';
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
import styles from './styles.js';

const SearchResult = ({ route, navigation }) => {

  const { artista } = route.params;
  const { musica } = route.params;
  const { response } = route.params;

  return (
    <>
      <StatusBar 
      backgroundColor='black'
      barStyle='light-content'
      />
      <LinearGradient colors={['#023047', '#000000']} style={styles.linearGradient}
      style={styles.container}
      >
        <ScrollView>
      
        <View style={styles.boxTop}>
          <Image 
            source={require('../../../res/img/lendo_musica_logo.png')}
            style={styles.logo}
          />
          <Text style={styles.letraEncontrada}>Letra encontrada</Text>
        </View>
        
        <TouchableOpacity 
          style={styles.boxMeio}
          onPress={() => navigation.navigate('Result', {response, artista, musica})}
        >
          <View style={styles.buttonLetraEncontrada}>
            <Text style={styles.textoArtista}>{ artista }</Text>
            <Text style={styles.textoNomeMusica}>{ musica }</Text>
          </View>
        </TouchableOpacity>
        
        <Text style={styles.pergunta}>Não encontrou o que procurava?</Text>
        
        <TouchableOpacity 
          style={styles.buscarButton}
          onPress={() => navigation.navigate('Home')}
        >
          <View style={styles.dentroButton}>
            <Image 
              source={require('../../../res/img/buscar.png')}
              style={styles.imgBuscar}
            />
            <Text style={styles.buscar}>Nova Busca</Text>
          </View>
        </TouchableOpacity>
        </ScrollView>
      </LinearGradient>
    </>
  );
};

export default SearchResult;
