import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, Image, ToastAndroid, Alert } from "react-native";
import estilos from "./estilos";
import User from '../../../assets/user.png'
import { LinearGradient } from 'expo-linear-gradient';


export default function Cadastrado({setNomeAlunoGlobal, setTurmaGlobal}){

    const [nomeAluno, setNomeAluno] = useState('')
    const [turma, setTurma] = useState('')

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
                    <Text style={estilos.texto}>Escola</Text>
                    <TextInput style={estilos.input} value={turma} onChangeText={text=> setTurma(text)}/>
                </View>
                <TouchableOpacity style={estilos.botao} onPress={()=> {
                    if(nomeAluno != '' && turma != ''){
                        setNomeAlunoGlobal(nomeAluno)
                        setTurmaGlobal(turma)
                        setNomeAluno('')
                        setTurma('')
                        ToastAndroid.show('Você foi cadastrado com sucesso', ToastAndroid.LONG)
                    }else Alert.alert("Aviso", "Preencha o formulário para cadastrar")
                }}>
                    <Text style={estilos.textoBotao}>Cadastrar</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}