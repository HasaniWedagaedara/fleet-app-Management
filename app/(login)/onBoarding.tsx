import LoginArrowSvg from "@/assets/SVG/LoginArrowSvg";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Svg, { Path } from "react-native-svg";

const OnBoarding = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const router = useRouter();

  const SvgBackground = () => (
    <Svg width="414" height="650" viewBox="0 0 414 677" fill="none">
      <Path d="M0 0H414V677L0 618.919V0Z" fill="#EEF8F7" />
    </Svg>
  );


  // Temp Navigate
  const handleLogin = () => {
    // login logic
    router.push("/(tabs)/Home");
  };

  return (
    <View style={styles.container}>
      <View style={styles.svgWrapper}>
        <SvgBackground />
      </View>
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
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Log In</Text>
            <View>
              <LoginArrowSvg style={styles.arrow} />
            </View>
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
  arrow:{
    marginTop:-18,
    marginLeft:80,
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
    paddingTop: 20,
  },
  bottomContainer: {
    flex: 1,
    marginTop:270,
    position:"static"
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
    color:"#429690",
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
    top: 30,
  },
  buttonText: {
    paddingTop: 8,
    color: "#fff",
    fontWeight: "700",
    fontSize: 18,
    flexDirection: "row",
    marginLeft:-40,
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
  svgWrapper: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
  },
});
