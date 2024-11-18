import React from "react";
import { View, Text, Image } from "react-native";

import Jogos from "../../assets/images/img2.png";
import estilos from "./estilos";

export default function Conteudo() {
    return (
        <View style={ estilos.containerConteudo }>
            <Text style={ estilos.titulo }>Os principais jogos estão aqui</Text>
            <Image source={ Jogos } style={ estilos.ConteudoImg } />
            <Text style={ estilos.descricao }>A família Nintendo Switch é o lar de jogos exclusivos de séries como Super Smash Bros.™, The Legend of Zelda™, Mario Kart™ e muitas outras.</Text>
        </View>
    )
}