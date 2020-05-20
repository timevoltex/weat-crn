import "react-native-gesture-handler";
import React from "react";
import Hometab from "./Component/Home/Hometab";
import Detail from "./Component/Home/Detail";
import {
  NavigationContainer,
  useNavigation,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Add from "./Component/Add/Add";
import OrderList from "./Component/OrderList/OrderList";
import Mypage from "./Component/Mypage/Mypage";
import Feed from "./Component/Feed/Feed";
import HomeIcon from "./assets/svgicon/Home_01.js";
import FeedIcon from "./assets/svgicon/Feed_01";
import AddIcon from "./assets/svgicon/Plus_01";
import OrderListIcon from "./assets/svgicon/Orderlist_01";
import MypageIcon from "./assets/svgicon/Mypage_01.js";
import {
  Medal_01,
  Setting_01,
  Back_01,
  Diner_01,
  Filter_01,
} from "./Component/AllImage";

import Location from "./assets/svgicon/Location_01.js";
import GPS from "./assets/svgicon/Gps_01.js";
import OrderPage from "./Component/Home/OrderPage";



// 현 위치를 불러오는 지도 코드(안드로이드 퍼미션 및 아이폰 추가 설치 필요)
// 아마 eject하여서 따로 코딩해야 할거 같음.
// import GeoLocation from "react-native-geolocation-service";
// interface ILocation {
//   latitude: number;
//   longitude: number;
// }

// const CurrentPosition = () => {
//   const [location, setLocation] = useState<ILocation | undefined>(undefined);
//   useEffect(() => {
//     GeoLocation.getCurrentPosition(
//       (position) => {
//         const { latitude, longitude } = position.coords;
//         setLocation({
//           latitude,
//           longitude,
//         });
//       },
//       (error) => {
//         console.log(error.code, error.message);
//       },
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//     );
//   }, []);
//   return (
//     <>
//       {location ? (
//         <Text>Latitude:{location.latitude}</Text>
//       ) : (
//         <Text>Loading...</Text>
//       )}
//     </>
//   );
// };

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="mainscreen"
          component={HomeTabs}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="OrderPage"
          component={OrderPage}
          options={{
            headerLeft: () => (
              <Back_01 fill="#c2c2c2" style={{ marginLeft: 10 }} />
            ),
            headerTitle: "상호명",
            headerTitleAlign: "center",
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          if (route.name === "FeedTab") {
            return <FeedIcon fill={color} />;
          } else if (route.name === "AddTab") {
            return <AddIcon fill={color} />;
          } else if (route.name === "OrderListTab") {
            return <OrderListIcon fill={color} />;
          } else if (route.name === "MypageTab") {
            return <MypageIcon fill={color} />;
          } else {
            return <HomeIcon fill={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: "#9948fc",
        inactiveTintColor: "#acacac",
        showLabel: false,
      }}
    >
      <Tab.Screen name="HomeTab" component={HomeStackScreen} />
      <Tab.Screen name="FeedTab" component={FeedStackScreen} />
      <Tab.Screen name="AddTab" component={AddStackScreen} />
      <Tab.Screen name="OrderListTab" component={OrderListStackScreen} />
      <Tab.Screen name="MypageTab" component={MypageStackScreen} />
    </Tab.Navigator>
  );
}

function HomeStackScreen() {
  const navigation = useNavigation();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Hometab}
        options={{
          headerTitle: "현재 주소", //CurrentPosition-> 현재 주소를 불러오는 함수
          headerLeft: () => (
            <Location
              fill="#a2a2a2"
              width={28}
              height={28}
              style={{ marginLeft: 10 }}
            />
          ),
          headerTitleAlign: "center",
          headerRight: () => (
            <GPS
              fill="#a2a2a2"
              width={28}
              height={28}
              style={{ marginRight: 10 }}
            />
          ),
        }}
      />
      <HomeStack.Screen
        name="Detail"
        component={Detail}
        options={({ route }) => ({
          headerTitleAlign: "center",
          headerTitle: route.params.store,
          headerLeft: () => (
            <Back_01
              fill="#c2c2c2"
              style={{ marginLeft: 10 }}
              onPress={() => navigation.goBack()}
            />
          ),
          headerRight: () => (
            <Diner_01 fill="#c2c2c2" style={{ marginRight: 10 }} />
          ),
        })}
      />
    </HomeStack.Navigator>
  );
}
function FeedStackScreen() {
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen
        name="Feed"
        component={Feed}
        options={{
          headerTitleAlign: "center",
          headerTitle: "현재주소",
          headerRight: () => <GPS fill="#c2c2c2" style={{ marginRight: 10 }} />,
        }}
      />
    </FeedStack.Navigator>
  );
}
function AddStackScreen() {
  return (
    <AddStack.Navigator>
      <AddStack.Screen name="Feed" component={Add} />
    </AddStack.Navigator>
  );
}
function MypageStackScreen() {
  return (
    <MypageStack.Navigator>
      <MypageStack.Screen
        name="Feed"
        component={Mypage}
        options={{
          headerLeft: () => (
            <Setting_01 fill="#c2c2c2" style={{ marginLeft: 10 }} />
          ),
          headerTitle: "마이페이지",
          headerRight: () => (
            <Medal_01 fill="#c2c2c2" style={{ marginRight: 10 }} />
          ),
          headerTitleAlign: "center",
        }}
      />
    </MypageStack.Navigator>
  );
}

function OrderListStackScreen() {
  return (
    <OrderListStack.Navigator>
      <OrderListStack.Screen
        name="OrderList"
        component={OrderList}
        options={{
          headerTitle: "주문내역",
          headerRight: () => (
            <Filter_01 fill="#c2c2c2" style={{ marginRight: 10 }} />
          ),
          headerTitleAlign: "center",
        }}
      />
    </OrderListStack.Navigator>
  );
}

const HomeStack = createStackNavigator();
const OrderListStack = createStackNavigator();
const AddStack = createStackNavigator();
const MypageStack = createStackNavigator();
const FeedStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator();
