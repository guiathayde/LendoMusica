import { StyleSheet, Dimensions } from "react-native";

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
  letraEncontrada:{
    fontFamily: 'OpenSans-Bold',
    fontSize: 24,
    color: '#FFFFFF',
    marginTop: 49,
  },
  boxMeio:{
    marginTop: 50,
  },
  buttonLetraEncontrada:{
    paddingLeft: largura/6,
    paddingRight: largura/6,
    marginBottom: 40,
    borderRadius: 4,
    backgroundColor: '#219EBC',
  },
  textoArtista:{
    marginTop: 20,
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
    color: '#FFFFFF',
  },
  textoNomeMusica:{
    marginBottom:20,
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    color: "#FFFFFF",
  },
  pergunta:{
    marginTop: 40,
    fontFamily: 'OpenSans-Bold',
    fontSize: 18,
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
});

export default styles;