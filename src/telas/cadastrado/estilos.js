import React from "react"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    conteiner:{
        width: '100%',
        height: '100%',
    },
    background:{
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        right: 0
    },
    imagem:{
        width: '50%',
        resizeMode: 'contain',
        alignSelf: 'center',
        tintColor: '#ffffff'
    },
    form:{
        marginHorizontal: 20,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 20
    },
    label:{
        width: '100%',
        flexDirection: 'column',
        paddingBottom: 10
    },
    texto:{
        fontSize: 20,
        color: 'black'
    },
    input:{
        borderBottomWidth: 3,
        borderBottomColor: '#302399',
        width: '100%',
        paddingLeft: 5,
        paddingBottom: 3,
        fontSize: 18
    },
    botao:{
        padding: 10,
        backgroundColor: '#302399',
        width: '100%',
        alignItems: 'center',
        borderRadius: 5
    },
    textoBotao:{
        fontSize: 15,
        color: '#FFFCFF'
    }
})