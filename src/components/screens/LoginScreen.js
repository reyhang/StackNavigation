import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Button} from 'react-native-elements';
import {useNavigation, useRoute} from '@react-navigation/core';

//Hooks ile yazalım.

export default function LoginScreen() {
  const {navigate, goBack} = useNavigation();
  const {params} = useRoute();

  return (
    <SafeAreaView style={{backgroundColor: '#F0F8FF', height: 750}}>
      <Text
        style={{
          color: '#ffe6e9',
          fontSize: 45,
          margin: 15,
          textAlign: 'center',
          letterSpacing: 5,
        }}>
        Login
      </Text>

      <Text
        style={{
          color: '#B0C4DE',
          fontSize: 15,
          margin: 15,
          textAlign: 'center',
          letterSpacing: 3,
        }}>
        {params.text}
      </Text>

      <Button
        title="Back to Home"
        type="outlined"
        titleStyle={{
          color: 'white',
        }}
        containerStyle={{
          padding: 5,
          backgroundColor: '#B0C4DE',
          borderRadius: 10,
          width: 200,
          alignSelf: 'center',
          marginVertical: 5,
        }}
        onPress={() => navigate('Home')}
      />

      <Button
        title="Go to Detail Screen"
        type="outlined"
        titleStyle={{
          color: 'white',
        }}
        containerStyle={{
          padding: 5,
          backgroundColor: '#707ea9',
          borderRadius: 10,
          width: 200,
          alignSelf: 'center',
          marginVertical: 5,
        }}
        onPress={() => navigate('Detail')}
      />

      <Button
        title="Go Back"
        type="outlined"
        titleStyle={{
          color: 'white',
        }}
        containerStyle={{
          padding: 5,
          backgroundColor: '#B0C4DE',
          borderRadius: 10,
          width: 200,
          alignSelf: 'center',
          marginVertical: 5,
        }}
        onPress={() => goBack()}
      />
    </SafeAreaView>
  );
}

/* export default function LoginScreen (props) {
    
    return (
        <SafeAreaView style={{backgroundColor:"#8FBC8F", height:750}}>
        <Text style={{color:"white",fontSize:35,fontFamily:"",margin:15, textAlign:"center", fontWeight:"bold"}} >
           Login 
        </Text>

     <Button 
             title="Click for Details" 
             type="outlined"  
           
             titleStyle={{
                color:"white"
             }}

             containerStyle={{
                 padding:5,
                 backgroundColor:"#707ea9", 
                 borderRadius:10,
                 width:200,
                 alignSelf:"center"   

                 }}

            onPress={() => props.navigation.navigate("Detail") } 

                  />

        

      </SafeAreaView>
    )

} */
