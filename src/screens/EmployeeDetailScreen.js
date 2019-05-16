import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet,
  Button,
  Alert
} from "react-native";
import {Fire} from './../support/firebase'

class EmployeeDetailScreen extends Component {
  onBtnDelete=(key,nama)=>{
    const {getParam} = this.props.navigation
    Alert.alert('Delete Data',' Are You Sure you want to delete '+nama,
    [
        {
            text:'Yes',onPress:()=>{
              //alert('manager/'+getParam('id')+'/employee/'+key)
                Fire.database().ref('manager/'+getParam('id')+'/employee').child(key).remove()
                alert('Data berhasil dihapus')
            }
        },
        {text:'Cancel'}
    ])
  }
  render() {
    const {getParam} = this.props.navigation
    return (
      <View style={styles.container}>
        <Text>{getParam('nama')}</Text>
        <Text>{getParam('shift')}</Text>
        <Text>{getParam('phone')}</Text>
        <Button title='Delete' onPress={()=>this.onBtnDelete(getParam('key'),getParam('nama'))}></Button>
      </View>
    );
  }
}
export default EmployeeDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

// import React, { Component } from "react";
// import MapView,{Marker} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
// import { 
//     View,
//     Text,
//     StyleSheet,
//     Button
// } from "react-native";


// class Pemesanan extends Component {
//   state={location:null}
//     onBtnClick=()=>{
//         //alert('masuk')
//         navigator.geolocation.getCurrentPosition((value)=>{
//             console.log(value)
//             this.setState({location:{
//               latitude:value.coords.latitude,
//               longitude:value.coords.longitude,
//               latitudeDelta: 0.0012,
//               longitudeDelta: 0.0012
//             }})
//         },(err)=>{
//             console.log(err)
//         })
//     }
//     render() {
//         console.disableYellowBox=true
//         const initial={
//               latitude: -7.7675,
//               longitude: 110.4031,
//               latitudeDelta: 0.0012,
//               longitudeDelta: 0.0012
//         }
//         const obj=this.state.location?this.state.location:initial
//         return (
//             // <View style={styles.container}>
//             //     <Text>Pemesanan</Text>
//             // </View>
//             <View style={styles.container}>
            
//               <MapView
//             //   provider={PROVIDER_GOOGLE} // remove if not using Google Maps
//               style={styles.map}
//               region={obj}
//               // region={{
//               //   latitude: -7.7675,
//               //   longitude: 110.4031,
//               //   latitudeDelta: 0.0012,
//               //   longitudeDelta: 0.0012
//               // }}
//             >
//             <Marker coordinate={{
//                 latitude: obj.latitude,
//                 longitude: obj.longitude
//                 }}/>
//             </MapView>
            
            
//             <View style={{zIndex:1}}>
//                 <Button title='Get Current Position' onPress={this.onBtnClick}/>
//             </View>

//           </View>
//         );
//     }
// }
// export default Pemesanan;

// const styles = StyleSheet.create({
//     container: {
//       ...StyleSheet.absoluteFillObject,
//       height: 400,
//       width: 400,
//       justifyContent: 'flex-end',
//       alignItems: 'center',
//     },
//     map: {
//       ...StyleSheet.absoluteFillObject,
//     },
//    });

// // const styles = StyleSheet.create({
// //     container: {
// //         flex: 1,
// //         alignItems: 'center',
// //         justifyContent: 'center'
// //     }
// // });