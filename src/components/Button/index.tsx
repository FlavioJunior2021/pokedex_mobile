import { TouchableOpacity, Text, ActivityIndicator, StyleSheet } from "react-native";

type ButtonProps = {
	children: React.ReactNode
	isLoading: boolean
}

export function TouchableOpacityButton({children, isLoading}: ButtonProps) {
	return (
		<TouchableOpacity disabled={isLoading} style={styles.container}>
			<Text style={styles.text}>
			{isLoading ? <ActivityIndicator size={'small'} color={'#fefefe'}/> : children}
			</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		width: 246,
		height: 36,
		padding: 8,
		borderRadius: 4,
		backgroundColor: 'yellow',
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center'
	},
	text: {
		color: '#0000f',
		fontSize: 16,
		fontWeight: "300",
	}
})