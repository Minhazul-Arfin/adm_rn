import React, { useEffect, useState } from 'react';
import { Stack, Redirect } from 'expo-router';
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // const [isLogin, setIsLogin] = useState(false);

// useEffect(() => {
//   SplashScreen.hideAsync();
// }, []);

  return (
      // <>
      //   <Stack/>
      //   {/* {isLogin ? <Redirect href={"/(main)"}/> : <Redirect href={"/(auth)"}/>} */}
      //   {/* <Stack.Screen name="index" options={{headerShown: false}}/> */}
      // </>

      <Stack>
            <Stack.Screen name='(main)' options={{ headerShown:false}}/>
            <Stack.Screen name='(auth)' options={{ headerShown:false}}/>
      </Stack>
  );
};
