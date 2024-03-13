import React from "react";
import { ScrollView, View, StyleSheet, Image, Text } from 'react-native';

export default () => (
  <ScrollView>
    <View>

        <Image
          style={styles.painel}
          source={require('../assets/painel.png')}
        />
      
    </View>



  </ScrollView>
);

const styles = StyleSheet.create({

  painel: {
    marginTop: 0,
    width: 500,
    height: 500,
    right: 45,
    
  }

});






