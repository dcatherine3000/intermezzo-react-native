import React, { Component } from 'react';
import { View, Text, FlatList, ScrollView, StyleSheet, Modal } from 'react-native';
import { Tile, Card, Button, Input } from 'react-native-elements';
import { MODEL } from '../shared/model';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            model: MODEL,
            firstName: '',
            lastName: '',
            email: '',
            phone:'',
            feedback: '',
            showModal: false
        };
    }

    handleModal() {
        this.setState({showModal: !this.state.showModal})
    }

    submitForm() {
        console.log(this.state.firstName, this.state.lastName, this.state.email, this.state.phone, this.state.feedback);
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
                    onPress={() => this.handleModal()}
                />
                <Modal visible={this.state.showModal}>
                    <View style={styles.container}>
                        <Text style={styles.pageHeader}>Contact Form</Text>
                        <Input 
                            placeholder='First Name'
                            onChangeText={firstName => this.setState({firstName})}
                            value={this.state.firstName}
                        />
                        <Input 
                            placeholder='Last Name'
                            onChangeText={lastName => this.setState({lastName})}
                            value={this.state.lastName}
                        />
                        <Input 
                            placeholder='Email'
                            onChangeText={email => this.setState({email})}
                            value={this.state.email}
                        />
                        <Input 
                            placeholder='Phone Number'
                            onChangeText={phone => this.setState({phone})}
                            value={this.state.phone}
                        />
                        <Input 
                            placeholder='Questions and Comments Here'
                            onChangeText={feedback => this.setState({feedback})}
                            value={this.state.feedback}
                        />
                        <Button 
                            title='Submit'
                            type='solid'
                            buttonStyle={styles.button}
                            onPress={() => {
                                this.submitForm();
                                this.handleModal();
                            }}
                        />
                    </View>
                </Modal>
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
        fontSize: 20,
        backgroundColor: 'grey'
    },
    container: {
        margin: 10
    }
});

export default Home;