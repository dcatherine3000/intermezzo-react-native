import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Events extends Component {

    static navigationOptions = {
        title: 'Events'
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Events Component</Text>
            </View>
        );
    }
}

export default Events;