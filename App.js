import react from 'react';
import { StyleSheet, View } from 'react-native';

import Topo from './componentes/Topo/Topo.js';
import Conteudo from './componentes/Conteudo/Conteudo.js';

export default function App() {
  return (
    <View style={ estilos.container }>
        <Topo />
        <Conteudo />      
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
