import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import {Header} from 'react-native-elements'

export default class DaiichiHeader extends Component {
    render() {
        return (
            <Header
                placement='left'
                containerStyle={styles.header}
                centerComponent={<Text
                    style={styles.haeder_title}
                >{this.props.title}</Text>}
            />
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#12A74E"
    },
    haeder_title: {
        fontSize: 18,
        color: 'white',
    }
})
