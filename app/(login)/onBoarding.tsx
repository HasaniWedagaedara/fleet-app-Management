import EyeOffSvg from "@/assets/SVG/EyeOffSvg";
import EyeSvg from "@/assets/SVG/EyeSvg";
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
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Path } from "react-native-svg";
import colors from "@/constants/colors";

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

  const [isEyeVisible, setIsEyeVisible] = useState(true);

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
          <View>
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!isPasswordVisible}
            />
            <TouchableOpacity onPress={() => setIsEyeVisible(!isEyeVisible)}>
              <View style={styles.eye}>
                {isEyeVisible ? <EyeSvg /> : <EyeOffSvg />}
              </View>
            </TouchableOpacity>
          </View>

          <Link href="/splash" style={styles.forgot}>
            Forgot Password?
          </Link>
          <LinearGradient
            colors={colors.gradientLogin}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradient}
          >
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Log In</Text>
              <View>
                <LoginArrowSvg style={styles.arrow} />
              </View>
            </TouchableOpacity>
          </LinearGradient>
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
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  arrow: {
    marginTop: -20,
    marginLeft: 80,
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
    fontFamily: "sfPro",
    fontWeight: "700",
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
    fontFamily: "sfPro",
    fontWeight: "500",
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
    marginTop: 270,
    position: "static",
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
    fontFamily: "sfPro",
    fontWeight: "500",
  },
  forgot: {
    alignSelf: "flex-end",
    marginTop: 20,
    marginBottom: 20,
    color: "#429690",
    fontFamily: "sfPro",
    fontWeight: "500",
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
    fontSize: 18,
    flexDirection: "row",
    marginLeft: -40,
    fontFamily: "sfPro",
    fontWeight: "600",
  },

  icon: {
    right: 35,
    marginBottom: 12,
  },
  largeText: {
    fontSize: 36,
    fontWeight: "700",
    textAlign: "center",
    fontFamily: "inter",
  },
  svgWrapper: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
  },
  eye: {
    marginLeft: 310,
    marginTop: -40,
  },
});
