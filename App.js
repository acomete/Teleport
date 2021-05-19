import Video360 from 'react-native-video360plugin';
import React, {useState} from 'react';
import {Image, Modal, StyleSheet, Text, ScrollView, TouchableHighlight, View} from 'react-native';
import Agent from './Agent';

export default function App() {
    const [play, setPlay] = useState(false);
    const [selected, setSelected] = useState(null);

    return (
        <>
            <Modal
                visible={play}
                transparent={true}
                animationType="slide"
            >
                <View style={styles.modal}>
                    <Video360
                        urlVideo={'https://www.6science.fr/voulez-vous.mp4'}
                        modeVideo={1}
                        enableCardboardButton={false}
                        enableInfoButton={false}
                        style={styles.vr}
                    />
                    <TouchableHighlight
                        style={styles.closeButton}
                        onPress={() => {
                            setPlay(false);
                        }}>
                        <Text style={styles.closeButtonText}>Se déconnecter</Text>
                    </TouchableHighlight>
                </View>
            </Modal>
            <View style={styles.container}>
                <Image style={styles.logo} source={require('./src/assets/images/teleport-logo.png')}/>
                <Text style={styles.text}>(912) agents sur le terrain</Text>
                <ScrollView style={styles.agents}>
                    <Agent onPress={() => setSelected(2)} selected={selected === 2} name={'Amine'} location={'Paris'} coords={'48.86, 2.35'} face={2} online={false}/>
                    <Agent onPress={() => setSelected(3)} selected={selected === 3} name={'Malaïka'} location={'Paris'} coords={'48.12, 2.80'} face={3} online={false}/>
                    <Agent onPress={() => setSelected(5)} selected={selected === 5} name={'Rawad'} location={'Paris'} coords={'48.52, 2.43'} face={5} online={false}/>
                    <Agent onPress={() => setSelected(7)} selected={selected === 7} name={'Pablo'} location={'Pontoise'} coords={'43.29, 6.02'} face={7} online={false}/>
                    <Agent onPress={() => setSelected(8)} selected={selected === 8} name={'Zineb'} location={'Massy'} coords={'43.98, 4.22'} face={8} online={false}/>
                    <Agent onPress={() => setSelected(4)} selected={selected === 4} name={'Clémence'} location={'Marseilles'} coords={'43.32, 5.41'} face={4} online={false}/>
                    <Agent onPress={() => setSelected(1)} selected={selected === 1} name={'Rudolphe'} location={'Bordeaux'} coords={'44.81, -0.61'} face={1} online={true}/>
                    <Agent onPress={() => setSelected(6)} selected={selected === 6} name={'Raymond'} location={'Chantilly'} coords={'42.56, 5.32'} face={6} online={false}/>
                </ScrollView>
                <TouchableHighlight
                    style={selected === 1 ? styles.openButton : styles.disabled}
                    onPress={() => {
                        if (selected === 1) {
                            setPlay(true);
                        }
                    }}>
                    <Text style={styles.openButtonText}>{selected === 1 ? 'Se téléporter' : !selected ? '...' : 'Agent inactif'}</Text>
                </TouchableHighlight>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        backgroundColor: '#222',
        flex: 1,
        marginHorizontal: 10,
        marginVertical: 20,
        flexDirection: 'column',
        borderRadius: 15,
    },
    logo: {
        width: 250,
        height: 70,
        resizeMode: 'contain',
    },
    openButton: {
        backgroundColor: '#6f963f',
        borderRadius: 12,
        padding: 10,
        marginHorizontal: 50,
        marginTop: 15,
        elevation: 2,
        width: 250,
    },
    disabled: {
        backgroundColor: '#111',
        borderRadius: 12,
        padding: 10,
        marginHorizontal: 50,
        marginTop: 15,
        elevation: 2,
        width: 250,
    },
    closeButton: {
        position: 'absolute',
        bottom: 15,
        left: 50,
        backgroundColor: '#000',
        borderRadius: 12,
        padding: 10,
        elevation: 2,
        width: 250,
    },
    openButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    closeButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    text: {
        color: '#FFF',
    },
    vr: {
        flex: 1,
        marginHorizontal: 5,
        marginBottom: 60,
        marginTop: 5,
        resizeMode: 'cover',
        /*transform: [{ rotateZ: '90deg' }]*/
    },
    agents: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 40,
        flexDirection: 'column',
        marginTop: 15,
    },
});
