import {
	StyleSheet,
	Text,
	View,
	Image,
	Button,
	Pressable,
	TextInput,
	FlatList,
} from "react-native";
import HomeIcon from "../assets/img/png-icon/home-icon.png";
import SearchIcon from "../assets/img/png-icon/search-icon.png";
import MessageIcon from "../assets/img/png-icon/message-icon.png";
import SettingIcon from "../assets/img/png-icon/settings-icon.png";
import CreateIcon from "../assets/img/png-icon/create-icon.png";
import JohnDoe from "../assets/img/png-icon/john_doe.jpeg";
import condo1 from "../assets/img/png-icon/condo1.jpg";

const Page = () => {
	return (
		<View style={styles.container}>
			<View style={styles.main}>
				<View style={styles.header}>
					<View style={styles.profile}>
						<Text style={styles.profileName}>John Doe</Text>
						<Image source={JohnDoe} style={styles.profilePic} />
					</View>
					<View
						style={{
							height: "23%",
							width: "100%",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<View style={styles.searchWrapper}>
							<Image source={SearchIcon} style={styles.logo} />
							<TextInput
								style={styles.searchInput}
								placeholderTextColor={"#676767"}
								placeholder="search"
								//keyboardType="numeric"
							/>
						</View>
					</View>
				</View>
				<FlatList>
					<View>
						<Text>Recently added</Text>
						<Image source={condo1} style={styles.logo} />
					</View>
					<View>
						<Text>All</Text>
					</View>
				</FlatList>
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
	searchWrapper: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		alignContent: "flex-end",
		backgroundColor: "#D9D9D9",
		borderRadius: 46,
		width: "85%",
		marginTop: "10%",
		height: "100%",
	},
	searchInput: {
		textAlign: "center",
		fontWeight: "900",
		backgroundColor: "#D9D9D9",
		color: "#676767",
		width: "80%",
		fontSize: 24,
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
