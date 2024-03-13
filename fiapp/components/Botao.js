import React from "react";
import { ScrollView, View, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
 
export default () => (


  <ScrollView contentContainerStyle={styles.scrollViewContent}>
    <View style={styles.container}>
      <TouchableOpacity style={styles.botao} onPress={() => {}}>
        <Text style={styles.textoBotao}>
          Let's Rock!
        </Text>
      </TouchableOpacity>
    </View>
  </ScrollView>
)
 
const styles = StyleSheet.create({

  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },


  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Dimensions.get('window').width * 0.25, 
  },


  botao: {
    marginTop: 100,
    marginBottom: 100,
    backgroundColor: '#e31856',
    paddingVertical: 16,
    paddingHorizontal: 3,
    borderRadius: 9,
    width: Dimensions.get('window').width * 0.5,
  },


  textoBotao: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 20,
    lineHeight: 26,
    fontWeight: 'bold',
  },


})

