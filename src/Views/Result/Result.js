import React, {} from 'react';
import {
  View,
  Text,
  StatusBar, 
  Image, 
  TouchableOpacity,
  ScrollView
} from 'react-native';
import styles from './styles.js';

const Result = ({ route, navigation }) => {

  const { response } = route.params;
  const { artista } = route.params;
  const { musica } = route.params;

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          
          <StatusBar 
          backgroundColor='black'
          barStyle='light-content'
          />
        
          <View style={styles.boxTop}>
            <Image
              source={require('../../../res/img/lendo_musica_logo_azul.png')}
              style={styles.logo}
            />
          </View>

          <View style={styles.voltarBusca}>
            <TouchableOpacity 
              onPress={() => navigation.navigate('Home')}
              style={styles.voltar}
            >
              <Image
                source={require('../../../res/img/seta_esquerda.png')}
                style={styles.seta}
              />
              <Text style={styles.fraseVoltar}>Voltar para a busca</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.cabecalhoLetra}>
            <Text style={styles.nomeMusica}>{ musica }</Text>
            <Text style={styles.artista}>Canção de { artista }</Text>
          </View>

          <Text style={styles.letraMusica}>{response.data.lyrics}</Text>

          <Text style={styles.fraseFinal}>Curtiu? Busque mais letras.</Text>
          
          <TouchableOpacity 
            style={styles.buscarButton}
            onPress={() => navigation.navigate('Home', { screen: 'LatestSearches', params: { artista, musica }})}
          >
            <View style={styles.dentroButton}>
              <Image 
                source={require('../../../res/img/buscar_branco.png')}
                style={styles.imgBuscar}
              />
              <Text style={styles.buscar}>Nova Busca</Text>
            </View>
          </TouchableOpacity>
        
        </View>
      </ScrollView>
    </>
  );
};

export default Result;
