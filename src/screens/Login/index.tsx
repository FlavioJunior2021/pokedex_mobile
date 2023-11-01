import { Header } from "../../components/Header";
import { StyleSheet, Text, View } from "react-native";
import { Input } from "../../components/Input";
import { TouchableOpacityButton } from "../../components/Button";
import React, { useState } from "react";

export function LoginScreen() {
	const [inputType, setInputType] = useState("email");

	const handleContinueButtonPress = () => {
		setInputType("name");
	};

	return (
		<View
			style={{
				flexDirection: "column",
				alignContent: "center",
				alignItems: "center",
				flex: 1,
			}}
		>
			<View style={style.headerCOntainer}>
				<Header />
			</View>
			{inputType === "email" && (
				<View style={style.formContainer}>
					<Input placeHolder="E-mail" />
				</View>
			)}
			{inputType === "name" && (
				<View style={style.formContainer}>
					<Input placeHolder="Name" />
				</View>
			)}
			<TouchableOpacityButton
				isLoading={false}
				onPress={handleContinueButtonPress}
			>
				Continuar
			</TouchableOpacityButton>
		</View>
	);
}
const style = StyleSheet.create({
	headerCOntainer: {
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "center",
		paddingTop: 24,
	},
	formContainer: {
		flex: 1,
		justifyContent: "center",
		alignContent: "center",
	},
});
