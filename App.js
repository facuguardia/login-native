import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require("./assets/login-prev.jpg")} style={styles.image} />
      <View>
        {/* Title */}
        <Text style={styles.title}>Hello</Text>
        <Text style={styles.subTitle}>Sign in to your account</Text>
        {/* Inputs */}
        <TextInput style={styles.input} placeholder="correo@correo.com" />
        <TextInput style={styles.input} placeholder="*********" />
        {/* Forgot password */}
        <Text style={styles.p}> Forgot you password? </Text>
      </View>
      {/* Button */}
      <View>
        <TouchableOpacity style={styles.button}>
          <Text>Log In</Text>
        </TouchableOpacity>
        <Text style={styles.account}>Don't have an accont ?</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  title: {
    color: "#344330",
    fontSize: 80,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 20,
    color: "gray",
  },
  input: {
    backgroundColor: "#fff",
    width: 300,
    height: 40,
    borderRadius: 20,
    padding: 10,
    marginTop: 20,
    paddingStart: 30,
  },
  p: {
    fontSize: 10,
    color: "gray",
    marginTop: 10,
    paddingLeft: 200,
    paddingBottom: 50,
  },
  button: {
    width: 200,
    height: 40,
    borderRadius: 20,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
  },
  account: {
    color: "gray",
    fontSize: 10,
    marginTop: 20,
    textAlign: "center",
  },
  image: {
    width: 150,
    height: 150,
  },
});
