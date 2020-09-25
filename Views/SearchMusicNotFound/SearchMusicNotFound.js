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
import LinearGradient from 'react-native-linear-gradient';

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
      
        <View style={styles.boxTop}>
          <Image 
            source={require('../../res/img/lendo_musica_logo.png')}
            style={styles.logo}
          />
          <Text style={styles.letraNaoEncontrada}>Letra não encontrada</Text>
        </View>
        
        <View style={styles.boxMeio}>
          <Image 
            source={require('../../res/img/ilustracao.png')}
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
              source={require('../../res/img/buscar.png')}
              style={styles.imgBuscar}
            />
            <Text style={styles.buscar}>Nova Busca</Text>
          </View>
        </TouchableOpacity>
      
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
  letraNaoEncontrada:{
    fontFamily: 'OpenSans-Bold',
    fontSize: 24,
    color: '#FFFFFF',
    marginTop: 49,
  },
  boxMeio:{
    marginTop: 40,
    alignItems: 'center',
  },
  imagem:{
    width: 220,
    height: 148,
  },
  frase:{
    width: largura - 150,
    marginTop: 40,
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    color: '#FFFFFF'
  },
  buscarButton:{
    marginTop: 30,
    paddingLeft: largura/6,
    paddingRight: largura/6,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#FFB703",
  },
  dentroButton:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
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

export default SearchMusicNotFound;
