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
  Card,
  CardItem,
  Left,
  Icon,
  Body,
  Title,
  Right,
  Badge,
  Tabs,
  Tab,
  TabHeading,
  Content,
  ScrollableTab,
} from "native-base";
import { SearchTab } from "../Home/Hometab";
import Heart from "../../assets/svgicon/Heart_01.js";
import Bookmark from "../../assets/svgicon/Bookmark_01.js";
import FeedIcon from "../../assets/svgicon/Feed_01";
import Plus from "../../assets/svgicon/Plus_01";

const style = StyleSheet.create({
  username: {
    fontSize: 18,
    fontWeight: "bold",
  },
  addr: {
    fontSize: 12,
    color: "#b8b8b8",
  },
  pointContainer: {
    backgroundColor: "#fff",
    borderRadius: 3,
  },
  point: {
    color: "#9948fc",
    fontSize: 16,
    fontWeight: "bold",
  },
  partition: {
    borderRightColor: "#f2f2f2",
    borderRightWidth: 1,
    justifyContent: "center",
    width:'25%',
    alignItems:'center',
  },
  cntPeople: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cntText: {
    fontSize: 16,
    color: "#b8b8b8",
  },
  titleContainer:{
    width:'100%',
    justifyContent:'space-between',
    flexDirection:'row'
  }
});

export default function Mypage() {
  const [active, setActive] = useState(0);
  return (
    <Container>
      <Card>
        <CardItem style={{ backgroundColor: "#f2f2f2" }}>
          <Left>
            <Icon name="ios-person" />
            <Body style={{marginTop:10}}>
              <Text style={style.username}>유저명</Text>
              <Text style={style.addr}>강원도 춘천시 석사동</Text>
            </Body>
          </Left>
          <Right>
            <Badge style={style.pointContainer}>
              <Text style={style.point}>1,000P</Text>
            </Badge>
          </Right>
        </CardItem>
        <CardItem
          style={{ backgroundColor: "#f2f2f2", justifyContent: "center" }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              width: "100%",
              height:viewportHeight/10,
              backgroundColor: "#fff",
              borderRadius:15
            }}
          >
            <View style={style.partition}>
              <Text>000</Text>
              <Text>팔로워</Text>
            </View>
            <View style={style.partition}>
              <Text>000</Text>
              <Text>팔로잉</Text>
            </View>
            <View style={style.partition}>
              <Text>000</Text>
              <Text>리뷰</Text>
            </View>
            <View style={style.partition}>
              <Text>000</Text>
              <Text>단골식당</Text>
            </View>
          </View>
        </CardItem>
      </Card>
      <Tabs
        tabBarUnderlineStyle={{ backgroundColor: "#9948fc" }}
        initialPage={active}
        onChangeTab={({ i }: { i: any }) => setActive(i)}
        renderTabBar={() => (
          <ScrollableTab
            style={{ width: viewportWidth, backgroundColor: "#fff" }}
            tabsContainerStyle={{ width: 250 }}
          />
        )}
      >
        <Tab
          heading={
            <TabHeading style={{ backgroundColor: "#fff" }}>
              <Text
                style={[
                  active === 0 ? { color: "#9948fc" } : { color: "#ccc" },
                  { fontSize: 16, fontWeight: "bold" },
                ]}
              >
                프로필
              </Text>
            </TabHeading>
          }
        >
          <Profile />
        </Tab>
        <Tab
          heading={
            <TabHeading style={{ backgroundColor: "#fff" }}>
              <Text
                style={[
                  active === 1 ? { color: "#9948fc" } : { color: "#ccc" },
                  { fontSize: 16, fontWeight: "bold" },
                ]}
              >
                알림
              </Text>
            </TabHeading>
          }
        >
          <Notice />
        </Tab>
        <Tab
          heading={
            <TabHeading style={{ backgroundColor: "#fff" }}>
              <Text
                style={[
                  active === 2 ? { color: "#9948fc" } : { color: "#ccc" },
                  { fontSize: 16, fontWeight: "bold" },
                ]}
              >
                분석
              </Text>
            </TabHeading>
          }
        >
          <Analyze />
        </Tab>
        <Tab
          heading={
            <TabHeading style={{ backgroundColor: "#fff" }}>
              <Text
                style={[
                  active === 3 ? { color: "#9948fc" } : { color: "#ccc" },
                  { fontSize: 16, fontWeight: "bold" },
                ]}
              >
                컬렉션
              </Text>
            </TabHeading>
          }
        >
          <Collection />
        </Tab>
      </Tabs>
    </Container>
  );
}

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);
function Profile() {
  return (
    <Content>
      <Card>
        <CardItem>
          <Left>
            <Icon name="ios-person" />
            <Body>
              <Text style={{ fontSize: 14, fontWeight: "bold" }}>user</Text>
              <Text style={{ fontSize: 9, color: "#707070" }}>Time</Text>
            </Body>
          </Left>
          <Right>
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>store</Text>
            <Text style={{ fontSize: 9, color: "#707070" }}>menu</Text>
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
        <CardItem style={{ flexDirection: "column", alignItems: "flex-start" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 14, fontWeight: "bold" }}>user</Text>
              <Text style={{ fontSize: 14 }}>Content</Text>
            </View>
            <Heart
              fill="#c2c2c2"
              width={10}
              height={10}
              style={{ marginRight: 4, alignSelf: "center" }}
            />
          </View>
          <Text>
            <Text>user </Text>Content
          </Text>
        </CardItem>
      </Card>
    </Content>
  );
}

