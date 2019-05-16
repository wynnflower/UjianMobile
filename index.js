/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import DrawerNav from './drawerNav';
//import List from './src/screens/EditEmployeeScreen'
import App from './App'
import {StackContainer} from './src/routes/StackRoot'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
