import React from 'react';
import { StyleSheet, View, ScrollView, Image } from 'react-native';

export default () => (

  <ScrollView style={style.scrollView} contentContainerStyle={style.scrollViewContent}>

    <View>
      <Image 
        style={style.logoFooter}
        source={require('../assets/footer.png')}
      />
    </View>  

  </ScrollView>
);

const style = StyleSheet.create({

  scrollView: {
    flex: 1,
  },


  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },



  logoFooter: {
    width: 310,
    height: 27,
    left:45,
 
  },


});


