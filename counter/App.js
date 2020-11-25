import React,{ Component} from 'react';
import { Text, View, StyleSheet ,TouchableOpacity,Image,SafeAreaView,ImageBackground} from 'react-native';
// import Constants from 'expo-constants';

export default class counter extends Component{
   state ={
           count:0
          }
        onPress = () => {
          this.setState({
          count: this.state.count + 1
        })
      };
      reset=()=>{
        this.setState({
          count:0
        })
      }

  render(){
  return(
  
    <View style={styles.view}>
    <Text style={styles.header}>COUNTER</Text>
    <View style={{flex:8}}>
     <Text style={styles.count} >{this.state.count}</Text>
     </View>
    <TouchableOpacity onPress={this.onPress} style={styles.button} >
     <Text style={{fontSize:40,textAlign:'center'}} > COUNT</Text>
    </TouchableOpacity>
     <TouchableOpacity onPress={this.reset} style={styles.button}>  
     <Text style={{fontSize:40, padding: 10, borderStyle:'solid', borderColor:'black',borderRadius:5,textAlign:'center'}}> RESET</Text>
    </TouchableOpacity>
</View>


  );
 }
}
const styles= StyleSheet.create({
  view:{
    flex:1,
    backgroundColor:'#94C2A7',
    padding:10,
     paddingBottom:20,
    
  },
  button:{
    justifyContent:'center',
    textAlign:'center',
    fontSize:40,
    margin:10,
    backgroundColor:'#16c965',
    borderWidth:5,
   borderStyle:'solid', 
   borderColor:'black',
   borderRadius:50,
    
   
  },
  header:{
   fontSize:40,
   textAlign:'center',
   color:'#3C499C'
  },
count:{
  fontSize:120,
  color:'black',
  backgroundcolor:'#2980b9',
  justifyContent:'center',
  alignSelf:'center',
  top:75,
}
})
// // You can import from local files
// import AssetExample from './components/AssetExample';

// // or any pure javascript modules available in npm
// import { Card } from 'react-native-paper';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.paragraph}>
//         Change code in the editor and watch it change on your phone! Save to get a shareable url.
//       </Text>
//       <Card>
//         <AssetExample />
//       </Card>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingTop: Constants.statusBarHeight,
//     backgroundColor: '#ecf0f1',
//     padding: 8,
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });
