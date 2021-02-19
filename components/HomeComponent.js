import React, { Component } from 'react';
import { View, Text, FlatList, ScrollView, StyleSheet } from 'react-native';
import { Tile, Card, Button } from 'react-native-elements';
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
                <Text style={styles.pageHeader}>Our Model</Text>
                <FlatList 
                    data={this.state.model}
                    keyExtractor={item => item.id.toString()}
                    renderItem={renderModel}
                />
                <Button 
                    title='Contact Us'
                    type='solid'
                    buttonStyle={styles.button}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    pageHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 10
    },
    button: {
        margin: 40,
        fontSize: 20
    }
})

export default Home;