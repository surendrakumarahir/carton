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
  SafeAreaView,
} from 'react-native';
import {connect} from 'react-redux';
import {Container, Icon as NIcon, Input, Item} from 'native-base';
import ProductGrid from '../components/small/ProductGrid';
import {
  getFeaturedProduct,
  getLatestProduct,
  getCategoryList,
} from '../actions';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CategoryBlock from '../components/deshboard/CategoryBlock';
import BannerSlider from '../components/deshboard/BannerSlider';

class Deshboard extends React.Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    logo: true,
    searchClass: false,
    keywords: '',
  };
  componentDidMount() {
    this.props.getFeaturedProduct({
      app_token: 'Nj^0=)&$Xmq@3',
      page: 1,
      limit: 9,
    });
    this.props.getLatestProduct({
      app_token: 'Nj^0=)&$Xmq@3',
      page: 1,
      limit: 9,
    });
    this.props.getCategoryList({
      app_token: 'Nj^0=)&$Xmq@3',
      page: 1,
      limit: 9,
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
  onTextChange = value => {
    this.setState({keywords: value});
  };
  render() {
    const {logo, searchClass} = this.state;
    const {featured_product, latest_product, categoryList} = this.props;
    console.log(categoryList);
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.top}>
            {logo ? (
              <View style={styles.headerBar}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.toggleDrawer()}
                  style={{marginTop: 10}}>
                  <Icon name="ios-menu" color="#838383" size={40} />
                </TouchableOpacity>
                <Image
                  style={styles.logo}
                  source={require('../asset/logo.png')}
                />

                <TouchableOpacity
                  onPress={() => console.log('working')}
                  style={{marginTop: 10}}>
                  <Icon name="ios-notifications" color="#838383" size={40} />
                </TouchableOpacity>
              </View>
            ) : null}
            <View
              style={{
                width: 350,
                alignSelf: 'center',
                marginTop: searchClass ? 30 : 0,
              }}>
              <Item searchBar rounded>
                <Input
                  onBlur={() => this.onBlur()}
                  onFocus={() => this.onFocus()}
                  placeholder="Search Product"
                  value={this.state.keywords}
                  style={styles.searchInput}
                  onChangeText={text => this.onTextChange(text)}
                />
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('Search', {
                        keywords: this.state.keywords,
                    })
                  }>
                  <NIcon name="ios-search" style={styles.searchIcons} />
                </TouchableOpacity>
              </Item>
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <BannerSlider />
              <CategoryBlock
                navigation={this.props.navigation}
                categoryList={categoryList}
              />

              <ProductGrid
                title="Feature Product"
                data={featured_product}
                imagePath="http://carton.imperialitforweb.com/public/uploads/product"
              />

              <ProductGrid
                title="Latest Product"
                data={latest_product}
                imagePath="http://carton.imperialitforweb.com/public/uploads/product"
              />
            </ScrollView>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const mapStateToProps = ({deshboard}) => {
  const {featured_product, latest_product, categoryList} = deshboard;
  return {
    featured_product,
    latest_product,
    categoryList,
  };
};
export default connect(
  mapStateToProps,
  {getFeaturedProduct, getLatestProduct, getCategoryList},
)(Deshboard);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  top: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderBottomColor: '#e7e5f0',
    borderBottomWidth: 1,
    width: wp(100),
    paddingHorizontal: 10,
    //alignItems: 'center',
  },
  logo: {
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
    flex: 4,
    backgroundColor: '#f8f8ff',
    width: '100%',
    paddingHorizontal: 15,
  },
  headerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
});
