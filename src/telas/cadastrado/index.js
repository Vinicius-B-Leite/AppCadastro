import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, Image, ToastAndroid, Alert } from "react-native";
import estilos from "./estilos";
import User from '../../../assets/user.png'
import { LinearGradient } from 'expo-linear-gradient';


export default function Cadastrado({setNomeAlunoGlobal, setCursoGlobal, setNota1Global, setNota2Global}){

    const [nomeAluno, setNomeAluno] = useState('')
    const [curso, setCurso] = useState('')
    const [nota1, setNota1] =  useState('')
    const [nota2, setNota2] =  useState('')

    const validacao = () => {
        if(nomeAluno != '' && curso != '' && nota1 != 0 && nota2 != 0){
            setNomeAlunoGlobal(nomeAluno)
            setCursoGlobal(curso)
            setNota1Global(nota1)
            setNota2Global(nota2)
            setNomeAluno('')
            setCurso('')
            setNota2('')
            setNota1('')
            ToastAndroid.show('Você foi cadastrado com sucesso', ToastAndroid.LONG)
        }else Alert.alert("Aviso", "Preencha o formulário para cadastrar")
    }

    return(
        <View style={estilos.conteiner}>

            <LinearGradient
            colors={['#0E0F26', '#5F23A5']}
            style={estilos.background}
            start={{x:1, y:1}}
            end={{x: 0, y: 0}}/>

            <Image style={estilos.imagem} source={User}/>

            <View style={estilos.form}>
                <View style={estilos.label}>
                    <Text style={estilos.texto}>Nome do aluno</Text>
                    <TextInput style={estilos.input} value={nomeAluno} onChangeText={text=> setNomeAluno(text)}/>
                </View>
                <View style={estilos.label}>
                    <Text style={estilos.texto}>Curso</Text>
                    <TextInput style={estilos.input} value={curso} onChangeText={text=> setCurso(text)}/>
                </View>
                <View style={estilos.label}>
                    <Text style={estilos.texto}>Nota 1</Text>
                    <TextInput style={estilos.input} value={nota1} onChangeText={text=> setNota1(text)} keyboardType="numeric"/>
                </View>
                <View style={estilos.label}>
                    <Text style={estilos.texto}>Nota 2</Text>
                    <TextInput style={estilos.input} value={nota2} onChangeText={text=> setNota2(text)} keyboardType="numeric"/>
                </View>

                <TouchableOpacity style={estilos.botao} onPress={() => validacao()}>
                    <Text style={estilos.textoBotao}>Cadastrar</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}