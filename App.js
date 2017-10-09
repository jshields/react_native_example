import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
} from 'react-native';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            btnWasPressed: false
        };

        this.handleButtonPress = this.handleButtonPress.bind(this);
    }

    handleButtonPress() {
        this.setState({btnWasPressed: true});
    }

    render() {
        return (
            <View style={ styles.container }>
                <Text style={ styles.welcome }>
                    { this.state.btnWasPressed ? 'Good job!' : 'Press the button' }
                </Text>
                <Button title="The Button" onPress={ this.handleButtonPress } />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
