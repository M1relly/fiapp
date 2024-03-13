import React from "react";
import { ScrollView, View, StyleSheet, Image, Text } from 'react-native';

export default () => (
  <ScrollView>
    <View style={styles.header}>
      
      <View style={styles.tamImagem}>

        <Image
          style={styles.menu}
          source={require('../assets/menu.png')}
        />


        <Image
          style={styles.logo}
          source={require('../assets/logo.jpg')}
        />

        <Text style={styles.titulo}>2TDSPF</Text>

        <Text style={styles.textos}>
          Turma da manhã, Paulista
        </Text>

      
      </View>
    </View>


  </ScrollView>
);

const styles = StyleSheet.create({


  header: {
    width: 500,
    height: 300,
    flex: 0,
    backgroundColor: '#000000',
  },


  tamImagem: {
    width: 474,
    height: 266,
    alignItems: 'center', 
  },


  logo: {
    height: 100,
    width: 300,
    marginTop: 20, 
    right: 25,
  },


  titulo: {
    color: '#e31856',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50, 
    right: 30,
  },


  textos: {
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20, 
    right: 30,
  },


  menu: {
    marginTop: 10,
    width: 400,
    height: 27,
    right: 30,
  },


});
