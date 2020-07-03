import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import theme from '../constants/theme';

type Props = {
  searchText: string;
  onChangeText: (value: string) => void;
};

export default function SearchBar(props: Props) {
  let {searchText, onChangeText} = props;
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="calendar-search"
        color={theme.colors.secondary}
        size={24}
        style={styles.icon}
      />
      <TextInput
        style={styles.textInput}
        value={searchText}
        onChangeText={onChangeText}
        placeholder="Search for items, destinations..."
        autoCapitalize="none"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection: 'row',
    width: 260,
  },
  icon: {
    paddingHorizontal: 10,
  },
  textInput: {
    flex: 1,
    height: 40,
    color: 'black',
    borderRadius: 4,
    paddingRight: 10,
  },
});
