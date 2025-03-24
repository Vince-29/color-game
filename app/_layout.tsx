import { Slot } from 'expo-router';
import { BetProvider } from '~/context/BetContext';

export default function Layout() {
  return (
    <BetProvider>
      <Slot />
    </BetProvider>
  );
}
