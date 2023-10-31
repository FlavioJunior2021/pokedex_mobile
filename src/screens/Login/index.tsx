import { Header } from "../../components/Header";
import { StyleSheet, Text, View } from "react-native";

export function LoginScreen() {
	return (
		<View style={{ flexDirection: 'column', alignContent: "center", flex: 1 }}>
			<View style={style.headerCOntainer}>
				<Header />
			</View>
		</View>
	);
}

const style = StyleSheet.create({
	headerCOntainer: {
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		paddingTop: 24,
	}
})