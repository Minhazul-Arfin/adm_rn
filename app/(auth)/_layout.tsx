import { View, Text } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';

const AuthTabsLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='index' options={{title:"Authentication"}}/>
    </Stack>
  )
}

export default AuthTabsLayout