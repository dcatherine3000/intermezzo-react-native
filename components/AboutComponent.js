import React, { Component } from 'react';
import { View, Text } from 'react-native';

class About extends Component {

    static navigationOptions = {
        title: 'About Us'
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>About Component</Text>
            </View>
        );
    }
}

export default About;