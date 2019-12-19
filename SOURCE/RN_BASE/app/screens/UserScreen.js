import React, {Component} from 'react';
import {Text, View, SafeAreaView, Image} from 'react-native';

export default class UserScreen extends Component {
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#FFFFFF',
        }}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'white',
          }}>
          <Image
            style={{
              width: 50,
              height: 50,
              backgroundColor: 'blue',
              borderRadius: 25,
              marginRight: 11,
              marginLeft: 25,
              marginBottom: 12,
              marginTop: 12,
            }}
            source={require('../assets/images/ic_home.png')}
          />
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              backgroundColor: 'white',
            }}>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                backgroundColor: 'white',
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  flex: 1,
                  alignContent: 'center',
                }}>
                Nguyễn Thị Thu Phương
              </Text>
              <Text
                style={{
                  color: 'white',
                  backgroundColor: '#EA4335',
                  fontSize: 12,
                  overflow: 'hidden',
                  borderRadius: 3,
                }}>
                Đại lý
              </Text>
            </View>
            <Text>Chỉnh sửa thông tin</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
