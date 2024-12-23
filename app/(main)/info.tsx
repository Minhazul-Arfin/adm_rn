import { View, Text, Button, Linking } from 'react-native'
import React, { useEffect, useState } from 'react'
import { GestureHandlerRootView, ScrollView, TextInput } from 'react-native-gesture-handler'
import Dialog, { SlideAnimation, DialogContent } from 'react-native-popup-dialog';


// npm install --save react-native-popup-dialog

const info = () => {

    const [data, setData] = useState([]);
    
    const serachUser = async ()=>{
        const url = `https://jsonplaceholder.typicode.com/users`;
        let result = await fetch(url);
        result = await result.json();
        // console.warn(result)
        if(result){
            setData(result);
        }
    }

    useEffect(()=>{
        serachUser();
    }, []);

 
    // function callNowBtn (phoneNumber){
    //     let phoneNbr = phoneNumber;
    //     Linking.openURL('tel:${phoneNbr}');
    // }

    const popUp = () =>{
        <View >
        <Button
            title="Show Dialog"
            onPress={() => {
            this.setState({ visible: true });
            }}
        />
        <Dialog
            visible={this.state.visible}
            onTouchOutside={() => {
            this.setState({ visible: false });
            }}
  >
    <DialogContent>
      <Text></Text>
    </DialogContent>
  </Dialog>
</View>
    }
    

  return (
    <GestureHandlerRootView>
        
        <TextInput 
            placeholder='Search'
            clearButtonMode='always'
            style={{paddingHorizontal: 20,
                paddingVertical: 10,
                backgroundColor: "#cbd5e1",
                borderRadius: 10,
                marginHorizontal: 25,
                marginVertical: 5,
            }}
            autoCorrect={false}
            onChange={(value) => serachUser(value)}
        />
        <ScrollView>
        <Text style={{fontSize: 30, textAlign:'center'}}>Fetching Data From API</Text>
        {
            data.length ?
            data.map((item)=>
                    <View style={{padding: 20, borderWidth: 2, borderRadius: 20, borderColor: '#92f0d4', marginHorizontal: 10, marginVertical: 5, backgroundColor: '#f5f5f5'}}>
                        <Text style={{fontSize: 20}}>ID: {item.id}</Text>
                        <Text style={{fontSize: 20}}>Name: {item.name}</Text>
                        <Text style={{fontSize: 20}}>Email: {item.email}</Text>
                        <Text style={{fontSize: 20}}>Phone: {item.phone}</Text>
                        {/* <Text style={{fontSize: 20}}>City: {item.address.city}</Text> */}
                        <Text style={{fontSize: 20}} onPress={popUp}>Note: {item.company.catchPhrase}</Text>
                        <Text style={{fontSize: 20,
                                     backgroundColor: "#12c782",
                                     textAlign:'center',
                                     paddingVertical: 10,
                                     marginTop: 10,
                                     marginHorizontal: '30%',
                                     borderRadius: 20}} 

                                onPress={()=>{Linking.openURL('tel:01732903003');}}>Call Now</Text>                        
                    </View>   
            )
            : null
        }
        </ScrollView>
    </GestureHandlerRootView>
  )
}

export default info