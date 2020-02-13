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
import {
  Search,
  About,
  Inquiry,
  Language,
  SavedProduct,
  Setting,
  TermAndCondition,
  Notification,
  Category,
} from './pages/dashboard';
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
const DeshboardStack = createStackNavigator(
  {
    Deshboard: {
      screen: Deshboard,
      navigationOptions: ({navigation}) => ({
        title: 'DeshBoard',
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        ...defaultOptions,
      }),
    },
    Search: {
      screen: Search,
      navigationOptions: ({navigation}) => ({
        title: 'Search',
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        ...defaultOptions,
      }),
    },
    About: {
      screen: About,
      navigationOptions: ({navigation}) => ({
        title: 'About',
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        ...defaultOptions,
      }),
    },
    Inquiry: {
      screen: Inquiry,
      navigationOptions: ({navigation}) => ({
        title: 'Inquiry',
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        ...defaultOptions,
      }),
    },
    Language: {
      screen: Language,
      navigationOptions: ({navigation}) => ({
        title: 'Language',
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        ...defaultOptions,
      }),
    },
    SavedProduct: {
      screen: SavedProduct,
      navigationOptions: ({navigation}) => ({
        title: 'SavedProduct',
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        ...defaultOptions,
      }),
    },
    TermAndCondition: {
      screen: TermAndCondition,
      navigationOptions: ({navigation}) => ({
        title: 'Term And Conditions',
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        ...defaultOptions,
      }),
    },
    Notification: {
      screen: Notification,
      navigationOptions: ({navigation}) => ({
        title: 'Notification',
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        ...defaultOptions,
      }),
    },
    Setting: {
      screen: Setting,
      navigationOptions: ({navigation}) => ({
        title: 'Setting',
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        ...defaultOptions,
      }),
    },
    Category: {
      screen: Category,
      navigationOptions: ({navigation}) => ({
        title: 'Categories',
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        ...defaultOptions,
      }),
    },
  },
  {
   // initialRouteName: 'Search',
  },
);

const DrawerNavigator = createDrawerNavigator(
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

// const MainTabs = createBottomTabNavigator(
//   {
//     Deshboard: {
//       screen: MyDrawerNavigator,
//       navigationOptions: {
//         tabBarLabel: 'Home',
//         tabBarIcon: ({tintColor}) => (
//           <Icon name="ios-home" color={tintColor} size={35} />
//         ),
//       },
//     },
//     Search: {
//       screen: Deshboard,
//       navigationOptions: {
//         tabBarLabel: 'Search',
//         tabBarIcon: ({tintColor}) => (
//           <Icon name="ios-menu" color={tintColor} size={35} />
//         ),
//       },
//     },
//     Account: {
//       screen: Deshboard,
//       navigationOptions: {
//         tabBarLabel: 'Account',
//         tabBarIcon: ({tintColor}) => (
//           <Icon name="ios-person" color={tintColor} size={35} />
//         ),
//       },
//     },
//     Setting: {
//       screen: Deshboard,
//       navigationOptions: {
//         tabBarLabel: 'Setting',
//         tabBarIcon: ({tintColor}) => (
//           <Icon name="ios-settings" color={tintColor} size={35} />
//         ),
//       },
//     },
//   },
//   {
//     navigationOptions: {
//       headerShown: false,
//     },
//     initialRouteName: 'Deshboard',
//     inactiveColor: '#838383',
//     tabBarOptions: {
//       activeTintColor: '#e2020e',
//       showLabel: false,
//       style: {
//         backgroundColor: '#e8e8e8',
//         height: 70,
//         paddingTop: 10,
//         paddingBottom: 10,
//       },
//     },
//   },
// );

// const SettingsStack = createStackNavigator({
//   SettingsList: {
//     screen: Login,
//     navigationOptions: {
//       headerTitle: 'Settings List',
//     },
//   },
//   Profile: {
//     screen: Signup,
//     navigationOptions: {
//       headerTitle: 'Profile',
//     },
//   },
// });

// const MainDrawer = createDrawerNavigator(
//   {
//     MainTabs: MainTabs,
//     Settings: SettingsStack,
//   },
//   {
//     navigationOptions: {
//       headerShown: false,
//     },
//     contentComponent: CustomSidebarMenu,
//     //Sidebar width
//     drawerWidth: Dimensions.get('window').width - 50,
//   },
// );

const AuthStack = createStackNavigator(
  {
    Login: Login,
    Signup: Signup,
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
      App: DrawerNavigator,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);

export default Main;
