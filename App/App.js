import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import tarefasScreen from './telas/Tarefas';
import avaliacaoScreen from './telas/Avaliacao';
import parabensScreen from './telas/Parabens';

const Stack = createStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tarefas do Dia" component={tarefasScreen}/>
        <Stack.Screen name="Avalie sua Tarefa" component={avaliacaoScreen}/>
        <Stack.Screen name="Parabens" component={parabensScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
