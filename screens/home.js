import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, StatusBar, FlatList, ScrollView, Image, TouchableWithoutFeedback } from 'react-native';
import { Header, Left, Right, Icon,Container } from 'native-base';
import { withNavigation } from 'react-navigation';

import Detail from '../screens/detail';
import imgSrc from '../assets/images/1.jpg';
import indiaFlgSrc from '../assets/images/india.png';
import likeSrc from '../assets/images/like.png';
import starSrc from '../assets/images/star.png';
import planeSrc from '../assets/images/plane.jpeg';
import rcbLogoSrc from '../assets/images/rcblogo.png';


let productData = null;

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }
  componentDidMount() {
    return fetch('http://184.175.91.11/rcb_mobile/api/product/gethomepageproducts/1')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function () {

        });

      })
      .catch((error) => {
        console.error(error);
      });
  }

  onPressLearnMore = () => {
    //this.props.navigation.navigate('Settings');
    this.props.navigation.navigate('Detail');
  }
  onPressFavIcon = () => {
    alert("Pressed the Favorite icon...");
  }
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon name="ios-home" style={{ fontSize: 32, color: tintColor }} />
    )
  };
  render() {
    return (
      <View style={{ flex: 1, marginTop: 17.5 }}>
        {/* < Detail /> */}
        <View style={{ marginTop: 5, marginBottom: 5, flexDirection: 'row', alignItems: 'center' }} >
          {/* <Text style={{paddingRight:10,paddingLeft:10}} ><Icon name="ios-menu" size={40} color="#000" /></Text>  */}
          <Icon name="ios-menu" size={40} style={{ marginTop: 8.5, paddingLeft: 15, paddingRight: 10,color:'#F48120'}}
            onPress={() => this.props.navigation.openDrawer()} />
          <Image source={rcbLogoSrc} />
        </View>
        <View style={{ flex: 1, paddingLeft: 5, paddingRight: 5, flexDirection: 'row', marginTop: 0, backgroundColor: '#eee', }} >
          <FlatList
            data={this.state.dataSource}
            renderItem={({ item }) =>
              <TouchableWithoutFeedback onPress={this.onPressLearnMore} >
                <View style={styles.cardItem} shadowColor="#eee" shadowOffset={{ width: 2, height: 10 }} >
                  <View style={{ width: '35%', paddingTop: 0, paddingBottom: 5, paddingRight: 5, height: 150 }}>
                    {/* <Image resizeMode="contain"  style={styles.productImgStyle} source={planeSrc} /> */}
                    <Image resizeMode="contain" style={styles.productImgStyle}
                      source={{ uri: `data:image/png;base64,${item.PictureBinary}` }}
                    />
                  </View>
                  <View style={{ width: '65%', height: 150 }}>
                    <Text style={{ color: '#595959', fontSize: 16, fontWeight: 'bold', paddingBottom: 7.5 }} >{item.Name} </Text>
                    <Text style={{ color: '#7e7e7e', fontSize: 16, fontWeight: 'bold', paddingBottom: 7.5 }} >SKU : {(item.SKU == null) ? item.upc : item.SKU} </Text>
                    <Text style={{ color: '#7e7e7e', fontSize: 16, fontWeight: 'bold', paddingBottom: 7.5 }} >STOCK : 5 </Text>
                    <View style={{ flex: 1, flexDirection: 'row', paddingBottom: 7.5 }}>
                      <Image style={styles.starImgStyle} source={starSrc} />
                      <Image style={styles.starImgStyle} source={starSrc} />
                      <Image style={styles.starImgStyle} source={starSrc} />
                      <Image style={styles.starImgStyle} source={starSrc} />
                      <Image style={styles.starImgStyle} source={starSrc} />
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between' }}>
                      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <Image style={styles.flagImgStyle} source={indiaFlgSrc} />
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: "#595959" }} >Rs. {item.pricelist}.00 </Text>
                      </View>
                      <TouchableWithoutFeedback onPress={this.onPressFavIcon} >
                        {/* <Image style={styles.likeImgStyle} source={likeSrc} /> */}
                        <Icon type="FontAwesome" name="heart-o" style={{fontSize:8,color:'#595959'}} />
                      </TouchableWithoutFeedback>
                    </View>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            }
            keyExtractor={({ id }, index) => id}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    width: "100%",
    flex: 1,
    margin: 5,
    padding: 5,
    backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'center',
    color: '#ffffff'
  },
  header: {
    fontSize: 18,
    height: 44,
    padding: 10
  },
  listItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    width: '100%',
    backgroundColor: 'skyblue',
    marginBottom: 5
  },
  labelItem: {
    width: '100%',
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },

  item: {
    backgroundColor: '#eee',
    padding: 10,
    fontSize: 18,
    height: 100,
    padding: 10,
    width: '65%'
  },
  cardItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    // marginBottom:0,
    margin: 3,
    padding: 7.5,
    borderRadius: 0,
    // borderWidth: 1,
    borderWidth: 0,
    borderColor: '#84868A',
  },
  imgStyle: {
    width: '35%',
    height: 100
  },
  likeImgStyle: {
    width: 24,
    height: 24
  },
  flagImgStyle: {
    width: 32,
    height: 20,
    marginRight: 5
  },
  starImgStyle: {
    width: 16,
    height: 16,
    marginRight: 5
  },
  productImgStyle: {
    height: 150,
    width: '100%'
  }
});