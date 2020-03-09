import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Alert, ImageBackground } from 'react-native';
//import {uuid} from 'uuidv4';

import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      text: 'Milk',
    },
    {
      id: 2,
      text: 'Eggs',
    },
    {
      id: 3,
      text: 'Bread',
    },
    {
      id: 4,
      text: 'Juice',
    },
  ]);

  // Flag true if user is currently editing an item
  const [editStatus, editStatusChange] = useState(false);

  // State to capture information about the item being edited
  const [editItemDetail, editItemDetailChange] = useState({
    id: null,
    text: null,
  });

  const [checkedItems, checkedItemChange] = useState([]);

  const deleteItem = id => {
    Alert.alert(
      'Are you sure you want to delete?',
      'You wont be able to revert this!',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => setItems(prevItems => {
          return prevItems.filter(item => item.id !== id);
        })},
      ],
      {cancelable: false},
    );
    
  };

  // Submit the users edits to the overall items state
  const saveEditItem = (id, text) => {
    setItems(prevItems => {
      return prevItems.map(item =>
        item.id === editItemDetail.id ? { id, text: editItemDetail.text } : item,
      );
    });
    // Flip edit status back to false
    editStatusChange(!editStatus);
  };

  // Event handler to capture users text input as they edit an item
  const handleEditChange = text => {
    editItemDetailChange({ id: editItemDetail.id, text });
  };

  const addItem = text => {
    if (!text) {
      Alert.alert(
        'No item entered',
        'Please enter an item when adding to your shopping list',
        [
          {
            text: 'Understood',
            style: 'cancel',
          },
        ],
        { cancelable: true },
      );
    } else {
      setItems(prevItems => {
        return [{ id: prevItems.length + 1, text }, ...prevItems];
      });
    }
  };

  // capture old items ID and text when user clicks edit
  const editItem = (id, text) => {
    editItemDetailChange({
      id,
      text,
    });
    return editStatusChange(!editStatus);
  };

  const itemChecked = (id, text) => {
    const isChecked = checkedItems.filter(checkedItem => checkedItem.id === id);
    isChecked.length
      ? // remove item from checked items state (uncheck)
      checkedItemChange(prevItems => {
        return [...prevItems.filter(item => item.id !== id)];
      })
      : // Add item to checked items state
      checkedItemChange(prevItems => {
        return [...prevItems.filter(item => item.id !== id), { id, text }];
      });
  };

  return (
    <ImageBackground source={{ uri: 'https://source.unsplash.com/random?groceries?food' }} style={styles.container}>
      <View style={styles.container}>
        <Header title="Shopping List" />
        <AddItem addItem={addItem} />
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <ListItem
              item={item}
              deleteItem={deleteItem}
              editItem={editItem}
              isEditing={editStatus}
              editItemDetail={editItemDetail}
              saveEditItem={saveEditItem}
              handleEditChange={handleEditChange}
              itemChecked={itemChecked}
              checkedItems={checkedItems}
            />
          )}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15
  },
});

export default App;