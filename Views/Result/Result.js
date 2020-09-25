import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar, 
  Image, 
  TouchableOpacity,
  Dimensions,
  ScrollView
} from 'react-native';

const Result = ({ navigation }) => {

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
              source={require('../../res/img/lendo_musica_logo_azul.png')}
              style={styles.logo}
            />
          </View>

          <View style={styles.voltarBusca}>
            <Image
              source={require('../../res/img/seta_esquerda.png')}
              style={styles.seta}
            />
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={styles.fraseVoltar}>Voltar para a busca</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.cabecalhoLetra}>
            <Text style={styles.nomeMusica}>O bêbado e a equilibrista</Text>
            <Text style={styles.artista}>CANÇÃO DE ELIS REGINA</Text>
          </View>

          <Text style={styles.letraMusica}>Letra da música</Text>

          <Text style={styles.fraseFinal}>Curtiu? Busque mais letras.</Text>
          
          <TouchableOpacity 
            style={styles.buscarButton}
            onPress={() => navigation.navigate('Home')}
          >
            <View style={styles.dentroButton}>
              <Image 
                source={require('../../res/img/buscar_branco.png')}
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

const largura = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center'
  },
  boxTop:{
    marginTop: 60,
    alignItems: 'center'
  },
  logo:{
    width: 232,
    height: 30,
  },
  voltarBusca:{
    marginTop: 40,
    flexDirection: 'row',
  },
  seta:{
    width: 22,
    height: 24
  },
  fraseVoltar:{
    marginLeft: 10,
    paddingRight: largura/4,
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    color: '#219EBC'
  },
  cabecalhoLetra:{
    marginTop: 40,
    alignItems: 'center',
  },
  nomeMusica:{
    fontFamily: 'OpenSans-Bold',
    fontSize: 24,
    color: '#023047'
  },
  artista:{
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    color: '#023047'
  },
  letraMusica:{
    marginTop: 40,
    marginLeft: largura/6,
    marginRight: largura/6,
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    color: '#023047'
  },
  fraseFinal:{
    marginTop: 40,
    fontFamily: 'OpenSans-Bold',
    fontSize: 18,
    color: '#023047'
  },
  buscarButton:{
    backgroundColor: '#219EBC',
    marginTop: 30,
    paddingLeft: largura/6,
    paddingRight: largura/6,
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
    color: '#FFFFFF'
  },
});

export default Result;
