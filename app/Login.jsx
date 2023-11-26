import {
	StyleSheet,
	Text,
	View,
	Image,
	StatusBar,
	TextInput,
	Pressable,
	ScrollView,
} from "react-native";
import { Dimensions } from "react-native";
import TheNestLogo from "../assets/img/TheNest2_logo.png";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Page() {
	return (
		<View style={styles.container}>
			<StatusBar animated={true} backgroundColor="#6E3ED3" />
			<View style={styles.mainHeader}>
				<Image source={TheNestLogo} style={styles.MainLogo} />
			</View>

			<View style={styles.main}>
				<View style={styles.form_container}>
					<TextInput
						style={styles.form}
						placeholderTextColor={"#6E3ED3"}
						placeholder="Nom d'utilisateur"
						//keyboardType="numeric"
					/>
					<TextInput
						style={styles.form}
						placeholderTextColor={"#6E3ED3"}
						placeholder="Mot de passe"
						//keyboardType="numeric"
					/>
				</View>
				<View style={styles.button_container}>
					<Pressable style={styles.button1}>
						<Text style={styles.button_title1}>Confirmer</Text>
					</Pressable>
					<Pressable style={styles.button}>
						<Text style={styles.button_title}>Annuler</Text>
					</Pressable>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "flex-end",
		margin: 0,
		height: "100%",
		width: "100%",
		minHeight: Dimensions.get("screen").height / 1.125,
	},

	button: {
		backgroundColor: "#fff",
		height: "30%",
		width: "75%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 2,
		borderColor: "#6E3ED3",
		borderRadius: 6,
		marginBottom: "2%",
		marginTop: "2%",
	},
	form: {
		backgroundColor: "#fff",
		//minHeight:'25%',
		height: "25%",
		width: "75%",
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 2,
		borderColor: "#6E3ED3",
		color: "#6E3ED3",
		marginBottom: 12,
		marginTop: 12,
		borderRadius: 6,
		textAlign: "center",
		fontWeight: "900",
		fontSize: 32,
	},
	form_container: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		height: "40%",
		width: "100%",
		marginBottom: "10%",
		marginTop: "10%",
	},
	button_container: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		height: "35%",
		width: "100%",
	},
	button1: {
		backgroundColor: "#6E3ED3",
		height: "30%",
		width: "75%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 3,
		marginBottom: "2%",
		marginTop: "2%",
		borderColor: "#000",
		borderRadius: 6,
	},
	button_title1: {
		color: "#fff",
		fontWeight: "900",
		fontSize: 32,
	},
	button_title: {
		color: "#6E3ED3",
		fontWeight: "900",
		fontSize: 32,
	},
	mainHeader: {
		backgroundColor: "#6E3ED3",
		borderBottomLeftRadius: 54,
		borderBottomRightRadius: 54,
		justifyContent: "center",
		alignItems: "center",
		height: "40%",
		width: "100%",
	},
	main: {
		backgroundColor: "#fff",
		width: "100%",
		height: "70%",
		display: "flex",
		marginBottom: 0,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	separation_arrow: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		borderBottomWidth: 2,
		borderBottomColor: "#fff",
		width: "80%",
	},
	logo: {
		height: 36,
		width: 36,
		marginRight: 9,
	},
	MainLogo: {
		height: 107,
		width: 341,
	},
});
