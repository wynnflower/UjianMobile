import React, { Component } from 'react';
import {View,ActivityIndicator} from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label, Button,Text,Left,Right,Body,Title,Icon } from 'native-base';

import {Fire} from './../support/firebase'
import Icon2 from 'react-native-vector-icons/FontAwesome'
import {connect} from 'react-redux'

import {onLoginSuccess} from './../2.actions'
import {StackActions,NavigationActions} from 'react-navigation'

class LoginScreen extends Component {
  state={loading:false,error:'',loading2:true}
  componentDidMount(){
    Fire.auth().onAuthStateChanged((user)=>{
      if(user){
        this.props.onLoginSuccess(user.email,user.uid)
      } else{
        this.setState({loading2:false})
      }
    })
  }
  componentDidUpdate(){
    if(this.props.user.email!==''){
      const resetAction = StackActions.reset({
        index:0,
        actions:[NavigationActions.navigate({routeName:'home'})]
      })
      this.props.navigation.dispatch(resetAction)
    }
  }
  onBtnLoginClick=()=>{
    if(this.inputEmail && this.inputPass){
      this.setState({loading:true})
        const auth = Fire.auth()
        auth.signInWithEmailAndPassword(this.inputEmail,this.inputPass)
        .then((val)=>{
          var {uid,email}=val.user
          console.log(uid)
          this.props.onLoginSuccess(email,uid)
          this.setState({loading:false})
        })
        .catch((err)=>{
          console.log('Ini Catch'+err)
          this.setState({error:err.message,loading:false})
        })
    } else {
      this.setState({error:'Semua data harus diisi'})
    }
  }
  render() {
    if (this.state.loading2){
      return(
        <View style={{flex:1,justifyContent:'center',alignContent:'center'}}>
          <ActivityIndicator size='large' color='black'/>
        </View>
      )
    }
    return (
      <Container>
        <Header >
            <Body>
                <Title style={{marginLeft:10}}>Login</Title>
                {/* <Title style={{marginLeft:10}}>{this.props.email}</Title> */}
            </Body>
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input onChangeText={(text)=>this.inputEmail=text} />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input onChangeText={(text)=>this.inputPass=text} />
            </Item>
            <Button block style={{marginTop:30,marginHorizontal:5}} onPress={this.onBtnLoginClick}>
            {this.state.loading?
            <ActivityIndicator size="small" color="#00ff00" />
            :<Text> Login </Text>}
            </Button>

            <View style={{flexDirection:'row',justifyContent:'center',marginTop:15}}>
                <View style={{height:60,width:60}}>
                    <Icon2 name='facebook' size={40}/>
                </View>
                <View style={{height:60,width:60}}>
                    <Icon2 name='google' size={40}/>
                </View>
                <View style={{height:60,width:60}}>
                    <Icon2 name='twitter' size={40}/>
                </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'center', marginTop:5}}>
                <Text onPress={()=>this.props.navigation.navigate('register')}>Belum punya akun? Register</Text>
            </View>
            {this.state.error?
            <View style={{paddingVertical:15,backgroundColor:'red',marginHorizontal:10,padding:10,marginTop:10}}>
              
              <View style={{position:'absolute',top:10,right:3}}>
                <Icon name='close-circle' fontSize={10} color='white' onPress={()=>this.setState({error:''})}/>
              </View>
              <View>
                <Text style={{color:'white',alignSelf:'center'}}>{this.state.error}</Text>
              </View>
              
            </View>:null}
          </Form>
          
        </Content>
      </Container>
    );
  }
}

const mapStateToProps=(state)=>{
  return{
    //email:state.auth.email
    user:state.auth,
    email:state.auth.email
  }
}

export default connect(mapStateToProps,{onLoginSuccess})(LoginScreen)

// import React, { Component } from "react";
// import { 
//     View,
//     Text,
//     StyleSheet,
//     Button
// } from "react-native";

// class LoginScreen extends Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text>LoginScreen</Text>
//                 <Button title='Register' onPress={() => this.props.navigation.navigate('register')} />
//                 <Button title='Login' onPress={() => this.props.navigation.navigate('home')} />
//             </View>
//         );
//     }
// }
// export default LoginScreen;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     }
// });