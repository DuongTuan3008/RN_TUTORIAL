import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Alert, Image} from 'react-native';
import i18 from '@i18';
import * as theme from '@theme';
import R from '@R';
export default class UserScreen extends Component {
  async componentDidMount() {}

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity>
          <Text>{R.strings.home}</Text>
          <Image
            style={{
              width: 100,
              height: 100,
            }}
            source={R.images.user}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
