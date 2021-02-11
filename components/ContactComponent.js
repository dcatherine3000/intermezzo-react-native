import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Contact extends Component {

    static navigationOptions = {
        title: 'Contact Us'
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Contact Component</Text>
            </View>
        );
    }
}

export default Contact;