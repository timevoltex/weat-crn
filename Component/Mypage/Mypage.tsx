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
} from "native-base";
import { SearchTab } from "../Home/Hometab";
import Heart from "../../assets/svgicon/Heart_01.js";
import Bookmark from "../../assets/svgicon/Bookmark_01.js";
import FeedIcon from "../../assets/svgicon/Feed_01.js";
import Plus from "../../assets/svgicon/Plus_01.js";

export default function Mypage() {
  const [active, setActive] = useState(0);
  return (
    <Container>
      <SearchTab />
      <Card>
        <CardItem>
          <Left>
            <Icon name="ios-person" />
            <Body>
              <Text>유저명</Text>
              <Text>강원도 춘천시 석사동</Text>
            </Body>
          </Left>
          <Right>
            <Badge style={{ backgroundColor: "#fff", borderRadius: 3 }}>
              <Text style={{ color: "purple" }}>1,000P</Text>
            </Badge>
          </Right>
        </CardItem>
        <CardItem>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            <Text style={{ textAlign: "center" }}>000{"\n"}팔로워</Text>
            <Text style={{ textAlign: "center" }}>000{"\n"}팔로잉</Text>
            <Text style={{ textAlign: "center" }}>000{"\n"}리뷰</Text>
            <Text style={{ textAlign: "center" }}>000{"\n"}단골식당</Text>
          </View>
        </CardItem>
      </Card>
      <Tabs initialPage={active} onChangeTab={({ i }) => setActive(i)}>
        <Tab
          heading={
            <TabHeading>
              <Text>프로필</Text>
            </TabHeading>
          }
        >
          <Profile />
        </Tab>
        <Tab
          heading={
            <TabHeading>
              <Text>알림</Text>
            </TabHeading>
          }
        >
          <Notice />
        </Tab>
        <Tab
          heading={
            <TabHeading>
              <Text>분석</Text>
            </TabHeading>
          }
        >
          <Analyze />
        </Tab>
        <Tab
          heading={
            <TabHeading>
              <Text>컬렉션</Text>
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
            source={require("../../assets/food1.jpg")}
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
            <Text>
              <Text>user </Text>Content
            </Text>
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
            <Text>
              <Text>유저명</Text>알림내용
            </Text>
            <Text>00:00</Text>
          </Body>
        </Left>
        <Right>
          <Image
            source={require("../../assets/food1.jpg")}
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
      <View>
        <Text>해시태그</Text>
        <Plus fill="#9948fc" style={{ height: 30, width: 30 }} />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Badge
          style={{
            backgroundColor: "transparent",
            borderWidth: 0.5,
            marginRight: 10,
          }}
        >
          <Text>#해시태그</Text>
        </Badge>
        <Badge
          style={{
            backgroundColor: "transparent",
            borderWidth: 0.5,
            marginRight: 10,
          }}
        >
          <Text>#해시태그</Text>
        </Badge>
        <Badge
          style={{
            backgroundColor: "transparent",
            borderWidth: 0.5,
            marginRight: 10,
          }}
        >
          <Text>#해시태그</Text>
        </Badge>
        <Badge
          style={{
            backgroundColor: "transparent",
            borderWidth: 0.5,
            marginRight: 10,
          }}
        >
          <Text>#해시태그</Text>
        </Badge>
      </View>
      <View>
        <Text>나와 잘 맞는 친구</Text>

        <Plus fill="#9948fc" style={{ height: 30, width: 30 }} />
      </View>
      <Card>
        <CardItem>
          <Left>
            <Icon name="ios-person" />
            <Body>
              <Text>유저명</Text>
              <Text>주소</Text>
            </Body>
          </Left>
          <Right>
            <Badge style={{ backgroundColor: "transparent", borderWidth: 0 }}>
              <Text style={{ color: "purple" }}>89%</Text>
            </Badge>
          </Right>
        </CardItem>
      </Card>
      <View>
        <Text>최애 메뉴</Text>
        <Plus fill="#9948fc" style={{ height: 30, width: 30 }} />
      </View>
      <Card>
        <CardItem>
          <Left>
            <Image
              source={require("../../assets/food1.jpg")}
              style={{ width: 40, height: 40 }}
            />
            <Body>
              <Text>메뉴명</Text>
              <Text>상호명</Text>
            </Body>
          </Left>
          <Right>
            <Badge style={{ backgroundColor: "transparent" }}>
              <Text style={{ color: "purple" }}>89%</Text>
            </Badge>
          </Right>
        </CardItem>
      </Card>
    </Content>
  );
}
function Collection() {
  return (
    <Tabs>
      <Tab
        heading={
          <TabHeading>
            <Text>메뉴</Text>
          </TabHeading>
        }
      >
        <CollectMenu />
      </Tab>
      <Tab
        heading={
          <TabHeading>
            <Text>식당</Text>
          </TabHeading>
        }
      ><CollectDiner/></Tab>
    </Tabs>
  );
}

function CollectMenu() {
  return (
    <ScrollView>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        <Image
          source={require("../../assets/food1.jpg")}
          style={{ width: viewportWidth / 3, height: viewportWidth / 3 }}
        />
        <Image
          source={require("../../assets/food1.jpg")}
          style={{ width: viewportWidth / 3, height: viewportWidth / 3 }}
        />
        <Image
          source={require("../../assets/food1.jpg")}
          style={{ width: viewportWidth / 3, height: viewportWidth / 3 }}
        />
        <Image
          source={require("../../assets/food1.jpg")}
          style={{ width: viewportWidth / 3, height: viewportWidth / 3 }}
        />
        <Image
          source={require("../../assets/food1.jpg")}
          style={{ width: viewportWidth / 3, height: viewportWidth / 3 }}
        />
        <Image
          source={require("../../assets/food1.jpg")}
          style={{ width: viewportWidth / 3, height: viewportWidth / 3 }}
        />
        <Image
          source={require("../../assets/food1.jpg")}
          style={{ width: viewportWidth / 3, height: viewportWidth / 3 }}
        />
        <Image
          source={require("../../assets/food1.jpg")}
          style={{ width: viewportWidth / 3, height: viewportWidth / 3 }}
        />
        <Image
          source={require("../../assets/food1.jpg")}
          style={{ width: viewportWidth / 3, height: viewportWidth / 3 }}
        />
        <Image
          source={require("../../assets/food1.jpg")}
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
