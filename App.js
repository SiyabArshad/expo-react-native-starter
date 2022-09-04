import * as React from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useFonts} from "expo-font"
import * as SplashScreen from 'expo-splash-screen';
import { LogBox } from 'react-native';
export default function App() {
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications
  const [fontsLoaded] =useFonts({
      'Rubik-Bold':require("./assets/fonts/Rubik-Bold.ttf"),
      'Rubik-ExtraBold':require("./assets/fonts/Rubik-ExtraBold.ttf"),
      'Rubik-Light':require("./assets/fonts/Rubik-Light.ttf"),
      'Rubik-Medium':require("./assets/fonts/Rubik-Medium.ttf"),
      'Rubik-Regular':require("./assets/fonts/Rubik-Regular.ttf"),
      'Rubik-SemiBold':require("./assets/fonts/Rubik-SemiBold.ttf"),
      'VarelaRound-Regular':require("./assets/fonts/VarelaRound-Regular.ttf")
  })

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
} useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }    
    prepare();
    setTimeout(async() => {
      await SplashScreen.hideAsync()
    }, 2000);
  }, []);

  if (!fontsLoaded) {
    return null;
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
