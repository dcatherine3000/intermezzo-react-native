import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Tile, Card } from 'react-native-elements';

class About extends Component {

    static navigationOptions = {
        title: 'About Us'
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
                <Tile 
                    title='Welcome!'
                    featured
                    imageSrc={require('./images/piano.jpg')}
                />
                <Card>
                    <Text>We at Intermezzo Studios believe that musicians thrive in an environment where they are able to collaborate with other musicians and artists at every opportunity. Our model is holistic, focusing on the musician's journey from beginning to end. We offer lessons for musicians of all ages and skill levels. Our instructors come from diverse backgrounds and offer lessons in a variety of styles.</Text>
                </Card>
                <Card>
                    <Text>Performance is an important aspect of a musician's growth, which is why we offer so many opportunities for performance at Intermezzo. Not only do our students have the opportunity to perform in studio recitals, but they may also find opportunities to collaborate with other musicians to organize their own performances in our spaces.</Text>
                </Card>
                <Card> 
                    <Text>Between our small recording studio and our rehearsal spaces, local musicians will find plenty of opportunities to shine at Intermezzo. Rentals are available for nearly all our spaces, and being part of our community of musicians provides ample opportunity to find other gigs as well.</Text>
                </Card>
            </ScrollView>
        );
    }
}

export default About;