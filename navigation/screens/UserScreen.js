import { Button, View } from "react-native";
import { Text } from "react-native";

function UserScreen({ navigation }) {
  function openDrawerHandler() {
    navigation.toggleDrawer();
  }

  return (
    <View>
      <Text>UserScreen</Text>
      <Button title="Open Drawer" onPress={openDrawerHandler} />
    </View>
  );
}

export default UserScreen;
