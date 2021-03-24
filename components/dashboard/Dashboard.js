import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

const Dashboard = () => {

    const [newPlayer, setNewPlayer] = useState();
    const [players, setPlayers] = useState([]);

    const handleEnteredPlayer = (enteredText) => {
        setNewPlayer(enteredText);
    }

    const handleNewPlayer = () => {
        setPlayers(currentPlayers => [...currentPlayers, newPlayer])
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
            <View style={styles.playersList}>
                {players.map((player) => <Text>{player}</Text>)}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    dashboardContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    addPlayerContainer: {
        flex: 3,
        justifyContent: 'center',
    },
    addPlayerInput: {
      borderBottomColor: '#333333',
      borderBottomWidth: 1,
    },
    playersList: {
        flex: 2,
        flexDirection: 'column-reverse',
        justifyContent: 'flex-end',
        alignItems: 'center',
    }
  });

export default Dashboard;