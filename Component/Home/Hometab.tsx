import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Platform,
  Image,
} from "react-native";
import {
  Container,
  Content,
  Button,
  Header,
  Input,
  Item,
  Tabs,
  Tab,
  TabHeading,
  Card,
  CardItem,
  Left,
  Icon,
  Body,
  Thumbnail,
  Grid,
  Col,
  Right,
  ScrollableTab,
} from "native-base";
import Search from "../../assets/svgicon/Search_01.js";
import Heart from "../../assets/svgicon/Heart_01.js";
import { Filter_01 } from "../AllImage";
import { useNavigation } from "@react-navigation/native";
import { info } from "../test";
import { TabContainer } from "native-base/src/basic/TabContainer";

export function SearchTab() {
  return (
    <Header
      transparent
      searchBar
      rounded
      style={
        Platform.OS === "ios"
          ? { paddingVertical: 20, marginVertical: -10 }
          : { paddingVertical: 30, marginVertical: -15 }
      }
    >
      <Item style={{ backgroundColor: "#fefefe", alignContent: "center" }}>
        <Search fill="#c2c2c2" style={{ marginLeft: 10 }} />
        <Input
          placeholder="가게명, 메뉴명으로 검색해보세요"
          placeholderTextColor="#e5e5e5"
          style={{ backgroundColor: "#fefefe", fontSize: 12 }}
        />
      </Item>
    </Header>
  );
}
const Hometab = () => {
  const [active, setActive] = useState(0);
  return (
    <Container>
      <SearchTab />
      <Image source={require("../../assets/icon/banner.png")} />
      <Tabs
        tabBarUnderlineStyle={{ backgroundColor: "#9948fc" }}
        onChangeTab={({ i }: { i: any }) => setActive(i)}
        renderTabBar={() => (
          <ScrollableTab
            style={{ width: viewportWidth, backgroundColor: "transparent" }}
            tabsContainerStyle={{ width: 200 }}
          ><Filter_01 fill='#c2c2c2' width={14} height={14}/></ScrollableTab>
        )}
      >
          <Tab
            tabStyle={{ width: 100 }}
            heading={
              <TabHeading style={{ backgroundColor: "#fff", alignSelf:'center' }}>
                <Text
                  style={
                    active === 0 ? { color: "#9948fc",  } : { color: "#c2c2c2" }
                  }
                >
                  이벤트
                </Text>
              </TabHeading>
            }
          >
            <EventTab />
          </Tab>
          <Tab
            heading={
              <TabHeading style={{ backgroundColor: "#fff" }}>
                <Text
                  style={
                    active === 1 ? { color: "#9948fc" } : { color: "#c2c2c2" }
                  }
                >
                  타임세일
                </Text>
              </TabHeading>
            }
          >
            <TimeSale />
          </Tab>
          <Tab
            heading={
              <TabHeading style={{ backgroundColor: "#fff" }}>
                <Text
                  style={
                    active === 2 ? { color: "#9948fc" } : { color: "#c2c2c2" }
                  }
                >
                  랭킹
                </Text>
              </TabHeading>
            }
          >
            <Ranking />
          </Tab>
          <Tab
            heading={
              <TabHeading style={{ backgroundColor: "#fff" }}>
                <Text
                  style={
                    active === 3 ? { color: "#9948fc" } : { color: "#c2c2c2" }
                  }
                >
                  랭킹
                </Text>
              </TabHeading>
            }
          >
            
          </Tab>
      </Tabs>
    </Container>
  );
};
export default Hometab;

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);

function EventTab() {
  return (
    <ScrollView>
      <Content padder>
        <EventContent />
        <EventContent />
        <EventContent />
        <Button transparent>
          <Text>더보기</Text>
        </Button>
        <SaleList />
      </Content>
    </ScrollView>
  );
}

