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
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

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

const MainTabs = createBottomTabNavigator(
  {
    Deshboard: {
      screen: MyDrawerNavigator,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-home" color={tintColor} size={35} />
        ),
      },
    },
    Search: {
      screen: Deshboard,
      navigationOptions: {
        tabBarLabel: 'Search',
        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-menu" color={tintColor} size={35} />
        ),
      },
    },
    Account: {
      screen: Deshboard,
      navigationOptions: {
        tabBarLabel: 'Account',
        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-person" color={tintColor} size={35} />
        ),
      },
    },
    Setting: {
      screen: Deshboard,
      navigationOptions: {
        tabBarLabel: 'Setting',
        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-settings" color={tintColor} size={35} />
        ),
      },
    },
  },
  {
    navigationOptions: {
      headerShown: false,
    },
    initialRouteName: 'Deshboard',
    inactiveColor: '#838383',
    tabBarOptions: {
      activeTintColor: '#e2020e',
      showLabel: false,
      style: {
        backgroundColor: '#e8e8e8',
        height: 70,
        paddingTop: 10,
        paddingBottom: 10,
      },
    },
  },
);

const SettingsStack = createStackNavigator({
  SettingsList: {
    screen: Login,
    navigationOptions: {
      headerTitle: 'Settings List',
    },
  },
  Profile: {
    screen: Signup,
    navigationOptions: {
      headerTitle: 'Profile',
    },
  },
});

const MainDrawer = createDrawerNavigator({
  MainTabs: MainTabs,
  Settings: SettingsStack,
},{
    navigationOptions: {
      headerShown: false,
    }
});

const AuthStack = createStackNavigator(
  {
    Login: Login,
    Signup: Signup,
    Deshboard: MainDrawer,
    Forgot: Forgot,
    VarifiyEmail: VarifiyEmail,
    ResetPassword: ResetPassword,
    VarifyOtp: VarifyOtp,
  },
  {
    initialRouteName: 'Deshboard',
  },
);

const Main = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      Auth: AuthStack,
      App: Deshboard,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);

export default Main;
