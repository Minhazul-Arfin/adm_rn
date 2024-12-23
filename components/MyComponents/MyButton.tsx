import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'


const MyButton = ({title, onPress}) => {
  return (
    <TouchableOpacity
         activeOpacity={0.8} 
         style={styles.button}
         onPress={onPress}
    >
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#10b981",
        paddingHorizontal: 40,
        paddingVertical: 15,
        borderRadius: 10,
        marginHorizontal: 30
    },
    text: {
        fontSize: 18,
        color: "black",
        fontWeight: "bold",
        textAlign: "center"
    }
});

export default MyButton