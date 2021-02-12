import React, { Component } from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import { Tile, Divider, Card, Image } from 'react-native-elements';
import { MODEL } from '../shared/model';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            model: MODEL
        };
    }

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        const { navigate } = this.props.navigation;
        const renderModel = ({item}) => {
            return (
                <View>
                    <Card
                        title={item.name}>
                        <Text>{item.description}</Text>
                    </Card>
                </View>
            );
        }
        return (
            <ScrollView>
                <Tile 
                    title='Intermezzo Studios'
                    caption='Educate. Perform. Collaborate.'
                    featured
                    imageSrc={require('./images/stage.jpg')}
                />
                <Divider style={{ backgroundColor: 'black', height: 5 }}/>
                <Text>Our Model</Text>
                <FlatList 
                    data={this.state.model}
                    keyExtractor={item => item.id.toString()}
                    renderItem={renderModel}
                />
            </ScrollView>
        );
    }
}

export default Home;