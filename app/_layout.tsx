import { Stack } from 'expo-router';
import { BetProvider } from '~/context/BetContext';

export default function Layout() {
  return (
    <BetProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="colorSelection" options={{ 
          title: 'Color Results',
          gestureEnabled: false,
        }} />
      </Stack>
    </BetProvider>
  );
}
