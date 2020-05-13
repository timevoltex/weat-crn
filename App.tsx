import 'react-native-gesture-handler'
import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import Hometab from './Component/Home/Hometab';
import Detail from './Component/Home/Detail'
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Add from './Component/Add/Add';
import OrderList from './Component/OrderList/OrderList';
import Mypage from './Component/Mypage/Mypage';
import Feed from './Component/Feed/Feed';
import HomeIcon from './assets/svgicon/Home_01.js'
import FeedIcon from './assets/svgicon/Feed_01.js'
import AddIcon from './assets/svgicon/Plus_01.js'
import OrderListIcon from './assets/svgicon/Orderlist_01.js'
import MypageIcon from './assets/svgicon/Mypage_01.js'

import Location from './assets/svgicon/Location_01.js';
import GPS from './assets/svgicon/Gps_01.js';
import OrderPage from './Component/Home/OrderPage';



export default function App() {
  return (
    <NavigationContainer>

   <Tab.Navigator
   screenOptions={({route}) => ({
     tabBarIcon:({color}) => {
      if(route.name ==="FeedTab"){
        return <FeedIcon fill={color}/>
      }
      else if(route.name ==="AddTab"){
        return <AddIcon fill={color}/>
      }
      else if(route.name ==="OrderListTab"){
        return <OrderListIcon fill={color}/>
      }
      else if(route.name ==="MypageTab"){
        return <MypageIcon fill={color}/>
      }
      else{
        return <HomeIcon fill={color}/>
      }
     }
   })}
    tabBarOptions={{
      activeTintColor:'#9948fc',
      inactiveTintColor: "#acacac",
      showLabel:false,
    }}
    >
      <Tab.Screen name="HomeTab" component={HomeStackScreen}/>
      <Tab.Screen name="FeedTab" component={FeedStackScreen}/>
      <Tab.Screen name="AddTab" component={AddStackScreen}/>
      <Tab.Screen name="OrderListTab" component={OrderListStackScreen}/>
      <Tab.Screen name="MypageTab" component={MypageStackScreen}/>
    </Tab.Navigator>
    </NavigationContainer>
  );
}

function HomeStackScreen(){
  return(

      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={Hometab} options={{
          headerTitle: '현재 주소',
          headerLeft: () => (
            <Location fill="#a2a2a2" width={28} height={28} style={{marginLeft:10}}/>
          ),
          headerTitleAlign:'center',
          headerRight: () => (
            <GPS fill="#a2a2a2" width={28} height={28} style={{marginRight:10}}/>
          )
        }}/>
        <HomeStack.Screen name="Detail" component={Detail}/>
        <HomeStack.Screen name="OrderPage" component={OrderPage}/>
      </HomeStack.Navigator>

  )
}
function FeedStackScreen(){
  return(
    <FeedStack.Navigator>
      <FeedStack.Screen name="Feed" component={Feed} options={{
      headerTitleAlign:'center',
      headerTitle:"현재주소",
      headerRight:() => (<GPS fill="#c2c2c2" style={{marginRight:10}}/>)
      }}/>
    </FeedStack.Navigator>
  )
}
function AddStackScreen(){
  return(
    <AddStack.Navigator>
      <AddStack.Screen name="Feed" component={Add}/>
    </AddStack.Navigator>
  )
}
function MypageStackScreen(){
  return(
    <MypageStack.Navigator>
      <MypageStack.Screen name="Feed" component={Mypage}/>
    </MypageStack.Navigator>
  )
}

function OrderListStackScreen(){
  return(
    <OrderListStack.Navigator>
      <OrderListStack.Screen name="OrderList" component={OrderList}/>
    </OrderListStack.Navigator>
  )
}


const HomeStack = createStackNavigator();
const OrderListStack = createStackNavigator();
const AddStack = createStackNavigator();
const MypageStack = createStackNavigator();
const FeedStack = createStackNavigator();
const Tab = createBottomTabNavigator();

