/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native'; //NavCont ile uygulamamızı sarıyoruz.
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import DetailScreen from './src/components/screens/DeteailScreen';
import HomeScreen from './src/components/screens/HomeScreen';
import LoginScreen from './src/components/screens/LoginScreen';

const Stack = createStackNavigator();

{
  /* Stack.Navigator initialRouteName="Home" Ekran açıldığında hangi sayfayı görmek istediğimizi yazmazsak en üst sıradaki sayfa gelicektir. */
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: '#B0C4DE'},
          headerTitleStyle: {color: 'white'},
          /*  headerLeft: () => (
              <Button
              title="info"
              onPress={() => alert("İnfo Message")}
              />
            ),
            headerRight: () => (
              <Button 
              title="Delete"
              onPress={() => alert("Deleted")}
              />
            ) */
        }}>
        <Stack.Screen component={HomeScreen} name="Home" />
        <Stack.Screen
          component={LoginScreen}
          name="Login"
          options={{
              gestureEnabled: false,
             
            }} 
        />
        <Stack.Group /* Ekranları gruplamak için kullanılır. */
          screenOptions={{backgroundColor: 'pink', presentation: 'modal'}}>
          <Stack.Screen
            component={DetailScreen}
            name="Detail"
            initialParams={{age: 23, hobies: 'swimming'}}
          />

          {/* Custom props verme: */}

          <Stack.Screen name="CustomStack">
            {props => (
              <HomeScreen
                {...props}
                extraData={[
                  {title: 'Welcome'},
                  {title: 'Welcome'},
                  {title: 'Welcome'},
                ]}
              />
            )}
          </Stack.Screen>
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
