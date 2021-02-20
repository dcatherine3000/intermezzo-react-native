import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, Modal } from 'react-native';
import { Tile, Card, Button, Input } from 'react-native-elements';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone:'',
            feedback: '',
            showModal: false
        }
    }

    handleModal() {
        this.setState({showModal: !this.state.showModal})
    }

    submitForm() {
        console.log(this.state);
    }

    static navigationOptions = {
        title: 'Contact Us'
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
                <Tile
                    title='Contact Us'
                    titleStyle={{color: 'black'}}
                    featured
                    imageSrc={require('./images/map.jpg')}
                />
                <Card
                    title='Address'>
                    <Text>1234 Somewhere Street</Text>
                    <Text>Dreamland, USA 54321</Text>
                </Card>
                <Card
                    title='Phone'>
                    <Text>1-800-555-1234</Text>
                </Card>
                <Card
                    title='Email'>
                    <Text>contact@intermezzostudios.com</Text>
                </Card>
                <Button 
                    title='Contact Form'
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

export default Contact;