import React, { Component } from 'react'
import {
    Text,
    View,
    SafeAreaView,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import R from '@R'
import DaiichiHeader from '@component/DaiichiHeader';
import NavigationUtil from '~/navigation/NavigationUtil';
export default class UserScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <DaiichiHeader
                    title="Thông tin tài khoản"
                />
                <SafeAreaView
                    style={styles.container}>
                    <View style={styles.user_info_block}>
                        <Image
                            style={styles.profile_picture}
                            source={R.images.ic_default_user}
                        />
                        <View style={styles.text_block_1}>
                            <View style={styles.txt_name_and_agency}>
                                <Text style={styles.txt_name} >
                                    Nguyễn Thị Thu Phương</Text>
                                <Text style={styles.txt_agency}>
                                    Đại lý</Text>
                            </View>
                            <TouchableOpacity
                                onPress = {()=>{
                                    NavigationUtil.navigate('updateUserInfo')
                                }}
                            >
                                <Text style={styles.txt_edit}>
                                    Chỉnh sửa thông tin</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.user_fuction_block}>
                        {this._getFuncBlock("Đơn hàng", R.images.ic_order)}
                        {this._getFuncBlock("Cửa hàng", R.images.ic_store)}
                        {this._getFuncBlock("Đơn hàng", require("../assets/images/ic_order.png"))}
                        {this._getFuncBlock("Cửa hàng", require("../assets/images/ic_store.png"))}
                        {this._getFuncBlock("Đơn hàng", require("../assets/images/ic_order.png"))}
                        {this._getFuncBlock("Cửa hàng", require("../assets/images/ic_store.png"), true)}

                    </View>
                </SafeAreaView>
            </View>
        )
    }

    // ham tra ve 1 view (function block)
    _getFuncBlock(title, imagePath, isLast = false) {
        return (
            <View>
                <View style={styles.function_block}>
                    <Image style={styles.img_func}
                        source={imagePath}
                    />
                    <Text style={styles.txt_func}> {title}</Text>
                    <Image
                        style={styles.arrow}
                        source={R.images.ic_arrow_right}
                    />
                </View>
                {!isLast && <View style={styles.line}></View>}
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFEFEF'
    },
    user_info_block: {
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    profile_picture: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginLeft: 25,
        marginVertical: 12,
        marginRight: 11
    },
    text_block_1: {
        flex: 1,
        justifyContent: 'center',
    },
    txt_name_and_agency: {
        width: '100%',
        flexDirection: 'row',
    },
    txt_name: {
        flex: 1,
        fontSize: 18,
        color: '#000000',
        marginBottom: 5,
        fontFamily: 'Roboto-Medium'
    },
    txt_agency: {
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
    },
    txt_edit: {
        fontSize: 14,
        color: '#707070',
        fontFamily: 'Roboto-Regular'
    },
    user_fuction_block: {
        marginTop: 5,
        marginBottom: 9,
        backgroundColor: 'white'
    },
    function_block: {
        flexDirection: 'row',
        marginLeft: 30,
        marginRight: 27,
        marginVertical: 12,
        alignItems: 'center'
    },
    img_func: {
        width: 22,
        height: 22,
        resizeMode: 'contain'
    },
    txt_func: {
        marginLeft: 17,
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        flex: 1
    },
    arrow: {
        width: 10,
        height: 18
    },
    line: {
        marginLeft: 30,
        marginRight: 27,
        height: 2,
        backgroundColor: '#8B8B8B'
    },
    header: {
        backgroundColor: "#12A74E"
    },
    haeder_title: {
        fontSize: 18,
        color: 'white',
        // flex :1 ,
        // backgroundColor : 'red'
    }
})


