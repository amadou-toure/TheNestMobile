import {
	StyleSheet,
	Text,
	View,
	Image,
	Pressable,
	StatusBar
} from "react-native";
import HomeIcon from "../assets/img/png-icon/home-icon.png";
import MessageIcon from "../assets/img/png-icon/message-icon.png";
import SettingIcon from "../assets/img/png-icon/settings-icon.png";
import CreateIcon from "../assets/img/png-icon/create-icon.png";
import Home from "./Home"
//import { ScrollView } from "react-native-gesture-handler";

const Page = () => {
	return (
		<View style={styles.container}>
			  <StatusBar
                    animated={true}
                    translucent={false}
					hidden={true}
                    barStyle={'light-content'}
                    backgroundColor={'#676767'}
                />
			<View style={styles.main}>
				<Home />
			</View>
			<View style={styles.navBar}>
				<Pressable style={styles.navButton}>
					<Image source={HomeIcon} style={styles.logo} />
					<Text style={styles.navCaption}>Home</Text>
				</Pressable>
				<Pressable style={styles.navButton}>
					<Image source={MessageIcon} style={styles.logo} />
					<Text style={styles.navCaption}>Message</Text>
				</Pressable>
				<Pressable style={styles.navButton}>
					<Image source={CreateIcon} style={styles.logo} />
					<Text style={styles.navCaption}>Sell</Text>
				</Pressable>
				<Pressable style={styles.navButton}>
					<Image source={SettingIcon} style={styles.logo} />
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
		paddingTop: "15%",
	},
	title:{
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
});
export default Page;
