import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { CView } from './src/components/CView';
import { Home } from './src/pages';
import { Template } from './src/components/Template';
import { COLOR } from './src/design';

export default function App() {
  return (
    <CView style={styles.container}>
      <Template>
        <Home />
      </Template>
      <StatusBar style="dark" backgroundColor={COLOR}  />
    </CView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
