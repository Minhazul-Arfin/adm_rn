import { View, Text } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';

const MainTabsLayout = () => {
  return (
    // <Stack>
    //   <Stack.Screen name='index' options={{title:"Home"}}/>
    // </Stack>
    <Tabs screenOptions={{ tabBarActiveTintColor: '#10b981' }}>
      <Tabs.Screen name='index' options={{title:"Home", 
                                            tabBarIcon: ({ color }) => 
                                            <FontAwesome size={28} name="home" color={color} />,}}/>

      <Tabs.Screen name='info' options={{title:"Peoples",
                                            tabBarIcon: ({ color }) => 
                                              <FontAwesome size={28} name="users" color={color} />,}}/>   

       <Tabs.Screen name='search'  options={{title:"Search",
                                            tabBarIcon: ({ color }) => 
                                              <FontAwesome size={28} name="search" color={color} />,}}/>       
      <Tabs.Screen name='setting'  options={{title:"Settings",
                                            tabBarIcon: ({ color }) => 
                                              <FontAwesome size={28} name="cog" color={color} />,}}/>                                                                                                        
    </Tabs>
  )
}

export default MainTabsLayout