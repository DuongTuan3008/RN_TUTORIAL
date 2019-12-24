import React, { Component } from 'react'
import {
    Text,
    View,
    SafeAreaView,
    Image
} from 'react-native'

export default class UserScreen extends Component {
    render() {
        return (
            <SafeAreaView
                style={{
                    flex: 1,
                    backgroundColor: '#EFEFEF'
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        backgroundColor: 'white'
                    }}
                >
                    <Image
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            marginLeft: 25,
                            marginVertical: 12,
                            marginRight: 11
                        }}
                        source={require('../assets/images/ic_default_user.png')}
                    />
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                        }}
                    >
                        <View
                            style={{
                                width: '100%',
                                flexDirection: 'row',
                            }}
                        >
                            <Text
                                style={{
                                    flex: 1,
                                    fontSize: 18,
                                    color: '#000000',
                                    marginBottom: 5,
                                    fontFamily: 'Roboto-Medium'
                                }}
                            >Nguyễn Thị Thu Phương</Text>
                            <Text
                                style={{
                                    textAlignVertical: "center",
                                    textAlign: 'center',
                                    backgroundColor: '#EA4335',
                                    marginRight: 10,
                                    paddingHorizontal: 9,
                                    paddingVertical: 3,
                                    fontSize: 17,
                                    borderRadius: 10,
                                    overflow: 'hidden',
                                    color: 'white',
                                    fontFamily: 'Roboto-Regular'
                                }}
                            >Đại lý</Text>
                        </View>
                        <Text
                            style={{
                                fontSize: 14,
                                color: '#707070',
                                fontFamily: 'Roboto-Regular'
                            }}
                        >Chỉnh sửa thông tin</Text>
                    </View>
                </View>
                <View>
                    <View>
                        
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}
