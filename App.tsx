import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { CView } from './src/components/CView';
import { Pages } from './src/pages';
import { COLOR } from './src/design';
import { ErrorsMessagesProvider, ErrorsShow } from './src/components/Errors';

export default function App() {
  return (
    <CView style={styles.container}>
      <ErrorsMessagesProvider>
        <Pages />
        <ErrorsShow />
      </ErrorsMessagesProvider>
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
