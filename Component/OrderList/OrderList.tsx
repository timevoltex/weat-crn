import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Container, Content, Card, CardItem } from "native-base";
import { SearchTab } from "../Home/Hometab";

export default function OrderList() {
  return (
    <Container>
      <SearchTab />
      <Content padder>
        <Card style={[style.borderTopRadius, style.borderBottomRadius, style.cardContainer]}>
          <CardItem style={{ flexDirection: "column", alignItems: "baseline" }}>
            <View style={style.spaceBetween}>
              <Text style={{color:'#9948fc', fontSize:12, fontWeight:'bold'}}>How</Text>
              <Text style={{color:'#707070', fontSize:12}}>Time</Text>
            </View>
            <Text style={{fontSize:18, fontWeight:'bold'}}>menu</Text>
            <View style={style.spaceBetween}>
              <Text style={{color:'#ccc', fontSize:12, textAlignVertical:'bottom'}}>store</Text>
              <Text style={{color:'#9948fc', fontSize:20, fontWeight:'bold'}}>price</Text>
            </View>
          </CardItem>
          <CardItem style={[style.borderBottomRadius, style.writeReview]}>
            <Text style={style.wrtieReviewText}>write review</Text>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}

const style= StyleSheet.create({
  spaceBetween:{
    width:'100%',
    justifyContent:'space-between',
    flexDirection:'row'
  },
  cardContainer:{
    overflow:'hidden'
  },
  borderBottomRadius:{
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10
  },
  borderTopRadius:{
    borderTopLeftRadius:10,
    borderTopRightRadius:10
  },
  writeReview:{
    backgroundColor:'#9948fc',
    justifyContent:'center'
  },
  completeReview:{
    backgroundColor:'#f2f2f2'
  },
  wrtieReviewText:{
    color:'#fff',
    textAlign:'center',
    fontSize:14,
    fontWeight:'bold'
  },
  completeReviewText:{
    color:'#707070'
  }
  
})