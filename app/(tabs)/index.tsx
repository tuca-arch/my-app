import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const[contador,setContador]= useState(0);

  const incrementar = () =>{
    setContador(contador + 1);
  };

  const stopwatch = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {  
      let interval = null;
        if (isActive) {
            interval = setInterval(() => {
            setSeconds((seconds) = seconds + 1);
        }, 1000);
      } else if (!isActive && seconds !== 0) {
        // lima o intervalo quando o componente desmonta os isActive muda
        // para o intervalo se isActive for falso
        clearInterval(interval);
      }

    });

  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Contador Expo GO</Text>    
      <Text style={[styles.numero,{color:contador%2===0? '#4caf50' : '$ff5722'}]}>
      Contador</Text>
      <Text style={[styles.numero]}>{contador}</Text>

      <TouchableOpacity style={styles.botao} onPress={incrementar}>
        <Text style={styles.textoBotao}>+1</Text>
      </TouchableOpacity>

    </View>

  );
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#f0f0f0',  
  },

  titulo:{
    fontSize:24,
    fontWeight:'bold',
    marginBottom:20,
  },

  numero:{
    fontSize:64,
    fontWeight:'bold',
    marginBottom:30,
  },
  botao:{
    backgroundColor:'#2196f3',
    paddingHorizontal:30,
    paddingVertical:15,
    borderRadius:10,
  },
  textoBotao:{
    color:'white',
    fontSize:20,
    fontWeight:'bold',
  },
});