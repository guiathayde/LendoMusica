import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
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
  buscarLetra:{
    fontFamily: 'OpenSans-Bold',
    fontSize: 24,
    color: '#FFFFFF',
    marginTop: 49,
  },
  boxMeio:{
    marginTop: 50,
    alignSelf: 'center'
  },
  artista:{
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
    color: '#FFFFFF',
  },
  input:{
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    color: '#FFFFFF'
  },
  barraInput:{
    width: 274,
    height: 1,
    backgroundColor: "#828282"
  },
  musica:{
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
    color: '#FFFFFF',
    marginTop: 50,
  },
  buscarButton:{
    paddingRight: 72,
    paddingLeft: 72,
    marginTop: 50,
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
  ultimasBuscasButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
    paddingRight: 72,
    paddingLeft: 72,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#FFB703",
  },
  ultimasBuscas:{
    marginTop: 13,
    marginBottom: 13,
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
    color: '#FFB703'
  }
});

export default styles;