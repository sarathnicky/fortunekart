import React, { Component } from 'react';
import {Header, SearchBar } from 'react-native-elements';
import Slide from './Slide';
import {View, ScrollView} from 'react-native';

class App extends Component {

  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };




  render() {

    const { search } = this.state;


    return (
      
      <View style={{ flex: 3 }}>

      <Header
      leftComponent={{
        icon: 'menu',
        color: '#fff',
        onPress: () => navigation.openDrawer(),
     }}
     centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
     rightComponent={{ icon: 'home', color: '#fff' }}
    />

<SearchBar
        placeholder="Search"
        onChangeText={this.updateSearch}
        value={search}        
      />
      <View style={{height: 201}}>
    <Slide  />
    </View>
    
  </View>
    
    
    )
  }
}



export default App;