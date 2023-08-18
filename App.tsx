import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { CView } from './components/CView';
import { CText } from './components/CText';

export default function App() {
  return (
    <CView style={styles.container}>
      <CText>Open up App.tsx to start working on your app!</CText>
      <StatusBar style="dark" />
    </CView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
