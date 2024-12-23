import { View, Text, Button, Linking} from 'react-native'
import React, { useEffect, useState } from 'react'
import { GestureHandlerRootView, ScrollView, TextInput } from 'react-native-gesture-handler'


// using JSON-SERVER
// npm install -g json-server
// npx json-server db_name.json
// https://github.com/typicode/json-server


const SearchTab = () => {

    const [data, setData] = useState([]);

    const searchUser = async (searchValue)=>{
        const url = `https://jsonplaceholder.typicode.com/users?q=${searchValue}`;
        // const url = `http://10.102.6.45:3000/users?q=${searchValue}`;
        // console.log(url)
        let result = await fetch(url);
        result = await result.json();
        // console.warn(result)
        if(result){
            setData(result);
        }
    }

    // useEffect(()=>{
    //   searchUser();
    // }, []);

 


  return (
    <GestureHandlerRootView>
        
        <TextInput 
            placeholder='Type here...'
            clearButtonMode='always'
            style={{paddingHorizontal: 20,
                paddingVertical: 10,
                backgroundColor: "#cbd5e1",
                borderRadius: 10,
                marginHorizontal: 25,
                marginVertical: 5,
            }}
            // autoCorrect={false}
            onChangeText={(text) => searchUser(text)}
        />
        <ScrollView>
        <Text style={{fontSize: 30, textAlign:'center'}}>Fetching Data From API</Text>
        {
            data.length ?
            data.map((item)=>
                    <View style={{padding: 20, borderWidth: 2, borderRadius: 20, borderColor: '#92f0d4', marginHorizontal: 10, marginVertical: 5, backgroundColor: '#cbd5e1'}}>
                        <Text style={{fontSize: 20}}>ID: {item.id}</Text>
                        <Text style={{fontSize: 20}}>Name: {item.name}</Text>
                        <Text style={{fontSize: 20}}>Email: {item.email}</Text>
                        <Text style={{fontSize: 20}}>Phone: {item.phone}</Text>
                        {/* <Text style={{fontSize: 20}}>City: {item.address.city}</Text> */}
                        <Text style={{fontSize: 25,
                                     backgroundColor: "#10b981",
                                     textAlign:'center',
                                     paddingVertical: 5,
                                     marginTop: 10,
                                     marginHorizontal: '30%',
                                     borderRadius: 20}} 

                                onPress={()=>{Linking.openURL(`tel:${item.phone}`);}}>Call Now</Text>
                    </View>   
            )
            : null
        }
        </ScrollView>
    </GestureHandlerRootView>
  )

}

export default SearchTab