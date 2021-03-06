import * as Font from 'expo-font';
import React from 'react';
import { AppLoading } from 'expo';
import { Container, Text } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false
        };
    }

    async componentDidMount() {
        await Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font
        });
        this.setState({ isReady: true });
    }

    render() {
        const { isReady } = this.state;

        if (!isReady) {
            return <AppLoading />;
        }

        return (
            <Container>
                <Text>Open up App.js to start working on your app!</Text>
            </Container>
        );
    }
}
