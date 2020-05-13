import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Container, Content, Card, CardItem } from "native-base";
import { SearchTab } from "../Home/Hometab";

export default function OrderList() {
  return (
    <Container>
      <SearchTab />
      <Content>
        <Card>
          <CardItem style={{ flexDirection: "column", alignItems: "baseline" }}>
            <Text style={{ width: "100%", justifyContent: "space-between" }}>
              <Text>How</Text>
              <Text>Time</Text>
            </Text>
            <Text>store</Text>
            <Text>
              <Text>menu</Text>
              <Text>price</Text>
            </Text>
          </CardItem>
          <CardItem>
            <Text>write review</Text>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}
