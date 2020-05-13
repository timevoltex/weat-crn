import React, { useState } from "react";
import {
  Container,
  Header,
  Left,
  Body,
  Title,
  Right,
  Content,
  Card,
  Thumbnail,
  CardItem,
  Badge,
  Button,
  List,
  ListItem,
  Item,
  Input,
  Picker,
  Form,
  Footer,
  Icon,
} from "native-base";
import { Text, StyleSheet, View, Dimensions } from "react-native";
import Multiply from "../../assets/svgicon/Multiply_01.js";
import { StackActions } from "@react-navigation/native";
const { width, height } = Dimensions.get("window");

function OrderPage({ navigation }:{navigation:any}) {
  const [selected, setSelected] = useState("v1");
  const [overlay, setOverlay] = useState(false);
  return (
    <Container>
      {overlay && <Thanks props={navigation} />}
      <Content>
        <Card>
          <CardItem>
            <Thumbnail
              square
              source={require("../../assets/food1.jpg")}
              style={{ width: 135, height: 135 }}
            />

            <Body style={{ paddingLeft: 10, alignSelf: "center" }}>
              <Text
                style={{
                  fontSize: 14,
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Text>22:00-23:00</Text>
                <Text>3개 남음</Text>
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 14 }}>닭삼겹</Text>
                <RendertimeBadge />
              </Text>
              <Text style={{ fontSize: 14 }}>청미래 닭갈비</Text>
              <Text
                style={{
                  fontSize: 14,
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Text>춘천시 석사동 198-3</Text>
                <Text>price원</Text>
              </Text>
            </Body>
          </CardItem>
        </Card>
        <List>
          <ListItem first itemHeader>
            <Text>찾아가실분 정보</Text>
          </ListItem>
          <ListItem>
            <Input
              style={{ borderWidth: 0.5, borderRadius: 5 }}
              placeholder="이름을 입력해주세요"
            />
          </ListItem>
          <ListItem last>
            <Input
              style={{ borderWidth: 0.5, borderRadius: 5 }}
              placeholder="010-0000-0000"
            />
          </ListItem>
          <ListItem itemHeader>
            <Text>price원 결제</Text>
          </ListItem>
        </List>
        <Form>
          <Picker
            mode="dropdown"
            selectedValue={selected}
            style={{ width: "90%", marginHorizontal: 20 }}
            onValueChange={(itemValue, itemIndex) => setSelected(itemValue)}
          >
            <Picker.Item label="방문결제" value="v1" />
            <Picker.Item label="신용/체크카드" value="v2" />
            <Picker.Item label="휴대폰결제" value="v3" />
            <Picker.Item label="KaKaoPay" value="v4" />
            <Picker.Item label="toss" value="v5" />
            <Picker.Item label="PAYCO" value="v6" />
          </Picker>
        </Form>
      </Content>
      <Footer style={{ backgroundColor: "transparent" }}>
        <Button
          onPress={() => setOverlay(true)}
          style={[
            style.boxShadow,
            {
              width: "90%",
              height: 50,
              borderRadius: 30,
              backgroundColor: "#9c48fc",
            },
          ]}
        >
          <Text
            style={{
              alignSelf: "center",
              marginHorizontal: "auto",
              color: "white",
              fontSize: 20,
            }}
          >
            결제하기
          </Text>
        </Button>
      </Footer>
    </Container>
  );
}
const RendertimeBadge = () => (
  <Badge style={{ width: "24%", height: 21, backgroundColor: "#9943fc" }}>
    <Text style={{ alignSelf: "center", fontSize: 11, color: "#fff" }}>
      n분
    </Text>
  </Badge>
);
export default OrderPage;

function Thanks({ props }:{props:any}) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <View
      style={{
        backgroundColor: "#000",
        opacity: 0.8,
        width: width,
        height: height,
        position: "absolute",
        zIndex: 99,
      }}
    >
      <Icon name="ios-person" style={{ fontSize: 50 }} />
      <Button
        transparent
        onPress={() =>
          props.reset({ index: 3, routes: [{ name : "OrderListTab" }] })
        }
        style={{ marginHorizontal: "auto", marginVertical: "auto" }}
      >
        <View style={{ position: "relative", top: 10, left: -10 }}>
          <Text
            style={{
              color: "#9c48fc",
              position: "absolute",
              width: 150,
              zIndex: 99,
              top: -72,
              left: -20,
              fontWeight: "bold",
            }}
          >
            감사합니다!
          </Text>
          <Thumbnail
            style={{
              width: 128,
              height: 128,
              top: -100,
              left: -50,
              borderRadius: 80,
              position: "absolute",
            }}
            source={require("../../assets/icon/OrderComplete.jpg")}
          />
          <Multiply
            style={{
              backgroundColor: "#fff",
              top: 14,
              borderRadius: 50,
              position: "absolute",
            }}
            fill="#9c48fc"
          />
        </View>
      </Button>
    </View>
  );
}

const style = StyleSheet.create({
  boxShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: -5, //x-position
      height: 5, //y-position
    },
    shadowOpacity: 0.4, //opacity
    shadowRadius: 4.65, //blur

    elevation: 7, // This adds a drop shadow to the item and affects z-order for overlapping views
  },
});
