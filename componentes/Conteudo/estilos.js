import { StyleSheet } from 'react-native';

const estilosConteudo = StyleSheet.create({
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

  export default estilosConteudo;