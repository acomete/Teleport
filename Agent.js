import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';

const Agent = (props) => {
    const { name, face, location, online, coords, selected, onPress } = props;
    const teleporter = require('./src/assets/images/teleporter-square.jpg');
    let image;

    if (face === 1) {
        image = require('./src/assets/images/face1.jpg');
    }
    if (face === 2) {
        image = require('./src/assets/images/face2.jpg');
    }
    if (face === 3) {
        image = require('./src/assets/images/face3.jpg');
    }
    if (face === 4) {
        image = require('./src/assets/images/face4.jpg');
    }
    if (face === 5) {
        image = require('./src/assets/images/face5.jpg');
    }
    if (face === 6) {
        image = require('./src/assets/images/face6.jpg');
    }
    if (face === 7) {
        image = require('./src/assets/images/face7.jpg');
    }
    if (face === 8) {
        image = require('./src/assets/images/face8.jpg');
    }

    return (<TouchableHighlight onPress={onPress}>
        <View style={[styles.container, selected ? online ? styles.selected : styles.selectedOffline : null]}>
            <View style={styles.face}>
                {(!selected || !online) && <Image style={styles.image} source={image}/>}
                {selected && online && <Image style={styles.image} source={teleporter}/>}
            </View>
            <View style={styles.infos}>
                <Text style={styles.text}>{name}</Text>
                <Text style={styles.location}>{location} {coords}</Text>
            </View>
            <View style={online ? styles.online : styles.offline}>
            </View>
        </View>
    </TouchableHighlight>);
    s;
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1b1b1b',
        borderRadius: 10,
        height: 'auto',
        flexDirection: 'row',
        width: '100%',
        paddingVertical: 15,
        paddingHorizontal: 20,
        alignItems: 'center',
        marginBottom: 15,
    },
    selected: {
        backgroundColor: '#6f963f',
    },
    selectedOffline: {
        backgroundColor: '#96000f',
    },
    face: {
        flex: 2,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
    },
    location: {
        color: '#eee',
        fontSize: 12,
        marginTop: 5,
    },
    infos: {
        flex: 4,
        marginLeft: 30,
        flexDirection: 'column',
    },
    online: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#b2ff00',
    },
    offline: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#ff1041',
    },
});

export default Agent;
