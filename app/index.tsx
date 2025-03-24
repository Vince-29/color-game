import { Stack, Link } from 'expo-router';

import { Button } from '~/components/ui/Button';
import { TextInput } from '~/components/ui/TextInput';
import { Container } from '~/components/Container';
import { ColorGridCard } from '~/components/ui/ColorGridCard';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { Header } from '~/components/Header';

export default function MainScreen() {
  return (
    <>
        <Header></Header>
      <Container>
        <Text style={styles.BigText}> Choose your color </Text>
        <ColorGridCard></ColorGridCard>
        <Text style={styles.smallText}> Your chosen color is </Text>
        <Text style={styles.BigText}> RED </Text>
        <TextInput placeholder="Enter your name" />
        <Button title="PLACE BET" />

        {/* 
        <Link href={{ pathname: '/details', params: { name: 'Dan' } }} asChild>
          <Button title="Show Details" />
        </Link> */}
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
});
