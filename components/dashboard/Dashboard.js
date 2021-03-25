import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView} from 'react-native';

const Dashboard = () => {

    const [newPlayer, setNewPlayer] = useState();
    const [players, setPlayers] = useState([]);

    const handleEnteredPlayer = (enteredText) => {
        setNewPlayer(enteredText);
    }

    const handleNewPlayer = () => {
        //todo if not empty
        if(newPlayer.trim() === '') {
            return;
        }
        
        setPlayers(currentPlayers => [...currentPlayers, newPlayer]);
        setNewPlayer('');
    }

    return (
        <View style={styles.dashboardContainer}>
            <View style={styles.addPlayerContainer}>
                <Text>Hello there :)</Text>
                <TextInput placeholder="Name" 
                            style={styles.addPlayerInput}
                            onChangeText={handleEnteredPlayer}
                            value={newPlayer}/>
                <Button title='Add player'
                        onPress={handleNewPlayer}/>                
            </View>
            <ScrollView contentContainerStyle={styles.playersList}>
                {players.map((player) => <Text>{player}</Text>)}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    dashboardContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    addPlayerContainer: {
        flex: 2,
        justifyContent: 'center',
    },
    addPlayerInput: {
      borderBottomColor: '#333333',
      borderBottomWidth: 1,
    },
    playersList: {
        // flex: 2,
        flexDirection: 'column-reverse',
        justifyContent: 'flex-end',
        alignItems: 'center',
    }
  });

export default Dashboard;