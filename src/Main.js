import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Forgot from './pages/Forgot';
import VarifiyEmail from './pages/VarifiyEmail';
import VarifyOtp from './pages/VarifyOtp';
import ResetPassword from './pages/ResetPassword';
 import Deshboard from './pages/Deshboard';
import AuthLoadingScreen from './pages/AuthLoadingScreen';
import NavigationDrawerStructure from './components/nav/NavigationDrawerStructure';
import CustomSidebarMenu from './components/nav/CustomSidebarMenu';

const defaultOptions = {
  headerRight: <View />,
  headerStyle: {
    backgroundColor: '#FF9800',
  },
  headerTitleStyle: {
    textAlign: 'center',
    flex: 1,
  },
  headerTintColor: '#fff',
};
const DeshboardStack = createStackNavigator({
  Deshboard: {
    screen: Deshboard,
    navigationOptions: ({navigation}) => ({
      title: 'DeshBoard',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      ...defaultOptions,
    }),
  },
});

const MyDrawerNavigator = createDrawerNavigator(
  {
    Deshboard: DeshboardStack,
  },
  {
    //For the Custom sidebar menu we have to provide our CustomSidebarMenu
    contentComponent: CustomSidebarMenu,
    //Sidebar width
    drawerWidth: Dimensions.get('window').width - 50,
  },
);

const AuthStack = createStackNavigator(
  {
    Login: Login,
    Signup: Signup,
      Deshboard: Deshboard,
    Forgot: Forgot,
    VarifiyEmail: VarifiyEmail,
    ResetPassword: ResetPassword,
    VarifyOtp: VarifyOtp,
  },
  {
    initialRouteName: 'Login',
  },
);

const Main = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);


export default Main;
