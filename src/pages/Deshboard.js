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
import {getFeaturedProduct, getLatestProduct} from '../actions';
import Icon from 'react-native-vector-icons/Ionicons';
import HorizontalScroll from '../components/small/HorizontalScroll';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

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
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.top}>
            {logo ? (
              <View
                style={styles.headerBar}>
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
                  onPress={() => this.props.navigation.toggleDrawer()}
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
                  style={styles.searchInput}
                />
                <NIcon name="ios-search" style={styles.searchIcons} />
              </Item>
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{marginVertical: 20}}>
                {/*<PostHead heading="Discount Coupon Codes" />*/}
                <HorizontalScroll>
                  <Image
                    style={styles.bannerDesign}
                    source={require('../asset/permotions/permotion1.jpg')}
                  />
                  <Image
                    style={styles.bannerDesign}
                    source={require('../asset/permotions/permotion2.jpg')}
                  />
                  <Image
                    style={styles.bannerDesign}
                    source={require('../asset/permotions/permotion3.jpg')}
                  />
                </HorizontalScroll>
              </View>
              <View style={{marginBottom: 20}}>
                <Text style={styles.featureLabel}>categories</Text>
                <HorizontalScroll>
                  <Image
                    style={styles.categoryDesign}
                    source={require('../asset/permotions/permotion1.jpg')}
                  />
                  <Image
                    style={styles.categoryDesign}
                    source={require('../asset/permotions/permotion2.jpg')}
                  />
                  <Image
                    style={styles.categoryDesign}
                    source={require('../asset/permotions/permotion3.jpg')}
                  />
                  <Image
                    style={styles.categoryDesign}
                    source={require('../asset/permotions/permotion2.jpg')}
                  />
                  <Image
                    style={styles.categoryDesign}
                    source={require('../asset/permotions/permotion3.jpg')}
                  />
                </HorizontalScroll>
              </View>
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
    flex: 6,
    backgroundColor: '#f8f8ff',
    width: '100%',
    paddingHorizontal: 15,
  },
  featureLabel: {
    color: '#e30613',
    fontSize: 20,
    marginVertical: 10,
  },
  bannerDesign: {
    flex: 1,
    marginRight: wp(5),
    height: hp(30),
    resizeMode: 'cover',
    width: wp(70),
  },
  categoryDesign: {
    flex: 1,
    borderRadius: 5,
    borderWidth: 1,
    marginRight: wp(3),
    height: hp(15),
    resizeMode: 'cover',
    width: wp(25),
  },
  headerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
});
