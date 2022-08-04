import 'react-native-gesture-handler'
import React, { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Cadastro from './src/telas/cadastrado'
import Perfil from './src/telas/perffil'

const Drawer = createDrawerNavigator();

export default function App() {
  const [nomeAlunoGlobal, setNomeAlunoGlobal] = useState('')
  const [cursoGlobal, setCursoGlobal] = useState('')
  const [nota1Global, setNota1Global] =  useState('')
  const [nota2Global, setNota2Global] =  useState('')

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" >
        <Drawer.Screen name="Home" options={{drawerActiveBackgroundColor: '#5F23A5', drawerActiveTintColor: '#ffffff'}}>
            {(props) => <Cadastro
                           {...props} 
                           setNomeAlunoGlobal={setNomeAlunoGlobal} 
                           setCursoGlobal={setCursoGlobal} 
                           setNota1Global={setNota1Global} 
                           setNota2Global={setNota2Global}/>}
        </Drawer.Screen>

        <Drawer.Screen name="Perfil" options={{drawerActiveBackgroundColor: '#5F23A5', drawerActiveTintColor: '#ffffff'}}>
          {(props) => <Perfil
                       {...props}
                       nomeAlunoGlobal={nomeAlunoGlobal}
                       turmaGlobal={cursoGlobal}
                       nota1Global={nota1Global}
                       nota2Global={nota2Global}/>}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}