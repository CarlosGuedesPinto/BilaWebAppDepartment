import { db } from "../../config/configAPI"

export default (limit = 5, arrayData = false) => {
  let typesRef = db.ref('/type');
  const data = [];
  typesRef.on('value', snapshot => {
    let data = snapshot.val();
    let types = Object.values(data);
    data = types;
  });

  console.log(data);

  for (let i = 1; i <= data.length; i++) {
    let row = null;
    if (arrayData) {
      row = [
        data[i].id,
        data[i].name,
        "images",
        data[i].typeId,
        data[i].description.description
      ];
    } else {
      row = {
        id: data[i].id,
        name: data[i].name,
        images: "images",
        type: data[i].typeId,
        description: data[i].description.description,
      };
    }
    data.push(row);
  }
  return data;
}