// MainApp.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MainApp = () => {
  return (
    <View style={styles.container}>
      <Text>Main App Content Goes Here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainApp;
