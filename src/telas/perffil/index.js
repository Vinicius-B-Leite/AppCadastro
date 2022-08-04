import React from "react";
import { Text, View, SafeAreaView, StatusBar, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import estilos from "./estilos";
import user from '../../../assets/user.png'

import feliz from '../../../assets/feliz.png'
import paia from '../../../assets/paia.png'
import triste from '../../../assets/triste.png'



export default function Perfil({nomeAlunoGlobal, turmaGlobal, nota1Global, nota2Global}){
    const Media = () =>{
        let media = (parseFloat(nota1Global) + parseFloat(nota2Global)) / 2
        return media
    }

    const Passou = () => {
        if (Media() === 5) return "Recuperacao"
        if (Media() > 5) return "Aprovado"
        if (Media() < 5) return "Reprovado"
    }

    return(
        <SafeAreaView>
            <StatusBar/>
            <View style={estilos.conteiner}>
            <LinearGradient
            colors={['#0E0F26', '#5F23A5']}
            style={estilos.background}
            start={{x:1, y:1}}
            end={{x: 0, y: 0}}/>

            <Image source={Passou() === "Aprovado" ? feliz : Passou() === "Recuperacao" ? paia : Passou() === "Reprovado" ? triste : user} style={estilos.imagem}/>
            <Text style={estilos.nome}>{nomeAlunoGlobal}</Text>

            <View style={estilos.status}>
                <View style={estilos.coluna}>
                    <Text style={estilos.statusTitulo}>Status</Text>
                    <Text style={Passou() === "Aprovado" ? estilos.statusDescricaoAprovado : Passou() === "Recuperacao" ? estilos.statusDescricaoRecuperacao : Passou() === "Reprovado" ? estilos.statusDescricaoReprovado : ""}>{Passou()}</Text>
                </View>


                <View style={estilos.coluna}>
                    <Text style={estilos.statusTitulo}>Nota</Text>
                    <Text style={estilos.statusDescricao}>{Media()}</Text>
                </View>

                <View style={estilos.coluna}>
                    <Text style={estilos.statusTitulo}>Turma</Text>
                    <Text style={estilos.statusDescricao}>{turmaGlobal}</Text>
                </View>
            </View>

            <View style={estilos.descricao}>
                <Text style={estilos.descricaoTitulo}>Sobre o aluno:</Text>
                <Text style={estilos.descricaoDescricao}>O tubarão é o único peixe que pode piscar com ambos os olhos. Existem mais galinhas do que pessoas no mundo. As amêndoas são membros da família dos pêssegos.</Text>
                <TouchableOpacity style={estilos.descricaoBotao}><Text style={estilos.descricaoBotaoTexto}>Ver Boletim :)</Text></TouchableOpacity>
            </View>
        </View>
        </SafeAreaView>
    )
}