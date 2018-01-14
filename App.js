import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation'

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome'
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <View>
        <Text>Hello, nav!</Text>
        <Button title="chat" onPress={() => navigate('Chat', { user: 'vasko' })} />
      </View>
    )

  }
}

class ChatScreen extends Component {
  static navigationOptions = {
    title: 'Chat with ..'
  }

  render() {
    const { user } = this.props.navigation.state.params
    return (
      <View>
        <Text>
          Chat with {user}
        </Text>
      </View>
    )
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen }
})

export default class App extends Component {
  render() {
    return <SimpleApp />
  }
}



// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });