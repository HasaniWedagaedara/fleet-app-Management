import { Link } from "expo-router";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-vector-icons/Icon";

const OnBoarding = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          style={styles.logo2}
          source={require("../../assets/images/logo2.png")}
        />
        <Text style={styles.welcome}>Welcome!</Text>
        <Text style={styles.text}>Enter your login details below!</Text>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Phone Number/Email ID"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!isPasswordVisible}
          />
          
          <Link href="/splash" style={styles.forgot}>
            Forgot Password?
          </Link>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.largeText}>Managing Fleets</Text>
        <Text style={styles.largeText}>Day To Day</Text>
      </View>
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo2: {
    width: 182.57,
    marginLeft: 10,
    height: 63.8,
    marginTop: 70,
  },
  welcome: {
    marginTop: 10,
    fontSize: 40,
    fontWeight: "700",
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
  topContainer: {
    flex: 3,
    backgroundColor: "#EEF8F7",
    alignSelf: "flex-start",
    width: "100%",
    paddingHorizontal: 20,
  },
  bottomContainer: {
    flex: 1,
    top: 60,
  },
  input: {
    height: 60,
    width: "100%",
    borderColor: "#429690",
    borderWidth: 1,
    borderRadius: 15,
    marginTop: 10,
    paddingHorizontal: 8,
    backgroundColor: "#fff",
  },
  forgot: {
    alignSelf: "flex-end",
    marginTop: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#429690",
    borderRadius: 40,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    height: 60,
    paddingTop: 10,
    paddingRight: 20,
    paddingBottom: 10,
    paddingLeft: 20,
  },
  buttonText: {
    paddingTop: 8,
    color: "#fff",
    fontWeight: "700",
    fontSize: 18,
  },

  icon: {
    right: 35,
    marginBottom: 12,
  },
  largeText: {
    fontSize: 36,
    fontWeight: "700",
    textAlign: "center",
  },
});
