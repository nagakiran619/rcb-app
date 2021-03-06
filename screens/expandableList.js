import React, { Component } from "react";
import { Image,View } from 'react-native';
import { Container, Header, Content, Accordion,Card,CardItem,Thumbnail,Text,Button,Icon,Left,Body,Right  } from "native-base";
const dataArray = [
  { title: "First Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];
export default class ExpandableList extends Component {
  static navigationOptions={
    drawerIcon:({tintColor})=>(
        <Icon name="home" style={{fontSize:32,color:tintColor}} /> 
    )
};
  render() {
    return (
      <Container>
        <View style={{marginTop:5,marginBottom:5,flexDirection:'row',alignItems:'center'}} >
          {/* <Text style={{paddingRight:10,paddingLeft:10}} ><Icon name="ios-menu" size={40} color="#000" /></Text>  */}
          <Icon name="ios-menu" size={40} color="#000" style={{marginTop:8.5,paddingLeft:15,paddingRight:10}}
            onPress={()=>this.props.navigation.openDrawer()} /> 
          <Image source={rcbLogoSrc} />
        </View>
        <Header />
        <Content padder>
          <Accordion dataArray={dataArray} expanded={0}/>
        </Content>
      <Header />
    </Container>
    );
  }
}