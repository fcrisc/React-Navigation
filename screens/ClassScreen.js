import React, {Component} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

class ClassScreen extends Component {
    constructor () {
        super();
        this.state = {
          counter: 0
        };
      }
      incrementCount () {
        this.setState({
          counter: this.state.counter + 1
        });
      }
      decrementCount () {
        this.setState({
          counter: this.state.counter - 1
        });
      }
    render () {
        return (
            <View style={styles.screen}>
                <Text style={styles.textUpper}>Class Component Example</Text>
                <Text style={styles.textUpper}>Count: {this.state.counter} times</Text>
                <View style={styles.fixToText}>
                <Pressable style={styles.buttonMinus} onPress={this.decrementCount.bind(this)} >
                    <Text style={styles.text}>-</Text>
                </Pressable>
                <Pressable style={styles.buttonPlus} onPress={this.incrementCount.bind(this)} >
                    <Text style={styles.text}>+</Text>
                </Pressable>
                </View>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonPlus: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'green',
        margin: 10,
      },
      buttonMinus: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'blue',
        margin: 10,
      },
    text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    },
    textUpper: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'normal',
        letterSpacing: 0.25,
        color: 'black',
        margin: 5
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
});

export default ClassScreen;

