import React, { Component } from 'react';

import { Container, Header, Content, Form, Item, Input, Label, Picker,Left,Right,Text,Button,View } from 'native-base';
import {Fire} from './../support/firebase'
import {connect} from 'react-redux'

class AddEmployee extends Component {
    state={selected:'Mon',data:[]}
    componentDidMount(){
      
    }
  onAddEmployee=()=>{
    var db = Fire.database() // untuk ngakses database
        var employee = db.ref('manager/'+this.props.id+'/employee')
        employee.push({
            nama:this.inputNama,
            phone:this.inputPhone,
            shift:this.state.selected
        })
        .then((res)=>{
            console.log(res)
            //this.setState({data:Object.values(items.val())})
            alert('Data berhasil ditambah')
            this.setState({data:items.val()})
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
          <Form>
            <Text>
              {this.props.id}
            </Text>

              
            
            <Item floatingLabel>
              <Label>Nama</Label>
              <Input onChangeText={(text)=>this.inputNama=text}/>
            </Item>
            <Item floatingLabel last>
              <Label>Phone</Label>
              <Input onChangeText={(text)=>this.inputPhone=text} />
            </Item>
            <Item style={{marginTop:15}}>
                <Left>
                    <Text>Select Shift</Text>
                </Left>
                <Right>
                    <Picker mode="dropdown" style={{width:150}} 
                    selectedValue={this.state.selected}
                    onValueChange={(val)=>{this.setState({selected:val})}}>
                        <Picker.Item label="Monday" value="Mon"/>
                        <Picker.Item label="Tuesday" value="Tue"/>
                        <Picker.Item label="Wednesday" value="Wed"/>
                        <Picker.Item label="Thursday" value="Thu"/>
                        <Picker.Item label="Friday" value="Fri"/>
                        <Picker.Item label="Saturday" value="Sat"/>
                        <Picker.Item label="Sunday" value="Sun"/>
                    </Picker> 
                </Right>
                
            </Item>
            <Button block style={{marginTop:30,marginHorizontal:5}} onPress={()=>this.onAddEmployee()}><Text> Add Employee </Text></Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
const mapStateToProps=(state)=>{
  return{
    id:state.auth.id
  }
}
export default connect(mapStateToProps)(AddEmployee)
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