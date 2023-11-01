import { TouchableOpacity, Text, ActivityIndicator, StyleSheet } from "react-native";

type ButtonProps = {
	children: React.ReactNode
	isLoading: boolean
	onPress: () => void
}

export function TouchableOpacityButton({children, isLoading, onPress}: ButtonProps) {
	return (
		<TouchableOpacity disabled={isLoading} style={styles.container} onPress={onPress}>
			<Text style={styles.text}>
			{isLoading ? <ActivityIndicator size={'small'} color={'#fefefe'}/> : children}
			</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		width: 330,
		height: 52,
		padding: 8,
		borderRadius: 4,
		backgroundColor: 'red',
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		marginBottom: 12
	},
	text: {
		color: '#fefefe',
		fontSize: 16,
		fontWeight: "400",
	}
})