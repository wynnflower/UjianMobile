import React, { Component } from 'react';
import {View} from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label, Picker,Left,Right,Text,Button } from 'native-base';

import {Fire} from './../support/firebase'
import {connect} from 'react-redux'


class EditEmployee extends Component {
    state={selected:'',data:[], idEdit:0}
  componentDidMount(){
    //this.setState({data:this.props.data})
   
    this.getDropdown()
  }
  getDropdown=()=>{
    var db = Fire.database() // untuk ngakses database
        var employee = db.ref('manager/'+this.props.id+'/employee')

        employee.on('value',(items)=>{
            //this.setState({data:Object.values(items.val())})
            this.setState({data:items.val()})
            console.log('Items.Val'+items.val())
            //alert(Object.keys(this.state.data))
        },(err)=>{
            console.log(err)
        })
  }
  onBtnSave=()=>{
    var db = Fire.database() // untuk ngakses database
        var employee = db.ref('manager/'+this.props.id+'/employee/'+this.state.idEdit)
        //alert('manager/'+this.props.id+'/employee/'+this.state.idEdit)
        //alert('Nama: '+this.inputNama+', Phone: '+this.inputPhone+', Shift: '+this.state.selected)
        employee.set({
            nama:this.inputNama?this.inputNama:this.state.data[this.state.idEdit].nama,
            phone:this.inputPhone?this.inputPhone:this.state.data[this.state.idEdit].phone,
            shift:this.state.selected!==''?this.state.selected:this.state.data[this.state.idEdit].shift
        })
        .then((res)=>{
            console.log(res)
            alert('Data Berhasil di Edit')
            //this.setState({data:Object.values(items.val())})
            this.setState({data:items.val()})
            this.getDropdown()
        })
        .catch((err)=>{
            console.log(err)
        })
  }
  render() {
    return (
      <Container>
        <Header />
        <Content>
            <View  style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{paddingTop:15,paddingLeft:15}}>
                    <Text>Select Data</Text>
                </View>
                <View>
                <Picker mode="dropdown" style={{width:150}} 
                    selectedValue={this.state.idEdit}
                    onValueChange={(val)=>{
                      this.setState({idEdit:val,selected:''})
                      }}>
                    <Picker.Item label='Select Item' value={0}/>

                        {this.state.edit!=0?
                            Object.keys(this.state.data).map((val)=>{
                                return(
                                    <Picker.Item label={this.state.data[val].nama} value={val}/>
                                )
                            }):null
                        }
                    </Picker>
                </View>
            </View>
          <Form>
            <Item stackedLabel>
            {/* <Item floatingLabel></Item> */}
              <Label>
                {/* {this.state.idEdit>=0?this.state.data[this.state.idEdit].nama:'Nama'} */}
                Nama
              </Label>
              <Input defaultValue={this.state.idEdit!=0?this.state.data[this.state.idEdit].nama:null} onChangeText={(text)=>this.inputNama=text} />
            </Item>
            <Item stackedLabel last>
              <Label>
              {/* {this.state.idEdit>=0?this.state.data[this.state.idEdit].telp:'Phone'} */}
              Phone
              </Label>
              <Input defaultValue={this.state.idEdit!=0?this.state.data[this.state.idEdit].phone:null} onChangeText={(text)=>this.inputPhone=text} />
            </Item>
            <Item style={{marginTop:15}}>
                <Left>
                    <Text>Select Shift</Text>
                </Left>
                <Right>
                    <Picker mode="dropdown" style={{width:150}} 
                    selectedValue={this.state.idEdit !=0 && this.state.selected==''?this.state.data[this.state.idEdit].shift:this.state.selected}
                    // selectedValue={this.state.idEdit!=0?this.state.data[this.state.idEdit].shift:this.state.selected}
                    onValueChange={(val)=>{this.setState({selected:val})}}>
                        <Picker.Item label="Mon" value="Mon"/>
                        <Picker.Item label="Tue" value="Tue"/>
                        <Picker.Item label="Wed" value="Wed"/>
                        <Picker.Item label="Thu" value="Thu"/>
                        <Picker.Item label="Fri" value="Fri"/>
                        <Picker.Item label="Sat" value="Sat"/>
                        <Picker.Item label="Sun" value="Sun"/>
                    </Picker> 
                </Right>
                
            </Item>
            <Button block style={{marginTop:30,marginHorizontal:5}} onPress={this.onBtnSave}><Text> Edit Employee </Text></Button>
            <Text>{this.state.idEdit}</Text>
          </Form>
        </Content>
      </Container>
    );
  }
}
const mapStateToProps=(state)=>{
  return{
    data:state.auth,
    id:state.auth.id
  }
}
export default connect(mapStateToProps) (EditEmployee)
// import React, { Component } from "react";
// import { 
//     View,
//     Text,
//     StyleSheet
// } from "react-native";

// class MobilScreen extends Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text>MobilScreen</Text>
//             </View>
//         );
//     }
// }
// export default MobilScreen;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     }
// });
// import React, { Component } from "react";
// import { 
//     View,
//     Text,
//     StyleSheet
// } from "react-native";

// class Order extends Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text>Order</Text>
//             </View>
//         );
//     }
// }
// export default Order;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     }
// });