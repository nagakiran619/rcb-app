import React, { Component, } from "react";
import { Image, StyleSheet } from 'react-native';
import { Text, Header, Left, Right, Button, Icon, Body, Title, Card, CardItem, Content, View, H1, Tabs, Tab } from 'native-base'

import planeSrc from '../assets/images/plane.jpeg';
import indiaFlgSrc from '../assets/images/india.png';

import Review from '../screens/review';

export default class Details extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back' style={{ color: '#F48120' }} />
                        </Button>
                    </Left>
                    <Right>
                        <Button transparent>
                            <Icon name="ios-add-circle-outline" style={{ fontSize: 28, color: '#F48120' }} />
                        </Button>
                        <Button transparent>
                            <Icon name='md-share' style={{ fontSize: 28, color: '#F48120' }} />
                        </Button>
                        <Button transparent>
                            <Icon type="FontAwesome" name="heart-o" style={{ fontSize: 24, color: '#F48120' }} />
                        </Button>
                    </Right>
                </Header>
                <Content style={{ padding: 0, margin: 0 }}>
                    <Card style={{ margin: 0 }}>
                        <CardItem>
                            <Image resizeMode="contain" source={planeSrc} style={{ height: 200, width: "100%" }} />
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text style={{ color: '#595959', fontSize: 20, fontWeight: 'bold', paddingBottom: 7.5 }} >Avionix TH-9B 9ch 2.4GHz Transmitter & Receiver</Text>
                                <Text style={{ color: '#7e7e7e', fontSize: 18, fontWeight: 'bold', paddingBottom: 7.5 }} >SKU : RZ00766 </Text>
                                <Text>
                                    <Icon type="FontAwesome" name="star" style={{ fontSize: 24, color: '#3AB54A', }} />
                                    <Icon type="FontAwesome" name="star" style={{ fontSize: 24, color: '#3AB54A', }} />
                                    <Icon type="FontAwesome" name="star" style={{ fontSize: 24, color: '#3AB54A', }} />
                                    <Icon type="FontAwesome" name="star" style={{ fontSize: 24, color: '#3AB54A', }} />
                                    <Icon type="FontAwesome" name="star" style={{ fontSize: 24, color: '#3AB54A', }} />
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem style={{ backgroundColor: '#454545' }}>
                            <Left style={{ width: "10%" }}>
                                <Button transparent>
                                    <Icon type="FontAwesome" name="truck" style={{ fontSize: 28, color: '#fff' }} />
                                </Button>
                            </Left>
                            <Body style={{ paddingTop: 12, alignItems: 'center' }} >
                                <Text style={{ color: '#fff', fontSize: 15, fontWeight: 'bold', paddingTop: 5 }} >Shipped from India</Text>
                            </Body>
                            <Right>
                                <Button transparent>
                                    <Image resizeMode="contain" source={indiaFlgSrc} style={{ height: 28, width: 36, borderRadius: 5 }} />
                                </Button>
                            </Right>
                        </CardItem>
                        <CardItem >
                            <Left style={{ width: "10%" }}>
                                <Text style={{ color: '#595959', fontSize: 16, fontWeight: 'bold', paddingTop: 5 }} >Bangalore Outlet</Text>
                            </Left>
                            <Right>
                                <Text style={{ color: '#595959', fontSize: 16, fontWeight: 'bold', paddingTop: 5 }} >0</Text>
                            </Right>
                        </CardItem>
                        <CardItem >
                            <Left style={{ width: "10%" }}>
                                <Text style={{ color: '#595959', fontSize: 16, fontWeight: 'bold', paddingTop: 5 }} >Pune Outlet</Text>
                            </Left>
                            <Right>
                                <Text style={{ color: '#595959', fontSize: 16, fontWeight: 'bold', paddingTop: 5 }} >0</Text>
                            </Right>
                        </CardItem>
                        <CardItem >
                            <Left style={{ width: "10%" }}>
                                <Text style={{ color: '#595959', fontSize: 16, fontWeight: 'bold', paddingTop: 5 }} >Mumbai Outlet</Text>
                            </Left>
                            <Right>
                                <Text style={{ color: '#595959', fontSize: 16, fontWeight: 'bold', paddingTop: 5 }} >0</Text>
                            </Right>
                        </CardItem>
                        <CardItem style={{ borderTopColor: '#dcdcdc', borderTopWidth: 1 }} >
                            <Left style={{ width: "10%" }}>
                                <Text style={{ color: '#595959', fontSize: 20, fontWeight: 'bold', paddingTop: 5 }} >Rs. 8,500.00</Text>
                            </Left>
                            <Right>
                                <Button iconLeft warning  >
                                    <Icon type="FontAwesome" name='cart-plus' />
                                    <Text style={{ fontWeight: 'bold' }}>ADD T0 CART</Text>
                                </Button>
                            </Right>
                        </CardItem>
                    </Card>

                    <Tabs>
                        <Tab heading="Description">
                            <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 16, padding: 10 }} >
                                Please note this 2.4 Ghz transmitter and receiver has been approved by the WPC authorities of India IMPORTANT NOTICE: PLS NOTE THAT AS PER THE LEGAL REQUIREMENTS OF WPC (WIRELESS PLANNING COMISSION) OF INDIA WE WILL REQUIRE A COPY OF THE BUYERS / PAYER'S IDENTIFICATION OF THIS TRANSMITTER/S.
            </Text>
                            <Text style={styles.desc}>Identifications would be a typical driving licence, passport copy, PAN card, rations card, voters id etc...  without this we will not be able to proces your order or sell the radios even after payments, you can email a scanned copy of your identifiction to helpdesk@rcbazaar.com. In an event of purchase and not submittnace of the identifiction the payment will be returned to the buyer deducting the bank charges if paid by credit card or debit card or by online transfer throught our CCAvenue gateway</Text>
                            <Card style={{ margin: 0 }}>
                                <CardItem header style={styles.descListItemsHeader}><Text style={{ color: '#fff' }}>Specifications : THIS TRANSMITTER IS MODE 2</Text></CardItem>
                                <CardItem ><Text style={styles.descListItems}>Mode-2 Left handside throttle controller</Text></CardItem>
                                <CardItem ><Text style={styles.descListItems}>Specifications : THIS TRANSMITTER IS MODE 2</Text></CardItem>
                                <CardItem ><Text style={styles.descListItems}>Mode-2 Left handside throttle controller </Text></CardItem>
                                <CardItem ><Text style={styles.descListItems}>Full range 2.4GHz 6-channel radio </Text></CardItem>
                                <CardItem ><Text style={styles.descListItems}>4-Model Memory </Text></CardItem>
                                <CardItem ><Text style={styles.descListItems}>4 Type (Airplane, Heli90, Heli120, Heli140) </Text></CardItem>
                                <CardItem ><Text style={styles.descListItems}>4 Models Select </Text></CardItem>
                                <CardItem ><Text style={styles.descListItems}>Integrated timer </Text></CardItem>
                                <CardItem ><Text style={styles.descListItems}>Contrast Adjustment </Text></CardItem>
                                <CardItem ><Text style={styles.descListItems}>Throttle cut </Text></CardItem>
                                <CardItem ><Text style={styles.descListItems}>Computer Programmable </Text></CardItem>
                                <CardItem ><Text style={styles.descListItems}>USB Socket </Text></CardItem>
                                <CardItem ><Text style={styles.descListItems}>Programmed by PC with included software. </Text></CardItem>

                                <CardItem ><Text style={styles.descListItems}>Transmitter / Receiver: 2.4GHz </Text></CardItem>
                                <CardItem ><Text style={styles.descListItems}>Mode Type : Airplane, Helicopter, Glider </Text></CardItem>
                                <CardItem ><Text style={styles.descListItems}>Stick Mode  : Left Hand or Right Hand </Text></CardItem>
                                <CardItem ><Text style={styles.descListItems}>Modulation  : Frequency Modulation </Text></CardItem>
                                <CardItem ><Text style={styles.descListItems}>Code Type  :PPM/GFSK </Text></CardItem>
                                <CardItem ><Text style={styles.descListItems}>Power  :12 VDC </Text></CardItem>
                                <CardItem ><Text style={styles.descListItems}>RF Power :Less Than 0.8w </Text></CardItem>
                                <CardItem ><Text style={styles.descListItems}>Net Weight  :575g </Text></CardItem>
                                <CardItem ><Text style={styles.descListItems}>Packing Weight :968g </Text></CardItem>

                                <CardItem header style={styles.descListItemsHeader}><Text style={{ color: '#fff' }}>Package Content </Text></CardItem>
                                <CardItem ><Text style={styles.descListItems}>1 x 6 Channel 2.4G Transmitter </Text></CardItem>
                                <CardItem ><Text style={styles.descListItems}>1 x 6 Channel 2.4G Receiver </Text></CardItem>
                                <CardItem ><Text style={styles.descListItems}>1 x USB Interface </Text></CardItem>
                                <CardItem ><Text style={styles.descListItems}>1 x CD-rom</Text></CardItem>
                                <CardItem ><Text>DOES NOT INCLUDE POWER ADAPTER</Text></CardItem>
                            </Card>
                        </Tab>
                        <Tab heading="Reviews" style={{ padding: 10 }}>
                            <Review />
                            <Review />
                            <Review />
                            <Review />
                            <Review />
                            <Review />
                            <Review />
                            <Review />
                            <Review />
                            <Review />
                            <Review />
                            <Review />
                        </Tab>
                    </Tabs>
                </Content>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    descNote: { color: '#595959', fontSize: 18, fontWeight: 'bold', padding: 10 },
    desc: { color: '#595959', fontSize: 16, fontWeight: 'bold', padding: 15, },
    descListItems: { color: '#595959', fontSize: 14, fontWeight: 'bold', },
    descListItemsHeader: { backgroundColor: '#595959' }
});