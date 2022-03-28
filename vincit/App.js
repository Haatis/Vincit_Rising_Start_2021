import { Text, View, Button, Pressable } from 'react-native';
import React, { useState } from "react";
import DatePicker from './components/DatePicker';
import Chart from './components/Chart';
import Header from './components/Header';
import Footer from './components/Footer';
import styles from './style/style';
import MaximizeProfit from './components/MaximizeProfit';

export default function App() {

  const [parentData, setParentData] = useState([]);

  /*   const childToParent = (asd) => {
      setData(asd.prices);
    } */

  const childToParent = (childData) => {
    setParentData(childData);
  }
  const [showChart, setShowChart] = useState(false);

  return (
    <View>
      <Header />
      <DatePicker childToParent={childToParent} />
      {showChart ? (
        <Text>Bitcoin price Chart</Text>,
        <Chart parentData={parentData} />
        ) : null}
      <Pressable>
        <Button title="show/hide price chart" onPress={() => setShowChart(!showChart)}/>
      </Pressable>
      <MaximizeProfit parentData={parentData} />
      <Text>This is a test1</Text>
      <Footer />
    </View>
  );
}

