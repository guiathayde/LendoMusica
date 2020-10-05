import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'center'
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
  textoPesquisa:{
    marginTop: 40,
    fontFamily: 'OpenSans-Regular',
    fontSize: 28,
    color: '#FFB703'
  },
  button: {
    marginTop: 50,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#FFB703",
  },
  buttonBuscar:{
    paddingRight: 72,
    paddingLeft: 72,
    marginTop: 50,
    marginBottom: 50,
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

export default styles;