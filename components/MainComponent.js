import React, { Component } from 'react';
import Home from './HomeComponent';
import About from './AboutComponent';
import Events from './EventsComponent';
import Faq from './FaqComponent';
import Contact from './ContactComponent';
import { View, Platform } from 'react-native';
import { Icon } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: 'black'
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                color: 'white'
            },
            headerLeft: <Icon
                            name='list'
                            type='font-awesome'
                            color='white'
                            onPress={() => navigation.toggleDrawer()}
                        />
        })
    }
);

const AboutNavigator = createStackNavigator(
    {
        About: { screen: About }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: 'black'
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                color: 'white'
            },
            headerLeft: <Icon
                            name='list'
                            type='font-awesome'
                            color='white'
                            onPress={() => navigation.toggleDrawer()}
                        />
        })
    }
);

const EventsNavigator = createStackNavigator(
    {
        Events: { screen: Events }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: 'black'
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                color: 'white'
            },
            headerLeft: <Icon
                            name='list'
                            type='font-awesome'
                            color='white'
                            onPress={() => navigation.toggleDrawer()}
                        />
        })
    }
);

const FaqNavigator = createStackNavigator(
    {
        Faq: { screen: Faq }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: 'black'
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                color: 'white'
            },
            headerLeft: <Icon
                            name='list'
                            type='font-awesome'
                            color='white'
                            onPress={() => navigation.toggleDrawer()}
                        />
        })
    }
);

const ContactNavigator = createStackNavigator(
    {
        Contact: { screen: Contact }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: 'black'
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                color: 'white'
            },
            headerLeft: <Icon
                            name='list'
                            type='font-awesome'
                            color='white'
                            onPress={() => navigation.toggleDrawer()}
                        />
        })
    }
);

const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        About: { screen: AboutNavigator },
        Events: { screen: EventsNavigator },
        FAQ: { screen: FaqNavigator },
        Contact: { screen: ContactNavigator }
    },
    {
        drawerBackgroundColor: 'white'
    }
)

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
                }}>
                <AppNavigator />
            </View>
        );
    }
}

export default Main;