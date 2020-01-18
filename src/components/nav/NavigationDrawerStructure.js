import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
class NavigationDrawerStructure extends Component {
  constructor(props) {
    super(props);
  }
  toggleDrawer = () => {
    //Props to open/close the drawer
    //console.log('working');
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={ () => this.toggleDrawer()} >
          {/*Donute Button Image */}
          <Icon style={styles.menuHome} name="ios-menu" />
        </TouchableOpacity>
      </View>
    );
  }
}
export default NavigationDrawerStructure;

const styles = StyleSheet.create({
  menuHome: {
    fontSize: 30,
    color: '#fff',
    marginLeft: 15,
  },
});
