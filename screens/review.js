import React, { Component, } from "react";
import { Image, StyleSheet } from 'react-native';
import { Text, Header, Left, Right, Button, Icon, Body, Title, Card, CardItem, Content, View, H1, Tabs, Tab } from 'native-base'

import planeSrc from '../assets/images/plane.jpeg';
import indiaFlgSrc from '../assets/images/india.png';

export default class Review extends Component {
    render() {
        return (
            <Card >
                            <CardItem >
                                <Left>
                                    <Text style={{ color: '#595959', fontSize: 16, fontWeight: 'bold', paddingTop: 5 }} >Battery & Power Adapter for FS-CT6B...</Text>
                                </Left>
                                <Right>
                                    <Text>
                                        <Icon type="FontAwesome" name="star" style={{ fontSize: 24, color: '#3AB54A', }} />
                                        <Icon type="FontAwesome" name="star" style={{ fontSize: 24, color: '#3AB54A', }} />
                                        <Icon type="FontAwesome" name="star" style={{ fontSize: 24, color: '#3AB54A', }} />
                                        <Icon type="FontAwesome" name="star" style={{ fontSize: 24, color: '#3AB54A', }} />
                                        <Icon type="FontAwesome" name="star" style={{ fontSize: 24, color: '#3AB54A', }} />
                                    </Text>
                                </Right>
                            </CardItem>
                            <CardItem >
                                <Left>
                                    <Text style={{ color: '#595959', fontSize: 12, fontWeight: 'bold', paddingTop: 5 }} >
                                        it is really an exellent product,
                                        has a very long range distance
                                        and is really affordable.hope every one buy it</Text>
                                </Left>
                            </CardItem>
                            <CardItem >
                                <Left>
                                    <Text style={{ color: '#595959', fontSize: 12, fontWeight: 'bold', paddingTop: 5 }} >
                                    From: RAHUL MUDLIAR | Created on: 3/5/2013 12:35 PM</Text>
                                </Left>
                            </CardItem>
                            <CardItem >
                                <Left>
                            <Button iconLeft warning  >
                                    <Text style={{ fontWeight: 'bold' }}>Helpfull</Text>
                                </Button>
                                </Left>
                            </CardItem>
                            </Card>
        )
    }
}
