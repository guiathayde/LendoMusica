import { StyleSheet, Dimensions } from "react-native";

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
  },
  voltar:{
    flexDirection: 'row'
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
  },
  nomeMusica:{
    paddingRight: largura/2,
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
    marginTop: 100,
    fontFamily: 'OpenSans-Bold',
    fontSize: 18,
    color: '#023047'
  },
  buscarButton:{
    paddingRight: 72,
    paddingLeft: 72,
    backgroundColor: '#219EBC',
    marginTop: 50,
    marginBottom: 50,
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

export default styles;