function Notice() {
  return (
    <Card>
      <CardItem>
        <Left>
          <Icon name="ios-person" />
          <Body>
            <View style={{flexDirection:'row'}}>
              <Text style={{fontSize:14, color:'#707070', fontWeight:'bold'}}>username </Text>
              <Text style={{fontSize:14, color:'#707070'}}>notice Content</Text>
            </View>
            <Text style={{fontSize:12, color:'#dcdcdc'}}>00:00</Text>
          </Body>
        </Left>
        <Right>
          <Image
            source={require("../../assets/food/food1.jpg")}
            style={{ width: 40, height: 40 }}
          />
        </Right>
      </CardItem>
    </Card>
  );
}

function Analyze() {
  return (
    <Content padder>
      <View style={{flexDirection:'row', width:'100%', justifyContent:'space-between', marginBottom:10, alignItems:'center'}}>
        <Text style={{fontSize:16, fontWeight:'bold', textAlignVertical:'center'}}>해시태그</Text>
        <Plus fill="#9948fc" width={14} height={14} />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Badge
          style={{
            backgroundColor: "transparent",
            borderWidth: 0.5,
            marginRight: 10,
            borderRadius: 5,
            borderColor:'#9948fc'
          }}
        >
          <Text style={{color:'#9948fc'}}>#해시태그</Text>
        </Badge>
        <Badge
          style={{
            backgroundColor: "transparent",
            borderWidth: 0.5,
            marginRight: 10,
            borderRadius: 5,
            borderColor:'#9948fc'
            
          }}
        >
          <Text style={{color:'#9948fc'}}>#해시태그</Text>
        </Badge>
        <Badge
          style={{
            backgroundColor: "transparent",
            borderWidth: 0.5,
            marginRight: 10,
            borderRadius: 5,
            borderColor:'#9948fc'
            
          }}
        >
          <Text style={{color:'#9948fc'}}>#해시태그</Text>
        </Badge>
        <Badge
          style={{
            backgroundColor: "transparent",
            borderWidth: 0.5,
            marginRight: 10,
            borderRadius: 5,
            borderColor:'#9948fc'
            
          }}
        >
          <Text style={{color:'#9948fc'}}>#해시태그</Text>
        </Badge>
        <Badge
          style={{
            backgroundColor: "transparent",
            borderWidth: 0.5,
            marginRight: 10,
            borderRadius: 5,
            borderColor:'#9948fc'
            
          }}
        >
          <Text style={{color:'#9948fc'}}>#해시태그</Text>
        </Badge>
      </View>
      <View style={style.titleContainer}>
        <Text style={{fontSize:16, fontWeight:'bold'}}>나와 잘 맞는 친구</Text>
        <Plus fill="#9948fc" width={14} height={14} />
      </View>
      <Card>
        <CardItem>
          <Left>
            <Icon name="ios-person" />
            <Body>
              <Text style={{fontSize:16, fontWeight:'bold', color:"#707070"}}>유저명</Text>
              <Text style={{fontSize:12, color:'#b8b8b8'}}>주소</Text>
            </Body>
          </Left>
          <Right>
            <Badge style={{ backgroundColor: "transparent", borderWidth: 0 }}>
              <Text style={{fontSize:20, fontWeight:'bold', color: "#9948fc" }}>89%</Text>
            </Badge>
          </Right>
        </CardItem>
      </Card>
      <View style={style.titleContainer}>
        <Text style={{fontSize:16, fontWeight:'bold'}}>최애 메뉴</Text>
        <Plus fill="#9948fc" width={14} height={14} />
      </View>
      <Card>
        <CardItem>
          <Left>
            <Image
              source={require("../../assets/food/food1.jpg")}
              style={{ width: 40, height: 40 }}
            />
            <Body>
              <Text style={{fontSize:16, fontWeight:'bold', color:'#707070'}}>메뉴명</Text>
              <Text style={{fontSize:12, color:'#b8b8b8'}}>상호명<Text style={{fontWeight:'bold', color:'#9948fc'}}>주소</Text></Text>
            </Body>
          </Left>
          <Right>
            <Badge style={{ backgroundColor: "transparent" }}>
              <Text style={{ color: "#9948fc", fontSize:20, fontWeight:'bold' }}>89%</Text>
            </Badge>
          </Right>
        </CardItem>
      </Card>
    </Content>
  );
}
function Collection() {
  const [miniActive, setMini] = useState(0);
  return (
    <Tabs tabBarUnderlineStyle={{backgroundColor:'#9948fc'}} onChangeTab={({i}:{i:any}) => setMini(i)}>
      <Tab
        heading={
          <TabHeading style={{backgroundColor:'#fff'}}>
            <Text style={[miniActive === 0 ? {color:'#9948fc'} : {color:'#ccc'}, {fontSize:16, fontWeight:'bold'}]}>메뉴</Text>
          </TabHeading>
        }
      >
        <CollectMenu />
      </Tab>
      <Tab
        heading={
          <TabHeading style={{backgroundColor:'#fff'}}>
            <Text style={[miniActive === 1 ? {color:'#9948fc'} : {color:'#ccc'}, {fontSize:16, fontWeight:'bold'}]}>식당</Text>
          </TabHeading>
        }
      >
        <CollectDiner />
      </Tab>
    </Tabs>
  );
}

function CollectMenu() {
  return (
    <ScrollView>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
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

function CollectDiner() {
  return (
    <Card
      style={{
        height: 60,
      }}
    >
      <CardItem cardBody>
        <Left>
          <Icon name="ios-person" />
          <Body>
            <Text>
              menu<Text>Match</Text>
            </Text>
            <Text>address</Text>
          </Body>
        </Left>
        <Right style={{ flex: 0, paddingRight: 10 }}>
          <Bookmark fill="#9948fc" width={24} height={24} />
        </Right>
      </CardItem>
    </Card>
  );
}
