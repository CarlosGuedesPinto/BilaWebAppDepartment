import firebase from 'react-native-firebase';

export async function getItems(itemsRetreived) {

    var itemsList = [];

    var snapshot = await firebase.firestore()
    .collection("items")
    .get()

    snapshot.forEach((doc) => {
        foodList.push(doc.data());
    });

    itemsRetreived(itemsList);
}