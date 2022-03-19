  import { StatusBar } from 'expo-status-bar';
  import { StyleSheet, Text, View, Button,TouchableOpacity } from 'react-native';

  export default function HomeEmptyView() {
      return(
          <View style={styles.container}>
          <Text style={{color: '#000', fontSize: 100}}>
          Add stuff</Text>
          {/* <Button title="Add Course"></Button> */}
          <TouchableOpacity style={styles.buttontext}><Text>ADD A SUB</Text></TouchableOpacity>
          <StatusBar style="auto" />
          </View>
          
      )
  }

  const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttontext:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#524',
      }
    });