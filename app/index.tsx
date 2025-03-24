import { Stack, useRouter } from 'expo-router';
import { useState, useEffect } from 'react';
import { Button } from '~/components/ui/Button';
import { TextInput } from '~/components/ui/TextInput';
import { Container } from '~/components/Container';
import { ColorGridCard } from '~/components/ui/ColorGridCard';
import { Text, StyleSheet, Alert, View } from 'react-native';
import { Header } from '~/components/Header';
import { useBet } from '~/context/BetContext';

export default function MainScreen() {
  const router = useRouter();
  const { color, handleBet, earnings, bet, gameIsOver, resetGame } = useBet();
  const [inputBet, setInputBet] = useState('');
  const [validationError, setValidationError] = useState('');

  useEffect(() => {
    if (gameIsOver) {
      Alert.alert(
        "Game Over",
        "You've lost all your earnings!",
        [{ text: "Restart", onPress: resetGame }]
      );
    }
  }, [gameIsOver]);

  const handlePlaceBet = () => {
    if (!color) {
      setValidationError('Please select a color first');
      return;
    }

    const betAmount = Number(inputBet);
    if (isNaN(betAmount) || betAmount <= 0) {
      setValidationError('Please enter a valid bet amount');
      return;
    }

    if (betAmount > earnings) {
      setValidationError('Bet amount cannot exceed your current earnings');
      return;
    }

    // Everything is valid
    setValidationError('');
    handleBet(inputBet);
    router.push('/colorSelection');
  };

  const colorName = color ? color.charAt(0).toUpperCase() + color.slice(1) : 'None';

  return (
    <>
      <Header />
      <Container>
        <Text style={styles.BigText}>Choose your color</Text>
        <ColorGridCard />
        <Text style={styles.smallText}>Your chosen color is</Text>
        <Text style={[styles.BigText, { color: color || '#000' }]}>{colorName}</Text>
        
        <TextInput 
          placeholder="Enter your bet" 
          keyboardType="numeric"
          value={inputBet}
          onChangeText={setInputBet}
        />
        
        {validationError ? <Text style={styles.errorText}>{validationError}</Text> : null}
        
        <Button title="PLACE BET" onPress={handlePlaceBet} />
        
        <Text style={styles.earnings}>Current earnings: ₱ {earnings}</Text>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  smallText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: -10,
  },
  BigText: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
  earnings: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  }
});
