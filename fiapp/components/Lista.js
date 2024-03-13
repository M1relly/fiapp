import React from "react";
import { ScrollView, View, StyleSheet, Image, Text } from 'react-native';

export default () => (
  <ScrollView>
      <View>
        <Text style={styles.titulo}>Disciplinas</Text>
      </View>
    <View style={styles.lista}>
      <ItemLista imageSource={require('../assets/1.png')} texto="Advanced Business Development and .NET" />
      <ItemLista imageSource={require('../assets/2.png')} texto="Compliance, QA & Tests" />
      <ItemLista imageSource={require('../assets/3.png')} texto="DevOps Tools & Cloud Computing" />
      <ItemLista imageSource={require('../assets/4.png')} texto="Disruptive Architecture - IOT, IOB & Gen. AI" />
      <ItemLista imageSource={require('../assets/5.png')} texto="Java Advanced" />
      <ItemLista imageSource={require('../assets/6.png')} texto="Mastering Relational and Non-Relational Database" />
      <ItemLista imageSource={require('../assets/7.png')} texto="Mobile App Development" />
    </View>
  </ScrollView>
)

const ItemLista = ({ imageSource, texto }) => (
  <View style={styles.itemLista}>
    <Image style={styles.imagem} source={imageSource} />
    <Text style={styles.texto}>{texto}</Text>
  </View>
)

const styles = StyleSheet.create({

  lista: {
    backgroundColor: '#000000',
  },


  itemLista: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginLeft: 20, 
  },


  imagem: {
    width: 40,
    height: 40,
    marginRight: 10,
  },

  
  texto: {
    color: '#ffffff',
    fontSize: 14, 
    flexShrink: 1, 
  },

  titulo: {
    color: '#e31856',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 30,
  },

})
