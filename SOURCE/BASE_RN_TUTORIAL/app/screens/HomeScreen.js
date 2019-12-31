import React, { Component } from 'react';
import { View, Text } from 'react-native';
import DaiichiHeader from '~/components/DaiichiHeader';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{
                flex: 1
            }}>
               <DaiichiHeader
                title = 'Trang chủ'
               />
            </View>
        );
    }
}
