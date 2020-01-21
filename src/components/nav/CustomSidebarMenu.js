import React, {Component} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
// import {connect} from 'react-redux';
// import {removeUserData} from '../../actions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class CustomSidebarMenu extends Component {
  constructor() {
    super();
    //Setting up the Main Top Large Image of the Custom Sidebar
    this.proileImage =
      'https://aboutreact.com/wp-content/uploads/2018/07/sample_img.png';
    //Array of the sidebar navigation option with icon and screen to navigate
    //This screens can be any screen defined in Drawer Navigator in App.js
    //You can find the Icons from here https://material.io/tools/icons/
    this.items = [
      {
        navOptionThumb: 'home',
        navOptionName: 'Home',
        screenToNavigate: 'Deshboard',
      },
      {
        navOptionThumb: 'account',
        navOptionName: 'My Profile',
        screenToNavigate: 'Profile',
      },
      {
        navOptionThumb: 'format-list-bulleted',
        navOptionName: 'My Inquiries',
        screenToNavigate: 'Inquiry',
      },
      {
        navOptionThumb: 'content-save',
        navOptionName: 'Saved products',
        screenToNavigate: 'SavedProducts',
      },
      {
        navOptionThumb: 'account-circle',
        navOptionName: 'About Carton',
        screenToNavigate: 'About',
      },
      {
        navOptionThumb: 'file-document-outline',
        navOptionName: 'Term and Conditions',
        screenToNavigate: 'TermAndConditions',
      },
      {
        navOptionThumb: 'comment-question',
        navOptionName: 'FAQ',
        screenToNavigate: 'FAQ',
      },
      {
        navOptionThumb: 'help-circle',
        navOptionName: 'Help',
        screenToNavigate: 'Help',
      },
    ];
  }

  logout = () => {
    console.log('working');
    // console.log(this.props.userData);
    // console.log(this.props.token);
    // this.props.removeUserData({
    //   user_id: this.props.userData.id,
    //   access_token: this.props.token,
    // });
  };
  render() {
    return (
      <View style={styles.sideMenuContainer}>
        {/*Top Large Image */}
        <Image
          source={require('../../asset/logo.png')}
          style={styles.sideMenuProfileIcon}
        />
        {/*Divider between Top Image and Sidebar Option*/}
        <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: '#e2e2e2',
            marginTop: 15,
          }}
        />
        {/*Setting up Navigation Options from option array using loop*/}
        <View style={{width: '100%'}}>
          {this.items.map((item, key) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: 5,
                paddingBottom: 5,
                backgroundColor:
                  global.currentScreenIndex === key ? '#e0dbdb' : '#ffffff',
              }}
              key={key}>
              <View style={{marginRight: 10, marginLeft: 20}}>
                <Icon name={item.navOptionThumb} size={25} color="#808080" />
              </View>
              <Text
                style={{
                  fontSize: 20,
                  color:
                    global.currentScreenIndex === key ? '#FF9800' : 'black',
                }}
                onPress={() => {
                  global.currentScreenIndex = key;
                  this.props.navigation.navigate(item.screenToNavigate);
                }}>
                {item.navOptionName}
              </Text>
            </View>
          ))}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingTop: 5,
              paddingBottom: 5,
              marginLeft: 20,
            }}>
            <Icon name="logout" size={25} color="#808080" />
            <Text
              onPress={() => this.logout()}
              style={{fontSize: 25, marginLeft: 20}}>
              Logout
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
// const mapStateToProps = state => {
//   return {
//     userData: state.app.userData,
//     token: state.app.token,
//   };
// };
// export default connect(
//   mapStateToProps,
//   {removeUserData},
// )(CustomSidebarMenu);
export default CustomSidebarMenu;
const styles = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20,
  },
  sideMenuProfileIcon: {
    resizeMode: 'contain',
    width: 250,
    // marginTop: 20,
    // borderRadius: 150 / 2,
  },
});
