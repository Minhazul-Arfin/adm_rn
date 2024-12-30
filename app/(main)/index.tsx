import { Stack, Redirect} from 'expo-router';
import React, { useState, useEffect } from 'react';
import { ScrollView, Text, StyleSheet, View, Button, Alert, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { initializeApp } from '@firebase/app';
import auth from '@react-native-firebase/auth';



const firebaseConfig = {
  apiKey: "AIzaSyBtJmQ0aRiKD2SWJAIPnBYVKQeb9kyEcjQ",
  authDomain: "rntest-e549d.firebaseapp.com",
  projectId: "rntest-e549d",
  storageBucket: "rntest-e549d.firebasestorage.app",
  messagingSenderId: "1047504900911",
  appId: "1:1047504900911:web:dc402cc85373879c0bc7da"
};

const app = initializeApp(firebaseConfig);


const index = () => {   

  const [isLogin, setLogin] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
          <View>
                <Text style={styles.title}>Welcome to NSU Admissions</Text>
          </View>
          <Pressable style={styles.homeDiv}>
             <Text style={{textAlign:"center"}}>Applicant Details</Text>
          </Pressable>
          <Pressable style={styles.homeDiv}>
              <Text style={{textAlign:"center"}}>Proctoring List</Text>
          </Pressable>

        {/* <Pressable onPress={async () => { */}
        <Button title='Logout' color="#bb2124" onPress={async () => {
            // auth()
            //   .signOut()
            //   .then(() =>{
            //       console.log("Sign Out");
              
            //   });
            
            console.log("Logout Button pressed");
            try {
              await auth().signOut(); // Sign out the user from Firebase
              Alert.alert('Logged out successfully!');
              // Navigate to the login screen or initial screen after logout (if needed)
              Navigation.navigate('./(auth)/index');
            } catch (error) {
              console.error(error);
              Alert.alert('Error logging out, please try again.');
            }
        }}></Button>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    padding: "10%",
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
    fontWeight: "bold",
  },
  homeDiv: {
    borderWidth: 2, 
    borderRadius: 20,
    borderColor: '#063970',
    marginVertical: "2%",
    padding: "2%",
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center"
  }
});

export default index;
