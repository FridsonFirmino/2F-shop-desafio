import React from "react";
import { Routes } from "./src/router";
import { ActivityIndicator } from 'react-native';
import { 
  useFonts, 
  Roboto_400Regular, 
  Roboto_500Medium, 
  Roboto_700Bold
} from "@expo-google-fonts/roboto";
import { ProdProvider } from "./src/contexts/prodContext";

export default function App() {

  const [LoadingFonts] = useFonts({
    Roboto_400Regular, 
    Roboto_500Medium, 
    Roboto_700Bold
  })

  if (!LoadingFonts){
    return <ActivityIndicator size={"large"} color='#5700AF'/>
  }

  return (
    <ProdProvider>
      <Routes/>
    </ProdProvider>
    );
}

