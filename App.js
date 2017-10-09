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
            flavorText: 'You can press any button you choose!'
        };

        this.handleTopBtnPress = this.handleTopBtnPress.bind(this);
        this.handleBottomBtnPress = this.handleBottomBtnPress.bind(this);
        this.handleLeftBtnPress = this.handleLeftBtnPress.bind(this);
        this.handleRightBtnPress = this.handleRightBtnPress.bind(this);
    }

    handleTopBtnPress() {
        this.setState({flavorText: 'Top Button Pressed'});
    }

    handleBottomBtnPress() {
        this.setState({flavorText: 'Bottom Button Pressed'});
    }

    handleLeftBtnPress() {
        this.setState({flavorText: 'Left Button Pressed'});
    }

    handleRightBtnPress() {
        this.setState({flavorText: 'Right Button Pressed'});
    }

    render() {
        return (
            <View style={ styles.container }>
                <Button title="Top Button" onPress={ this.handleTopBtnPress } />

                <View style={ styles.row }>
                    <Button title="Left Button" onPress={ this.handleLeftBtnPress } />
                    <Text style={ styles.textContent }>
                        { this.state.flavorText }
                    </Text>
                    <Button title="Right Button" onPress={ this.handleRightBtnPress } />
                </View>

                <Button title="Bottom Button" onPress={ this.handleBottomBtnPress } />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
        marginTop: 20,
        marginBottom: 20,
    },
    row: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textContent: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        flexWrap: 'wrap',
    },
});
