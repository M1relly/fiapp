import React from 'react';

import { ScrollView, View, StyleSheet, Platform, SafeAreaView, StatusBar, Text } from 'react-native';

import Header from './components/Header.js'
import Botao from './components/Botao'
import Lista from './components/Lista';
import Footer from './components/Footer'
import Painel from './components/painel'

export default function App() {
  return (
    <ScrollView>
      <View style={styles.viewSafeAndroid}>
        <SafeAreaView style={styles.layout}>
          <StatusBar backgroundColor='#000000'/>
          <Text >

          <Header/>
          <Painel/>
          <Lista/>
          <Botao/>
          <Footer/>
          </Text>
        </SafeAreaView>
      </View>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  viewSafeAndroid:{
    flex:1,
    paddingTop: Platform.OS === "android" ? 
StatusBar.currentHeight:0
  },
   layout: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    backgroundColor: '#000000',
}

})