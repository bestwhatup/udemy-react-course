// Import a library to help create a component.
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/component/Header';
import AlbumsList from './src/component/AlbumList';

// Create a component
const App = () => (
    <View>
        <Header headerText={'Albums'} />
        <AlbumsList />
    </View>
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
