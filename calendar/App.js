import { StatusBar } from "expo-status-bar";
import { func } from "prop-types";
import { StyleSheet, Text, View } from "react-native";
import { Calendar } from "react-native-calendars";

const markedDates = {
  "2023-10-26": { selected: true },
  "2023-10-27": { marked: true },
  "2023-10-28": { marked: true },
};

function printDay(day) {
  console.log(day);
}

export default function App() {
  return (
    <>
      <StatusBar />
      <Calendar markedDates={markedDates} onDayPress={printDay} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
