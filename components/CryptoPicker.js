import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Picker } from '@react-native-picker/picker';
import style from '../style/style';

export default function CryptoPicker({ getCrypto, listAPI }) {
  const [selectedCrypto, setSelectedCrypto] = useState("bitcoin");
  const [cryptoList, setCryptoList] = useState([
    {
      "id": "bitcoin",
      "symbol": "btc",
      "name": "Bitcoin",
      "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
    }]);

  useEffect(() => {
    FetchCryptos()
  }, [listAPI]);

  function FetchCryptos() {
    fetch(listAPI)
      .then(res => res.json())
      .then(
        (result) => {
          let cryptos = Array.from(result);
          setCryptoList(cryptos);
        },
        (error) => {
          alert("Error!")
        }
      )
  }

  return (
    <View style={style.slotContainer}>
      <Text style={style.text}>Select crypto</Text>
      <Picker
        style={style.field}
        selectedValue={selectedCrypto}
        onValueChange={(itemValue) => {
          getCrypto(itemValue);
          setSelectedCrypto(itemValue);
        }}>
        {cryptoList.map((crypto) => (
          <Picker.Item label={crypto.name} value={crypto.id} key={crypto} />
        ))}
      </Picker>
    </View>
  )
}