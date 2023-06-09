import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'expo-dev-client';
import LoginScreen from './screens/LoginScreen';
import Home from './screens/Home';
import DestinationDetail from './screens/DestinationDetail';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name='Login' component={LoginScreen}/>
        <Stack.Screen options={{headerShown: false}} name="Home" component={Home}/>
        <Stack.Screen options={{headerShown: false}} name="DestinationDetail" component={DestinationDetail}/>
        {/* <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
