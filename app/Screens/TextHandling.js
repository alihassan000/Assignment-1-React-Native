import React from 'react';
import { useState } from 'react';
import {StyleSheet ,SafeAreaView, Button,Text,View,StatusBar} from "react-native";
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


function TextHandling(props) {

    const [textSizes, setFontSize] = useState(1);

    const styles = StyleSheet.create({


      container: {
              flex: 1,
              backgroundColor: 'white',
              paddingTop : Platform.OS === "android" ? StatusBar.currentHeight : 0 ,
              alignItems: 'center',
              justifyContent: 'center',
            },
  
            rightText: {
              flex: textSizes === 2 ? 0.7 : 0.5,
              
            },
            leftText: {
              flex: textSizes === 2 ? 0.3 : 0.5,
              minWidth: textSizes === 3 ? 100 : 0,
              
            },
  
            textBox: {
              flex: textSizes === 5 ? 0.5 : 0,
              flexDirection: textSizes === 5 ? "column" : "row",
              margin: 3,
            },
        
            textsStyle: {
              alignItems: "center",
              borderRadius: 5,
              borderWidth: 1,
              color: "black",
              padding: 4,
              margin: 4,
            },
  
  
      
   });
   
    return (

        <SafeAreaView style={styles.container}>


<View
        style = {{
            backgroundColor : "white",
            flex : 1,
            flexDirection : "row",
            alignItems : "flex-end",
            position : "absolute",
            top : 100,
            left: 20
            

        }}

     >
          <View 
        style = {{
            backgroundColor : "gold",
            width: 70,
            height:70,

            

        }}
       >
        <Button  style = {{
            FontSize : 20, 
        }
            
        }
        title='50/50' onPress={() => setFontSize(1) }  />
       
        
</View>
     
       <View
        style = {{
            backgroundColor : "tomato",
            width: 70,
            height:70,

        }}
        >
       <Button
        title='30/70' onPress={() => setFontSize(2)}  />
   </View>
     
       <View
        style = {{
            backgroundColor : "pink",
            width: 70,
            height:70,

        }}
        >
     <Button 
        title='width 100' onPress={() => setFontSize(3)}  />

</View>

<View
        style = {{
            backgroundColor : "yellow",
            width: 70,
            height:70,

        }}
    >
<Button 
        title='One line' onPress={() => setFontSize(4)}  />
</View>
      
<View
        style = {{
            backgroundColor : "black",
            width: 70,
            height:70,

        }}
        >
      <Button 
        title='Column' onPress={() => setFontSize(5)}  />
</View>

     </View>

     <View style={styles.textBox}>
     <Text style = {[styles.textsStyle, styles.leftText]}
      numberOfLines={textSizes === 4 ? 1 : 0}
     > We bring you a variety of topics for 10 Lines Essays that kids would love to write about. 10 Lines Essay is considered one of the most enjoyable and fun-filled  </Text>

      <Text style ={[styles.textsStyle ,styles.rightText]}
       numberOfLines={textSizes === 4 ? 1 : 0}
     > We bring you a variety of topics for 10 Lines Essays that kids would love to write about. 10 Lines Essay is considered one of the most enjoyable and fun-filled </Text>
     
     </View>
      </SafeAreaView>

  );      
    
}


export default TextHandling;




