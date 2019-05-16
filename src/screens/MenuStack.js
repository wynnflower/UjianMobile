import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableHighlight
} from "react-native";

class Menu extends Component {
    render() {
        console.disableYellowBox=true
        return (
            <View style={styles.container}>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:100,marginHorizontal:20}}>
                    <TouchableHighlight onPress={()=>this.props.navigation.navigate('add')} style={{height:100,width:100,borderWidth:3,borderColor:'red'}}>
                        <Text>Add Employee</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=>this.props.navigation.navigate('edit')} style={{height:100,width:100,borderWidth:3,borderColor:'red'}}>
                        <Text>Edit Employee</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=>this.props.navigation.navigate('list')} style={{height:100,width:100,borderWidth:3,borderColor:'red'}}>
                        <Text>List Employee</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}
export default Menu;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center'
    }
});