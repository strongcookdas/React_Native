import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import { useState } from "react";

function renderCagtegoryItem(itemData) {
  return (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
  );
}

function CategoriesScreen(props) {
  const [numColumns, setNumColumns] = useState(2);

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCagtegoryItem}
      numColumns={numColumns}
    />
  );
}

export default CategoriesScreen;
