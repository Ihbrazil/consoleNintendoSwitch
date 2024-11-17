import react from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Capa from './assets/images/img1.png';
import Jogos from './assets/images/img2.png';

export default function App() {
  return (
    <View style={ estilos.container }>
        <View style={ estilos.containerTopo }>
            <Image source={ Capa } style={ estilos.topoImg } />
            <Text style={ estilos.topoTitulo }>Nintendo Switch</Text>
        </View>
      
        <View style={ estilos.containerConteudo }>
            <Text style={ estilos.titulo }>Os principais jogos estão aqui</Text>
            <Image source={ Jogos } style={ estilos.ConteudoImg } />
            <Text style={ estilos.descricao }>A família Nintendo Switch é o lar de jogos exclusivos de séries como Super Smash Bros.™, The Legend of Zelda™, Mario Kart™ e muitas outras.</Text>
        </View>
      
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  containerTopo: {
    backgroundColor:'#e60012',
    justifyContent: "center",
    alignItems: "center",
    padding: 30
  },

  topoTitulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  
  topoImg: {
    width: 100,
    height: 100
  },

  containerConteudo: {
    padding: 30,
    alignItems: "center",
  },

  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },

  descricao: {
    textAlign: "center",
    fontWeight: "normal",
    marginBottom: 30,
  },

  ConteudoImg: {
    width: 200,
    height: 120,
    marginBottom: 10,
  }
});
