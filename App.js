import React, {Component} from "react";
import {TouchableWithoutFeedback} from 'react-native';
import { StyleSheet,View,SafeAreaView,ScrollView } from "react-native";
import {createDrawerNavigator,createAppContainer,DrawerItems  } from 'react-navigation';
import {Icon,Text,Button,StatusBar} from 'native-base'; 

import Home from './screens/home';
import Orders from './screens/orders';
import Account from './screens/account';
import StoreLocation from './screens/storeLocation';
import ShippingReturn from './screens/shippingReturn';
import ChangePassword from './screens/changePassword';
import Settings from './screens/settings';
import ContactUs from './screens/contactUs';
import Detail from './screens/detail';

pubEvent=()=>{
  //alert("Hi Pub");
}

const customDrawerComponents=(props)=>(
  <SafeAreaView style={{flex:1}}>
  <View style={{height:160,backgroundColor:'#F48120'}}>  
    <Icon ios='md-contact' android="md-contact" style={{fontSize: 82, color: '#fff',paddingLeft:27,paddingTop:15}}/>
    <View style={{flexDirection:"row",flex:1,justifyContent:"space-around",alignItems:"center"}}>
    <Button iconLeft transparent onPress={this.pubEvent} >
            <Icon name='ios-log-in' style={{color:"#fff"}} />
            <Text style={{color:"#fff"}}>Login</Text>
          </Button>
          <Button iconLeft transparent onPress={this.pubEvent} >
            <Icon type="FontAwesome" name='file-text-o' style={{color:"#fff"}} />
            <Text style={{color:"#fff"}}>Register</Text>
          </Button>
    </View>
  </View>
    <ScrollView style={{flex:1,backgroundColor:'#fff'}} >
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
)

const AppDrawnavigation = createDrawerNavigator({
  Home:Home,
  //Home:Detail,
  "My Orders":Orders,
  "My Account":Account,
  "Store Location":StoreLocation,
  "Shipping & Return Policy":ShippingReturn,
  "Change Password":ChangePassword,
  "Settings":Settings,
  "Contact Us":ContactUs,
},
  {
    contentComponent:customDrawerComponents,
    contentOptions:{
      activeTintColor:'#F48120',
      labelStyle  :{
        fontSize:16,
        
      },
      // itemStyle: {
      //   borderBottomWidth:1,
      //   borderBottomColor:'#404040',
      // },
    }
  }
);

const AppContainer=createAppContainer(AppDrawnavigation);
export default class App extends Component {
  render() {
    return (
      // <Container>
      //   <ExpandableList />
      //   <Home />
      // </Container>
      <AppContainer />
    );
  }
}