import {StatusBar} from "expo-status-bar"
import { AccountProvider } from './src/contexts/AccountFormContext';
import { Routes } from './src/routes';
import { KeyboardAvoidingView, Platform, StatusBar as RNStatusBar } from "react-native";
import "./global.css"
import clsx from "clsx";

export default function App() {
  return (
    <AccountProvider>
      <KeyboardAvoidingView
        style={{
          flex: 1,
          paddingTop: Platform.OS === 'android' ? RNStatusBar.currentHeight : 0
        }}
        behavior={Platform.OS === 'ios' ? 'padding': 'height'}
      >
        <Routes />
        <StatusBar translucent style="auto"/>
      </KeyboardAvoidingView>
    </AccountProvider>
  );
}
