import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFC947",
    alignItems: "center",
    justifyContent: "center",
  },
  movieDetail: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  movieTitle: {
    margin: 10,
    color: "black",
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
  },
  propTitle: {
    alignSelf: "flex-start",
    marginVertical: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  movieLogo: {
    width: 200,
    height: 300,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "black",
    borderStyle: "solid",
    alignSelf: "center",
  },
});

export default styles;
