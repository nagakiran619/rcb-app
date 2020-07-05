import React, { Component } from "react";
import { Image, View } from 'react-native';
import { Container, Header, Content, Accordion, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from "native-base";

import rcbLogoSrc from '../assets/images/rcblogo.png';

export default class ViewHeader extends Component{
    constructor(props){
        super(props);
    }
    static navigationOptions={
        drawerIcon:({tintColor})=>(
            <Icon name="folder-open" style={{fontSize:32,color:tintColor}} /> 
        )
    };
    render(){
        return (
            <View style={{ marginTop: 20, marginBottom: 0, flexDirection: 'row', alignItems: 'center' }} >
                <Icon name="ios-menu" size={40} color="#000" style={{ marginTop: 8.5, paddingLeft: 15, paddingRight: 10 }}
                    onPress={this.props.onPressMenu} />
                <Image source={rcbLogoSrc} />
            </View>
        );
    }
}

