import React, { useEffect, useState } from 'react';
import { Stack, Redirect } from 'expo-router';
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
<<<<<<< HEAD
  // const [isLogin, setIsLogin] = useState(false);
=======
  const [isLogin, setIsLogin] = useState(true);
>>>>>>> e01464293282c16bd17ab65872b5f4cc1af9a8c9

useEffect(() => {
  SplashScreen.hideAsync();
}, []);

  return (
      <>
        <Stack/>
        {/* {isLogin ? <Redirect href={"/(main)"}/> : <Redirect href={"/(auth)"}/>} */}
      </>
  );
};
