import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  StatusBar,
} from "react-native";
import HomeIcon from "../../assets/img/png-icon/home-icon.png";
import MessageIcon from "../../assets/img/png-icon/message-icon.png";
import SettingIcon from "../../assets/img/png-icon/settings-icon.png";
import CreateIcon from "../../assets/img/png-icon/create-icon.png";
import JohnDoe from "../../assets/img/png-icon/john_doe.jpeg";
import Home from "../navPages/Home";
//import { ScrollView } from "react-native-gesture-handler";

const Page = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        translucent={true}
        hidden={false}
        barStyle={"light-content"}
      />
      <View style={styles.main}>
        <View style={styles.profile}>
          <Text style={styles.profileName}>John Doe</Text>
          <Image
            source={JohnDoe}
            style={styles.profilePic}
          />
        </View>
        <Home />
      </View>
      <View style={styles.navBar}>
        <Pressable style={styles.navButton}>
          <Image
            source={HomeIcon}
            style={styles.logo}
          />
          <Text style={styles.navCaption}>Home</Text>
        </Pressable>
        <Pressable style={styles.navButton}>
          <Image
            source={MessageIcon}
            style={styles.logo}
          />
          <Text style={styles.navCaption}>Message</Text>
        </Pressable>
        <Pressable style={styles.navButton}>
          <Image
            source={CreateIcon}
            style={styles.logo}
          />
          <Text style={styles.navCaption}>Sell</Text>
        </Pressable>
        <Pressable style={styles.navButton}>
          <Image
            source={SettingIcon}
            style={styles.logo}
          />
          <Text style={styles.navCaption}>Settings</Text>
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#272727",
    flex: 1,
    paddingTop: "5%",
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "900",
  },
  main: {
    flex: 0.9,
  },
  navBar: {
    flex: 0.1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  navButton: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#272727",
  },
  logo: {
    height: 36,
    width: 36,
  },
  navCaption: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  profile: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginRight: "5%",
  },
  profileName: {
    color: "white",
    fontSize: 24,
    fontWeight: "900",
    marginRight: "2%",
  },
  profilePic: {
    height: 76,
    width: 76,
    borderRadius: 100,
  },
});
export default Page;
