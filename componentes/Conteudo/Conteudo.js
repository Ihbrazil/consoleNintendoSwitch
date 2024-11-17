import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import Jogos from "../../assets/images/img2.png";

export default function Conteudo() {
    return (
        <View style={ estilos.containerConteudo }>
            <Text style={ estilos.titulo }>Os principais jogos estão aqui</Text>
            <Image source={ Jogos } style={ estilos.ConteudoImg } />
            <Text style={ estilos.descricao }>A família Nintendo Switch é o lar de jogos exclusivos de séries como Super Smash Bros.™, The Legend of Zelda™, Mario Kart™ e muitas outras.</Text>
        </View>
    )
}

const estilos = StyleSheet.create({
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