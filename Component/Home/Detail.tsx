import React from "react";
import {
  Button,
  Container,
  Content,
  List,
  ListItem,
  Badge,
  Icon,
  Tabs,
  Tab,
  TabHeading,
} from "native-base";
import {
  Image,
  StyleSheet,
  View,
  Dimensions,
  Text,
  ScrollView,
  ViewBase,
} from "react-native";

import MapView, { Marker } from "react-native-maps";
import {useNavigation, useRoute} from '@react-navigation/native'

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);

function StoreDetailContent() {
  const route = useRoute();
  const object = route.params;
  return (
    <Content style={{ flex: 1 }}>
      <ScrollView>
        <Image source={object.src} style={{width:viewportWidth, height:viewportWidth}}/>
        <View style={{ padding: 17 }}>
          <View
            style={{
              flexDirection:'row',
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Text style={{ fontSize: 14, color: "#707070", textAlignVertical:'bottom' }}>{object.sTime}~{object.eTime}</Text>
            <Icon style={{ color: "#CCC", fontSize: 30}} name="md-share" />
          </View>
          <Text style={{ fontWeight: "bold", fontSize: 22 }}>{object.menu}</Text>
          <Text style={{ fontSize: 16, color: "#707070" }}>{object.store}</Text>
          <Text style={{ fontSize: 14, color: "#707070" }}>{object.addr}</Text>
          <View
            style={{
              flexDirection:'row',
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <View style={{flexDirection:'row'}}>
              <Text style={{fontSize:14, color:'#707070', opacity:0.07, fontWeight:'bold', textAlignVertical:'bottom'}}>
          {object.sale}%
              </Text>
              <Text
                style={{fontSize:20,
                  textDecorationLine: "line-through",
                  color: "#c2c2c2",
                  textDecorationColor: "#c2c2c2",
                }}
              >
                {object.price}
              </Text>
            </View>
              <Text style={{color:'#ccc', fontSize:14}}>{object.remain}개 남음</Text>
          </View>
          <View
            style={{
              flexDirection:'row',
              justifyContent: "space-between",
              width: "100%",
              
            }}
          >
            <Text
              style={{ fontSize: 20, fontWeight: "bold", color: "#9943fc", }}
            >
              {object.price*((100-object.sale)/100)}원
            </Text>
            <Badge
              style={{
                alignItems: "center",
                backgroundColor: "#9943fc",
                width: 41,
                height: 21,
                
              }}
            >
              <Text style={{ fontSize: 14, color: "white" }}>{object.remain}분</Text>
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
                    latitude: object.lat,
                    longitude: object.long,
                    latitudeDelta: 0.0022,
                    longitudeDelta: 0.0041,
                  }}
                />
                <Marker
                  coordinate={{ latitude: object.lat, longitude: object.long }}
                  title="this is a marker"
                  description="this is a example"
                />
              </View>
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
      </ScrollView>
    </Content>
  );
}

function StoreDetail() {
  const navigation = useNavigation();
  return (
    <Container>
      <Tabs
        style={{ backgroundColor: "transparent" }}
        tabBarUnderlineStyle={{ backgroundColor: "transparent" }}
        tabBarPosition="bottom"
      >
        <Tab
          heading={
            <TabHeading style={{ backgroundColor: "#f2f2f2" }}
            >
              <View
                style={[
                  style.boxShadow,
                  {
                    backgroundColor: "#9948fc",
                    borderRadius: 30,
                    width: viewportWidth - 30,
                    height: 50,
                    justifyContent:'center'
                  },
                ]}
              >
                <Text onPress={() => navigation.navigate('OrderPage')}
                  style={{
                    color: "#fff",
                    fontSize: 18,
                    textAlignVertical:'center',
                    textAlign:'center',
                    margin:'auto'
                  }}
                >
                  예약하기
                </Text>
              </View>
            </TabHeading>
          }
        >
          <StoreDetailContent/>
        </Tab>
      </Tabs>
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
