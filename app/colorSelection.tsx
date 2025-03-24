import { useEffect } from 'react';
import { Stack, useRouter } from 'expo-router';
import { Button } from '~/components/ui/Button';
import { Container } from '~/components/Container';
import { Header } from '~/components/Header';
import { useBet } from '~/context/BetContext';
import { Text, View, StyleSheet } from 'react-native';

export default function ColorSelectionScreen() {
  const router = useRouter();
  const { color, bet, name, earnings, results, generateRandomColors } = useBet();

  useEffect(() => {
    // Generate random colors when the screen loads
    generateRandomColors();
  }, []);

  const countMatches = () => {
    return results.filter(result => result === color).length;
  };

  const getResultMessage = () => {
    const matches = countMatches();
    const betAmount = parseInt(bet, 10);
    
    if (matches === 3) {
      return `Congratulations! You won ₱${betAmount * 3}!`;
    } else if (matches === 2) {
      return `Good job! You won ₱${betAmount * 2}!`;
    } else if (matches === 1) {
      return `You won ₱${betAmount}!`;
    } else {
      return `Sorry, you lost ₱${betAmount}.`;
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Text style={styles.title}>Results</Text>
        
        <View style={styles.playerInfo}>
          <Text style={styles.playerName}>Player: {name}</Text>
          <Text style={styles.playerBet}>Bet: ₱{bet}</Text>
          <Text style={styles.playerColor}>Chosen Color: <Text style={{ color }}>{color}</Text></Text>
        </View>
        
        <Text style={styles.subtitle}>Random Colors:</Text>
        <View style={styles.colorResults}>
          {results.map((resultColor, index) => (
            <View 
              key={index} 
              style={[styles.colorCircle, { backgroundColor: resultColor }]} 
            />
          ))}
        </View>
        
        <Text style={styles.resultMessage}>{getResultMessage()}</Text>
        
        <Text style={styles.earnings}>Current Earnings: ₱{earnings}</Text>
        
        <View style={styles.buttonContainer}>
          <Button 
            title="Play Again" 
            onPress={() => router.back()} 
            style={styles.button}
          />
        </View>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  playerInfo: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  playerName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  playerBet: {
    fontSize: 16,
    marginTop: 5,
  },
  playerColor: {
    fontSize: 16,
    marginTop: 5,
    fontWeight: 'bold',
  },
  colorResults: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
  },
  colorCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    margin: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  resultMessage: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#1fab89',
  },
  earnings: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    marginVertical: 10,
  },
});
