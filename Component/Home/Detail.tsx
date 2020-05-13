import React from "react";
import {
  Button,
  Container,
  Header,
  Content,
  Left,
  Body,
  Title,
  Right,
  List,
  ListItem,
  Footer,
  Badge,
  Fab,
  Icon,
} from "native-base";
import { Image, StyleSheet, View, Dimensions, Text } from "react-native";

import MapView, { Marker } from "react-native-maps";

// import NaverMapView, {
//   Circle,
//   Marker,
//   Path,
//   Polyline,
//   Polygon,
// } from "react-native-nmap";

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);

function StoreDetail({ navigation }: { navigation: any }) {
  // const P0 = { latitude: 37.564362, longitude: 126.977011 };
  // const P1 = { latitude: 37.565051, longitude: 126.978567 };
  // const P2 = { latitude: 37.565383, longitude: 126.976292 };
  return (
    <Container>
      <Content>
        <View
          style={{
            width: viewportWidth,
            height: viewportWidth,
            backgroundColor: "#DCDCDC",
          }}
        />
        <View style={{ padding: 17 }}>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Text style={{ fontSize: 14, color: "#707070" }}>time</Text>
            <Icon style={{ color: "#CCC", fontSize: 14 }} name="md-share" />
          </View>
          <Text style={{ fontWeight: "bold", fontSize: 22 }}>menu</Text>
          <Text style={{ fontSize: 16, color: "#707070" }}>store</Text>
          <Text style={{ fontSize: 14, color: "#707070" }}>address</Text>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Text
              style={{ fontSize: 14, fontWeight: "bold", color: "#707070" }}
            >
              n%
              <Text
                style={{
                  fontWeight: "normal",
                  textDecorationLine: "line-through",
                  color: "#c2c2c2",
                  textDecorationColor: "#c2c2c2",
                }}
              >
                price
              </Text>
            </Text>
            <Text>n개 남음</Text>
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Text
              style={{ fontSize: 20, fontWeight: "bold", color: "#9943fc" }}
            >
              salePrice원
            </Text>
            <Badge
              style={{
                alignItems: "center",
                backgroundColor: "#9943fc",
                width: 41,
                height: 21,
              }}
            >
              <Text style={{ fontSize: 14, color: "white" }}>n분</Text>
            </Badge>
          </View>
        </View>
        <View style={{ backgroundColor: "#f2f2f2" }}>
          <List>
            <ListItem itemHeader first>
              <Text
                style={{ fontSize: 16, fontWeight: "bold", color: "#707070" }}
              >
                상세정보
              </Text>
            </ListItem>
            <ListItem>
              <Text style={[style.storeDetail, { fontWeight: "bold" }]}>
                영업시간
              </Text>
              <Text style={[style.storeDetail, { fontWeight: "normal" }]}>
                time
              </Text>
            </ListItem>
            <ListItem>
              <Text style={[style.storeDetail, { fontWeight: "bold" }]}>
                가게위치
              </Text>
              <Text style={[style.storeDetail, { fontWeight: "normal" }]}>
                addr
              </Text>
            </ListItem>
            <ListItem>
              <Text style={[style.storeDetail, { fontWeight: "bold" }]}>
                전화번호
              </Text>
            </ListItem>
            <ListItem>
              <Text style={[style.storeDetail, { fontWeight: "bold" }]}>
                해시태그
              </Text>
            </ListItem>
            <ListItem last>
              <Text style={{ fontSize: 14, color: "#a2a2a2" }}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur
              </Text>
            </ListItem>
            <ListItem itemHeader first>
              <Text style={{ fontSize: 16, color: "#707070" }}>위치</Text>
            </ListItem>
            <ListItem last>
              <View style={{ flex: 1 }}>
                <MapView
                  style={{
                    flex: 1,
                    width: viewportWidth - 30,
                    height: viewportWidth - 30,
                  }}
                  initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}
                />
                <Marker
                  coordinate={{latitude:37.78825, longitude:-122.4324}}
                  title="this is a marker"
                  description="this is a example"
                />
              </View>

              {/* <NaverMapView
                style={{ width: "100%", height: "100%" }}
                showsMyLocationButton={true}
                center={{ ...P0, zoom: 16 }}
                onCameraChange={(e) =>
                  console.warn("onCameraChange", JSON.stringify(e))
                }
                onMapClick={(e) =>
                  console.warn("onMapClick", JSON.stringify(e))
                }
              >
                <Marker
                  coordinate={P0}
                  onClick={() => console.warn("onClick! p0")}
                />
                <Marker
                  coordinate={P1}
                  pinColor="blue"
                  onClick={() => console.warn("onClick! p1")}
                />
                <Marker
                  coordinate={P2}
                  pinColor="red"
                  onClick={() => console.warn("onClick! p2")}
                />
                <Path
                  coordinates={[P0, P1]}
                  onClick={() => console.warn("onClick! path")}
                  width={10}
                />
                <Polyline
                  coordinates={[P1, P2]}
                  onClick={() => console.warn("onClick! polyline")}
                />
                <Circle
                  coordinate={P0}
                  color={"rgba(255,0,0,0.3)"}
                  radius={200}
                  onClick={() => console.warn("onClick! circle")}
                />
                <Polygon
                  coordinates={[P0, P1, P2]}
                  color={`rgba(0, 0, 0, 0.5)`}
                  onClick={() => console.warn("onClick! polygon")}
                />
              </NaverMapView> */}
            </ListItem>
            <ListItem itemHeader first>
              <Text style={{ fontSize: 16, color: "#707070" }}>
                타임세일 이용방법
              </Text>
            </ListItem>
            <ListItem last>
              <Text style={{ fontSize: 14, color: "#a2a2a2" }}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur
              </Text>
            </ListItem>
          </List>
        </View>
        <Button
          onPress={() => navigation.navigate("OrderPage")}
          style={[
            style.boxShadow,
            {
              width: "90%",
              height: 50,
              borderRadius: 30,
              backgroundColor: "#9c48fc",
              bottom: 10,
              left: "5%",
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
            예약하기
          </Text>
        </Button>
      </Content>
    </Container>
  );
}
export default StoreDetail;

const style = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    backgroundColor: "#eee",
    alignSelf: "center",
    flexDirection: "row",
  },
  header: {
    backgroundColor: "transparent",
  },
  headertitle: {
    color: "black",
  },
  headerLeft: {
    flex: 1,
  },
  icon: {
    width: 50,
    height: 50,
  },
  iconLeft: {
    paddingLeft: 10,
  },
  iconRight: {
    paddingRight: 10,
  },
  storeDetail: {
    color: "#707070",
    fontSize: 14,
  },
  boxShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: -5,
      height: 5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4.65,

    elevation: 7,
  },
});
