import { StyleSheet } from "react-native";

export default StyleSheet.create({
    conteiner:{
        width: '100%',
        height: '100%',
    },
    background:{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: '55%'
    },
    imagem:{
        resizeMode: 'contain',
        tintColor: '#ffffff',
        alignSelf: 'center',
        width: '35%',
        height: '35%'
    },
    nome:{
        color: '#ffffff',
        fontSize: 30,
        alignSelf: 'center',
        paddingBottom: 20
    },
    status:{
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '90%',
        padding: 10,
        borderBottomColor: '#5F23A5',
        borderBottomWidth: 3
    },
    coluna:{
        width: '35%',
        alignItems: 'center'
    },
    statusTitulo:{
        color: '#5F23A5',
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 30
    },
    statusDescricaoAprovado:{
        color: 'green',
        fontSize: 18,
        fontWeight: 'bold'
    },
    statusDescricaoReprovado:{
        color: 'red',
        fontSize: 18,
        fontWeight: 'bold'
    },
    statusDescricaoRecuperacao:{
        color: '#ffe135',
        fontSize: 18,
        fontWeight: 'bold'
    },
    descricao:{
        padding: 20
    },
    descricaoTitulo:{
        fontSize: 20,
        lineHeight: 30,
        color: '#5F23A5'
    },
    descricaoDescricao:{
        fontSize: 17,
        textAlign: 'justify',
        paddingBottom: 20
    },
    descricaoBotao:{
        width: '100%',
        backgroundColor:'#302399',
        padding: 10,
        borderRadius: 5
    },
    descricaoBotaoTexto:{
        fontSize: 16,
        color: '#ffffff',
        alignSelf: 'center',
        fontWeight: 'bold'
    }
})