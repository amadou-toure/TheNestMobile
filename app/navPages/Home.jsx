import {
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	ScrollView,
	
} from "react-native";
import SearchIcon from "../../assets/img/png-icon/search-icon.png";
import JohnDoe from "../../assets/img/png-icon/john_doe.jpeg";
import condo1 from "../../assets/img/png-icon/condo1.jpg";
import condo2 from "../../assets/img/png-icon/condo2.jpg";
import room1 from "../../assets/img/png-icon/room1.jpeg";
//import { ScrollView } from "react-native-gesture-handler";

const Page = () => {
	return (
				<View style={{flex:0.4}}>
					<View style={styles.profile}>
						<Text style={styles.profileName}>John Doe</Text>
						<Image source={JohnDoe} style={styles.profilePic} />
					</View>
					<View
						style={{
							height: "28%",
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

				<ScrollView contentContainerStyle={{display:'flex',flex:0.6,flexDirection:"column", alignItems:"flex-start",justifyContent:"flex-start", marginLeft:25}}>
						<Text style={styles.title}>Recently added</Text>
						<ScrollView style={{marginTop:10}} contentContainerStyle={{display:'flex',flexDirection:"row", alignItems:"flex-start",justifyContent:"flex-start"}} horizontal={true}>
							<Image source={condo1} style={styles.slideImage} />
							<Image source={condo2} style={styles.slideImage} />
							<Image source={room1} style={styles.slideImage} />
						</ScrollView>
						<Text style={styles.title}>All</Text>

				</ScrollView>
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
	slideImage:{
		width:239,
		height:148,
		borderRadius:29,
		marginRight:10
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
	title:{
		color: "white",
		fontSize: 24,
		fontWeight: "900",
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
