import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const FunctionalScreen = props => {
    const [count, setCount] = useState(0);
        return (
            <View style={styles.screen}>
                <Text style={styles.textUpper}>Functional Component</Text>
                <Text style={styles.textUpper}>Count: {count} times</Text>

                <View style={styles.fixToText}>
                <Pressable style={styles.buttonMinus} onPress={() => {setCount(count - 1)}} >
                    <Text style={styles.text}>-</Text>
                </Pressable>
                <Pressable style={styles.buttonPlus} onPress={() => {setCount(count + 1)}} >
                    <Text style={styles.text}>+</Text>
                </Pressable>
                </View>

                <Pressable style={styles.button} onPress={() => {props.navigation.navigate({routeName: 'ClassScreen'})}} >
                    <Text style={styles.text}>Go to Class Component Example</Text>
                </Pressable>
            </View>    
        )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        margin: 10,
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

export default FunctionalScreen;