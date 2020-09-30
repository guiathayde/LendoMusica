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

const SearchMusicNotFound = ({ navigation }) => {
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
          <Text style={styles.letraNaoEncontrada}>Letra não encontrada</Text>
        </View>
        
        <View style={styles.boxMeio}>
          <Image 
            source={require('../../../res/img/ilustracao.png')}
            style={styles.imagem}  
          />
        </View>
        
        <Text style={styles.frase}>Essa música ainda não foi escrita, mas não fique triste, você pode acessar milhares de músicas realizando uma nova busca S2</Text>
        
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

export default SearchMusicNotFound;
