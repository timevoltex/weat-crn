import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import {
  Container,
  Content,
  Tabs,
  Tab,
  TabHeading,
  Icon,
  Card,
  CardItem,
  Left,
  Body,
  Right,
} from "native-base";
import { SearchTab } from "../Home/Hometab";
import Menu from "../../assets/svgicon/Menu_01.js";
import Heart from "../../assets/svgicon/Heart_01.js";
import FeedIcon from "../../assets/svgicon/Feed_01";
import Bookmark from "../../assets/svgicon/Bookmark_01.js";


export default function Feed() {
  const [active, setActive] = useState(0);
  return (
    <Container>
      <SearchTab />
      <Tabs onChangeTab={({i}:{i:any}) => setActive(i)} locked={true} tabBarUnderlineStyle={{backgroundColor:"#9948fc"}}>
        <Tab tabStyle={{backgroundColor:'transparent'}}
          heading={
            <TabHeading style={{backgroundColor:"#efefef"}}>
              <Menu fill={active === 0 ? "#9948fc" : "#c2c2c2"} />
            </TabHeading>
          }
        >
          <InstaTab />
        </Tab>
        <Tab
          heading={
            <TabHeading style={{backgroundColor:'#efefef'}}>
              <Icon name="md-apps" style={active === 1 ? {color:'#9948fc'} : {color:'#c2c2c2'}}/>
            </TabHeading>
          }
        >
          <PhotoTab />
        </Tab>
      </Tabs>
    </Container>
  );
}

const { width: viewportWidth} = Dimensions.get("window");
function InstaTab() {
  return (
    <Container>
      <Content>
        <Card>
          <CardItem>
            <Left>
              <Icon name="ios-person" />
              <Body>
                <Text>user</Text>
                <Text>
                  Match%<Text>Time</Text>
                </Text>
              </Body>
            </Left>
            <Right>
              <Text>store</Text>
              <Text>menu</Text>
            </Right>
          </CardItem>
          <CardItem cardBody>
            <Image
              source={require("../../assets/food/food1.jpg")}
              style={{ width: viewportWidth, height: viewportWidth, flex: 1 }}
            />
          </CardItem>
          <CardItem>
            <Heart fill="#c2c2c2" />
            <FeedIcon fill="#c2c2c2" />
            <Body />
            <Right>
              <Bookmark fill="#c2c2c2" />
            </Right>
          </CardItem>
          <CardItem
            style={{ flexDirection: "column", alignItems: "flex-start" }}
          >
            <View style={{flexDirection:'row', justifyContent:'space-between', width:'100%'}}>
                <Text>
                  <Text>user </Text>Content
                </Text>
                <Heart fill="#c2c2c2" width={10} height={10} style={{marginRight:4, alignSelf:'center'}}/>
            </View>
            <Text>
              <Text>user </Text>Content
            </Text>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}

function PhotoTab() {
  return (
    <ScrollView>
      <View style={{flexDirection: "row", flexWrap: "wrap"}}>

      <Image
        source={require("../../assets/food/food1.jpg")}
        style={{ width: viewportWidth / 3, height: viewportWidth / 3 }}
        />
      <Image
        source={require("../../assets/food/food1.jpg")}
        style={{ width: viewportWidth / 3, height: viewportWidth / 3 }}
        />
      <Image
        source={require("../../assets/food/food1.jpg")}
        style={{ width: viewportWidth / 3, height: viewportWidth / 3 }}
        />
      <Image
        source={require("../../assets/food/food1.jpg")}
        style={{ width: viewportWidth / 3, height: viewportWidth / 3 }}
        />
      <Image
        source={require("../../assets/food/food1.jpg")}
        style={{ width: viewportWidth / 3, height: viewportWidth / 3 }}
        />
      <Image
        source={require("../../assets/food/food1.jpg")}
        style={{ width: viewportWidth / 3, height: viewportWidth / 3 }}
        />
      <Image
        source={require("../../assets/food/food1.jpg")}
        style={{ width: viewportWidth / 3, height: viewportWidth / 3 }}
        />
      <Image
        source={require("../../assets/food/food1.jpg")}
        style={{ width: viewportWidth / 3, height: viewportWidth / 3 }}
        />
      <Image
        source={require("../../assets/food/food1.jpg")}
        style={{ width: viewportWidth / 3, height: viewportWidth / 3 }}
        />
      <Image
        source={require("../../assets/food/food1.jpg")}
        style={{ width: viewportWidth / 3, height: viewportWidth / 3 }}
        />
      <Image
        source={require("../../assets/food/food1.jpg")}
        style={{ width: viewportWidth / 3, height: viewportWidth / 3 }}
        />
      <Image
        source={require("../../assets/food/food1.jpg")}
        style={{ width: viewportWidth / 3, height: viewportWidth / 3 }}
        />
      <Image
        source={require("../../assets/food/food1.jpg")}
        style={{ width: viewportWidth / 3, height: viewportWidth / 3 }}
        />
        </View>
    </ScrollView>
  );
}
