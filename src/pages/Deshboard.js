import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  KeyboardAvoidingView,
    TouchableOpacity,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import {Container, Icon as NIcon, Input, Item} from 'native-base';
import ProductGrid from '../components/small/ProductGrid';
import {getFeaturedProduct, getLatestProduct} from '../actions';
import Icon from 'react-native-vector-icons/Ionicons';
class Deshboard extends React.Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    logo: true,
    searchClass: false,
  };
  componentDidMount() {
    this.props.getFeaturedProduct({
      app_token: 'Nj^0=)&$Xmq@3',
    });
    this.props.getLatestProduct({
      app_token: 'Nj^0=)&$Xmq@3',
    });
  }

  onFocus = () => {
    this.setState({
      logo: false,
      searchClass: true,
    });
  };

  onBlur = () => {
    this.setState({
      logo: true,
      searchClass: false,
    });
  };
  render() {
    const {logo, searchClass} = this.state;
    const {featured_product, latest_product} = this.props;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />

        <View style={styles.top}>

          {logo ? (
            <Image style={styles.logo} source={require('../asset/logo.png')} />
          ) : null}
          <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}  style={{ position: 'absolute' , top: 10, right: "10%"}}>
            <Icon  name="ios-menu" color="#838383" size={35} />
          </TouchableOpacity>
          <View style={{width: 350, alignSelf: 'center', marginTop: searchClass ? 30 : 0}}>
            <Item searchBar rounded>
              <Input
                onBlur={() => this.onBlur()}
                onFocus={() => this.onFocus()}
                placeholder="Search Product"
                style={styles.searchInput}
              />
              <NIcon name="ios-search" style={styles.searchIcons} />
            </Item>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <ProductGrid title="Feature Product" data={featured_product} imagePath='http://carton.imperialitforweb.com/public/uploads/product' />
            <ProductGrid title="Latest Product" data={latest_product} imagePath='http://carton.imperialitforweb.com/public/uploads/product' />
          </ScrollView>
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({deshboard}) => {
  const {featured_product, latest_product} = deshboard;
  return {
    featured_product,
    latest_product,
  };
};
export default connect(
  mapStateToProps,
  {getFeaturedProduct, getLatestProduct},
)(Deshboard);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  top: {
    flex: 2,
    backgroundColor: '#ffffff',
    borderBottomColor: '#e7e5f0',
    borderBottomWidth: 1,
    width: '100%',
    //alignItems: 'center',
  },
  logo: {
    marginLeft: "10%",
    width: 250,
    height: 70,
    resizeMode: 'contain',
  },
  searchInput: {
    marginLeft: 10,
    height: 50,
  },
  searchIcons: {
    marginRight: 5,
    fontSize: 30,
  },

  bottomContainer: {
    flex: 6,
    backgroundColor: '#f8f8ff',
    width: '100%',
    paddingHorizontal: 15,
  },
});
