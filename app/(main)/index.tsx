import { Stack, Redirect } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { ScrollView, Text, StyleSheet, FlatList, Button, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

<<<<<<< HEAD


const index = () => {   

  const [isLogin, setLogin] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Welcome to Home Page</Text>
        <Button title='Logout' color="#bb2124" onPress={() => {
            console.log("Logout Button pressed");
            // isLogin = false;
            // console.log(isLogin);
        }}></Button>
      </ScrollView>
    </SafeAreaView>
=======
const index = () => {

  return (
    <View style={styles.container}>
      <Text>This is Main Home Screen</Text>
    </View>
>>>>>>> e01464293282c16bd17ab65872b5f4cc1af9a8c9
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
    fontWeight: "bold",
  },
});

export default index;
