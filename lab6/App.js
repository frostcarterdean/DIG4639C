import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
class App extends React.Component {
  render() {
      return (
        <View style={styles.container}>
          <Text style={{color: '#874b48'}}>My favorite video game is <i>Fire Emblem: Three Houses</i> (2019).</Text>
          <Text>&nbsp;</Text>
          <Text style={{color: '#874b48'}}>I like the game a lot because the writing is really good. The characters and their dynamics with one another are fascinating, the lore is deep, and the choice of four narrative paths gives credibility to consequence. The gameplay is fresh compared to other entries in the series, the art and music direction is superb, and it's overall equal parts fun and thought-provoking.</Text>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fab5b1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
