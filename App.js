import React, { Component} from 'react';
import Expo from 'expo';
import { Root } from './App/Components/Router';

export default class App extends React.Component {
  render() {
    return <Root/>;
  }
}

const colors = {
    hex: {
      blue: '#2196F3',
      green: '#8BC34A',
      orange: '#e3aa1a',
    }
}
