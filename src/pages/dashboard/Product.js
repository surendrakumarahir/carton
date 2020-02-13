import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import ImageSlider from '../../components/media/ImageSlider';
import ImageZoomer from '../../components/media/ImageZoomer';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  import {Button, Text as TextNB} from 'native-base';
const data = {
        id: 1,
    name: 'Carton Box',
    price: 100,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the  when an unknown  printer took a galley",
    thumbImage: 'https://images-na.ssl-images-amazon.com/images/I/81NY2aR1NrL._SX385_.jpg',
    gallery: [
        "https://colorlib.com/wp/wp-content/uploads/sites/2/open-cardboard-box-mockup.jpg", 
"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRRHhZoqvAT50JyIrb1WLzeUi4H91lM7QlDPxlCegkyf4hoSslO",
"https://cdn2.vectorstock.com/i/1000x1000/64/16/open-packaging-box-brown-color-isolated-vector-21486416.jpg"
]
    }

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          index: 0,
          modalVisible: false,
        };
      }

    onClickImage = index => {
        this.setState({
          modalVisible: true,
          index,
        });
      };
      onRequestClose = () => {
        this.setState({
          modalVisible: false,
        });
      };
    render() {
        const {body, container} = styles;
        const imageSlider = data.gallery.map(item => {
            return item;
          });
          const imageZoomer = data.gallery.map(item => {
            return {url: item, freeHeight: true};
          });
        return (
            <ScrollView style={styles.container}>
               
                {data.gallery.length > 0 ? (
                    <>
                        <ImageSlider data={imageSlider} onClickImage={this.onClickImage} />
                        <ImageZoomer
                        onRequestClose={this.onRequestClose}
                        indexValue={this.state.index}
                        modalVisible={this.state.modalVisible}
                        images={imageZoomer}
                        />
                    </>
                    ) : null}
                     <View style={body}>
                    <Text style={styles.heading}>{data.name}</Text>
                    <Text style={styles.heading}>Price: ${data.price}</Text>
                    <Text style={styles.heading}>Description</Text>
                    <Text>{data.description}</Text>
                    <Text style={styles.heading}>Company Details</Text>
                    <Text>{data.description}</Text>

          {/* <TableView data={management_data} /> */}
          <Text style={[styles.heading, {marginBottom: 10}]}>Quick Details</Text>
              <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', borderWidth:1,
            borderColor: '#ccc', padding: 10,  borderBottomWidth: 0}}>
                  <View style={{borderRightColor:1, borderColor: "#ccc"}}>
                      <Text style={{fontSize: 15}}>Industrial Use:</Text>
                 </View>
                 <View>
                      <Text style={{fontSize: 15}} >gift packaging</Text>
                 </View>
              </View>

              <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', borderWidth:1,
            borderColor: '#ccc', padding: 10,  borderBottomWidth: 0}}>
                  <View style={{borderRightColor:1, borderColor: "#ccc"}}>
                      <Text style={{fontSize: 15}}>Place of Origin:</Text>
                 </View>
                 <View>
                      <Text style={{fontSize: 15}} >Guangdong, China</Text>
                 </View>
              </View>

              <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', borderWidth:1,
            borderColor: '#ccc', padding: 10,  borderBottomWidth: 0}}>
                  <View style={{borderRightColor:1, borderColor: "#ccc"}}>
                      <Text style={{fontSize: 15}}>Model Number:</Text>
                 </View>
                 <View>
                      <Text style={{fontSize: 15}} >ZTP-RD1</Text>
                 </View>
              </View>

              <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', borderWidth:1,
            borderColor: '#ccc', padding: 10,  borderBottomWidth: 0}}>
                  <View style={{borderRightColor:1, borderColor: "#ccc"}}>
                      <Text style={{fontSize: 15}}>Printing Handling:</Text>
                 </View>
                 <View>
                      <Text style={{fontSize: 15}} >Offset printing</Text>
                 </View>
              </View>

              <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', borderWidth:1,
            borderColor: '#ccc', padding: 10}}>
                  <View style={{borderRightColor:1, borderColor: "#ccc"}}>
                      <Text style={{fontSize: 15}}>Feature:</Text>
                 </View>
                 <View>
                      <Text style={{fontSize: 15}} >
Recycled Materials</Text>
                 </View>
              </View>
        
          <Button
            style={{
              marginVertical: 30,
              height: 60,
              alignSelf: 'center',
              width: 300,
              justifyContent: 'center',
              backgroundColor: 'orange',
            }}>
            <TextNB
              style={{textAlign: 'center', fontSize: 20}}
              onPress={() => this.props.navigation.navigate('Dashbaord')}>
              Buy
            </TextNB>
          </Button>
        </View>
            </ScrollView>
        );
    }
}

export default Product;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    body: {
      flex: 1,
      marginHorizontal: wp(5),
    },
    heading: {
      fontSize: 20,
      marginTop: 15,
    },
    certificates: {
      width: 40,
      height: 40,
      marginRight: 5,
      marginTop: 10,
    },
    cardThumbImage: {
      width: wp(15),
      height: wp(15),
      resizeMode: 'contain',
    },
  });

