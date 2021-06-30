import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  movieLogo: {
    width: 100,
    height: 150,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
  },
  text: {
    color: "#E1E8EB",
    width: 200,
    fontSize: 18,
  },
  cardContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 10,
    backgroundColor: "#343A40",
    padding: 10,
    borderRadius: 7,
  },
  addBookmarkAndWatched: {
    height: 30,
    width: 30,
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    height: 150,
    justifyContent: "space-evenly",
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

export default styles;
