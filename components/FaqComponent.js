import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Faq extends Component {

    static navigationOptions = {
        title: 'Frequently Asked Questions'
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>FAQ Component</Text>
            </View>
        );
    }
}

export default Faq;