function EventContent() {
  return (
    <Card style={{ borderBottomRightRadius: 10, borderBottomLeftRadius: 10 }}>
      <CardItem>
        <Left>
          <Icon name="ios-person" style={{ fontSize: 80 }} />
          <Body>
            <Text style={{ fontWeight: "bold", fontSize: 14 }}>
              <Text style={{ color: "#9948fc" }}>어디에요</Text> | 가게에요
            </Text>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>내용이에요</Text>
            <Text style={{ fontSize: 12, color: "#707070" }}>날짜에오</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem
        style={{
          backgroundColor: "#9948fc",
          justifyContent: "center",
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}
      >
        <Text
          style={{
            color: "#fff",
            alignSelf: "center",
            fontSize: 14,
            fontWeight: "bold",
          }}
        >
          보상이에오
        </Text>
      </CardItem>
    </Card>
  );
}

function SaleList() {
  const navigation = useNavigation();
  return (
    <>
      {info.map((item, i) => (
        <Card style={{ borderRadius: 10, overflow: "hidden" }} key={item.store}>
          <CardItem
            cardBody
            button
            onPress={() =>
              navigation.navigate("Detail", {
                store: item.store,
                menu: item.menu,
                src: item.src,
                addr: item.addr,
                reamin: item.remain,
                sale: item.sale,
                price: item.price,
                sTime: item.startTime,
                eTime: item.endTime,
                lat: item.lat,
                long: item.long,
              })
            }
          >
            {console.log(item)}
            <Thumbnail
              style={{ width: viewportWidth / 3, height: viewportWidth / 3 }}
              square
              source={item.src}
            />
            <Body style={{ paddingHorizontal: 10, alignSelf: "center" }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Text style={{ fontSize: 12, color: "#707070" }}>
                  {item.startTime} ~ {item.endTime}
                </Text>
                <Text style={{ fontSize: 12, color: "#ccc" }}>
                  {item.remain}개 남음
                </Text>
              </View>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                {item.menu}
              </Text>
              <Text style={{ fontWeight: "bold", fontSize: 14 }}>
                {item.store}
              </Text>
              <Text style={{ fontWeight: "bold", fontSize: 14 }}>
                {item.addr}
              </Text>
              <View
                style={{
                  width: "100%",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{ fontSize: 20, fontWeight: "bold", color: "#c2c2c2" }}
                >
                  {item.sale}%
                </Text>
                <Text
                  style={{ color: "#9948fc", fontSize: 20, fontWeight: "bold" }}
                >
                  {item.price * ((100 - item.sale) / 100)}
                </Text>
              </View>
            </Body>
          </CardItem>
        </Card>
      ))}
    </>
  );
}

function TimeSale() {
  return (
    <ScrollView>
      <Content padder>
        <SaleList />
      </Content>
    </ScrollView>
  );
}

function Ranking() {
  function RankingContent() {
    return ( 
      <Grid>
        <Col style={{ flexGrow: 0, flexShrink: 1, flexBasis: 1 }}>
          <Text
            style={{
              width: 40,
              marginVertical: 20,
              textAlign: "right",
              alignSelf: "center",
              fontSize:20,
              fontWeight:'bold'
            }}
          >
            1
          </Text>
        </Col>
        <Col>
          <Card
            style={{
              width: viewportWidth * 0.85,
              height: 60,
              alignSelf: "flex-end",
            }}
          >
            <CardItem >
              <Left >
                <Icon name="ios-person" />
                <Body>
                  <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>menu</Text>
                    <Text style={{fontSize:16, fontWeight:'bold', color:'#9948fc'  }}>Match</Text>
                  </View>
                  <Text style={{fontSize:10, color:'#b8b8b8'}}>address</Text>
                </Body>
              </Left>
              <Right style={{ flex: 0, paddingRight: 10, alignItems:'center' }}>
                <Heart fill="#c2c2c2" width={16} height={16} />
                <Text style={{fontSize:10, color:'#373737'}}>number</Text>
              </Right>
            </CardItem>
          </Card>
        </Col>
      </Grid>
    );
  }
  return (
    <ScrollView>
      <Content padder>
        <RankingContent />
        <RankingContent />
        <RankingContent />
        <RankingContent />
        <RankingContent />
        <RankingContent />
        <RankingContent />
      </Content>
    </ScrollView>
  );
}
