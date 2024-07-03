import { StatusBar } from 'react-native';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import HomeScreen from './Screens/HomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
