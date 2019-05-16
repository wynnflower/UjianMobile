import React,{Component} from 'react'

import { createStackNavigator,createAppContainer,createBottomTabNavigator,createMaterialTopTabNavigator, StackNavigator } from 'react-navigation'
import LoginScreen from '../screens/LoginScreen';
import Register from '../screens/RegisterPage';
//import Pemesanan from '../screens/EmployeeDetailScreen';
import MenuAccountSetting from '../screens/MenuAccountSetting'
import EditEmployeeScreen from '../screens/EditEmployeeScreen';
import Menu from '../screens/MenuStack';
import AddEmployeeScreen from '../screens/AddEmployeeScreen';
import ListEmployeeScreen from '../screens/ListEmployeeScreen';
import EmployeeDetailScreen from '../screens/EmployeeDetailScreen';

const AccountSetting = createStackNavigator({
    menu : MenuAccountSetting
})

const StackBeranda = createStackNavigator({
    MenuStack : Menu,
    add : AddEmployeeScreen,
    edit : EditEmployeeScreen,
    list: ListEmployeeScreen,
    detail: EmployeeDetailScreen
},{
    headerMode:'none'
})

StackBeranda.navigationOptions=({navigation})=>{
    var tabBarVisible=false
    var routeName=navigation.state.routes[navigation.state.index].routeName
    if(routeName=='MenuStack'){
        tabBarVisible=true
    }
    return{
        tabBarVisible
    }
}

const HomeTab = createMaterialTopTabNavigator({
    home : StackBeranda,
    account : AccountSetting
},{
    tabBarPosition:'bottom',
    swipeEnabled:false
}) 

const StackRoot = createStackNavigator({
    login : LoginScreen,
    register : Register,
    home : HomeTab
},{
    headerMode : 'none',
    initialRouteName:'login'
})

export const StackContainer = createAppContainer(StackRoot)