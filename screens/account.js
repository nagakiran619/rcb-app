import React, { Component } from "react";
import { Image ,View} from 'react-native';
import { Container, Header, Content, Accordion,Card,CardItem,Thumbnail,Text,Button,Icon,Left,Body,Right  } from "native-base";

import rcbLogoSrc from '../assets/images/rcblogo.png';

const dataArray = [
  { title: "First Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];
export default class Account extends Component {
  static navigationOptions={
    drawerIcon:({tintColor})=>(
        <Icon name="ios-person" style={{fontSize:32,color:tintColor}} /> 
    )
};
  render() {
    return (
      <Container>
        <View style={{ marginTop: 20, marginBottom: 0, flexDirection: 'row', alignItems: 'center' }} >
                <Icon name="ios-menu" size={40} color="#000" style={{ marginTop: 8.5, paddingLeft: 15, paddingRight: 10 }}
                    onPress={()=>this.props.navigation.openDrawer()}  />
                <Image source={rcbLogoSrc} />
            </View>
        <Content padder>
          <Accordion dataArray={dataArray} expanded={0}/>
        </Content>
    </Container>
    );
  }
}