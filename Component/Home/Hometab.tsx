import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
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
} from "native-base";
import Search from "../../assets/svgicon/Search_01.js";
import Heart from "../../assets/svgicon/Heart_01.js";
import {Gps_01} from '../AllImage';


export function SearchTab() {
  return (
    <Header searchBar rounded transparent style={{ paddingTop: 0 }}>
      <Item style={{backgroundColor:'#fefefe'}}>
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
const Hometab = ({ navigation:{navigate} }) => {
  const [active, setActive] = useState(0);
  return (
    <Container>
      <SearchTab />
      <View
        style={{ width: "100%", height: 130, backgroundColor: "#c2c2c2" }}
      />
      <Tabs tabBarUnderlineStyle={{backgroundColor:'#9948fc'}} onChangeTab={({ i }:{i:any}) => setActive(i)}>
        <Tab
          heading={
            <TabHeading style={{backgroundColor:'#efefef'}}>
              <Text style={active === 0 ? {color:'#9948fc'} : {color:'#c2c2c2'}}>이벤트</Text>
            </TabHeading>
          }
        >
          <EventTab props={navigate}/>
        </Tab>
        <Tab
          heading={
            <TabHeading style={{backgroundColor:'#efefef'}}>
              <Text style={active === 1 ? {color:'#9948fc'} : {color:'#c2c2c2'}}>타임세일</Text>
            </TabHeading>
          }
        >
          <TimeSale props={navigate}/>
        </Tab>
        <Tab
          heading={
            <TabHeading style={{backgroundColor:'#efefef'}}>
              <Text style={active === 2 ? {color:'#9948fc'} : {color:'#c2c2c2'}}>랭킹</Text>
            </TabHeading>
          }
        >
          <Ranking />
        </Tab>
      </Tabs>
    </Container>
  );
};
export default Hometab;

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);


function EventTab({props}) {
  return (
    <ScrollView>
      <Content padder>
        <EventContent />
        <EventContent />
        <EventContent />
        <Button transparent>
          <Text>더보기</Text>
        </Button>
        <SaleList props={props}/>
      </Content>
    </ScrollView>
  );
}

function EventContent() {
  return (
    <Card>
      <CardItem>
        <Left>
          <Icon name="ios-person" />
          <Body>
            <Text>
              <Text>어디에요</Text> | 가게에요
            </Text>
            <Text>내용이에요</Text>
            <Text>날짜에오</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem>
        <Text>보상이에오</Text>
      </CardItem>
    </Card>
  );
}

function SaleList({props}) {
  return (
    <Card>
      <CardItem cardBody button onPress={() => props('Detail')}>
        <Thumbnail
          style={{ width: viewportWidth / 3, height: viewportWidth / 3 }}
          square
          source={require("../../assets/food1.jpg")}
        />
        <Body style={{ paddingHorizontal: 10, alignSelf: "center" }}>
          <Text>
            <Text>시간</Text>
            <Text>갯수</Text>
          </Text>
          <Text>menu</Text>
          <Text>address</Text>
          <Text>
            <Text>
              Sale%<Text></Text>Price
            </Text>
          </Text>
        </Body>
      </CardItem>
    </Card>
  );
}

function TimeSale(props) {
  return (
    <ScrollView>
      <Content padder>
        <SaleList props={props}/>
        <SaleList props={props}/>
        <SaleList props={props}/>
        <SaleList props={props}/>
        <SaleList props={props}/>
        <SaleList props={props}/>
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
              width: 24,
              marginVertical: 20,
              textAlign: "right",
              alignSelf:'center',
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
                <Heart fill="#c2c2c2" width={24} height={24} />
                <Text>number</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
