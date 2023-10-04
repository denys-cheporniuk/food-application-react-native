import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.searchBar}>
      <Feather name="search" style={styles.icon} />

      <TextInput
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Search"
        style={styles.input}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: '#F0EEEE',
    height: 40,
    margin: 15,
    borderRadius: 5,

    flexDirection: 'row'
  },

  input: {
    flex: 1,
    fontSize: 18,
  },

  icon: {
    fontSize: 30,
    alignSelf: 'center',
    marginHorizontal: 15,
  }
})

export default SearchBar;
