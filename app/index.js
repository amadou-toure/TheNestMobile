import { StyleSheet, Text, View, Image, Button, Pressable } from "react-native";
import GoogleLogo from "../assets/img/google_logo.png";
import TheNestLogo from "../assets/img/TheNest_logo.png";
import { router } from "expo-router";

import MicrosoftLogo from "../assets/img/microsoft_logo.png";

export default function Page() {
	return (
		<View style={styles.container}>
			<Image source={TheNestLogo} style={styles.MainLogo} />
			<View style={styles.main}>
				<Pressable style={styles.button1} onPress={() => router.push("/Login")}>
					<Text style={styles.button_title1}>Se connecter</Text>
				</Pressable>
				<Pressable style={styles.button1} onPress={() => router.push("/Navigation")}>
					<Text style={styles.button_title1}>home Test</Text>
				</Pressable>
				<Pressable style={styles.button} onPress={() => router.push("/SignUp")}>
					<Text style={styles.button_title}>Inscription</Text>
				</Pressable>
				<View style={styles.separation_arrow}>
					<Text style={styles.button_title1}>Ou continuer avec</Text>
				</View>
				<Pressable style={styles.button}>
					<Image source={GoogleLogo} style={styles.logo} />
					<Text style={styles.button_title}>Google</Text>
				</Pressable>
				<Pressable style={styles.button}>
					<Image source={MicrosoftLogo} style={styles.logo} />
					<Text style={styles.button_title}>Microsoft</Text>
				</Pressable>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "flex-end",
		margin: 0,
	},

	button: {
		backgroundColor: "#fff",
		height: "10%",
		width: "75%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 2,
		borderColor: "#000",
		borderRadius: 6,
		marginTop: 23,
		marginBottom: 23,
	},
	button1: {
		backgroundColor: "#6E3ED3",
		height: "10%",
		width: "75%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 3,
		borderColor: "#fff",
		borderRadius: 6,
		marginTop: 23,
		marginBottom: 23,
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

	main: {
		backgroundColor: "#6E3ED3",
		width: "100%",
		height: "70%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		borderTopLeftRadius: 54,
		borderTopRightRadius: 54,
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
		marginTop: 20,
		marginBottom: 20,
		height: 192,
		width: 422,
	},
});
