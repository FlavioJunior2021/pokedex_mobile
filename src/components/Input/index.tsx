import { TextInput, StyleSheet } from "react-native";

type InputProps = {
	placeHolder: string
}

export function Input({placeHolder}: InputProps){
	return(
		<TextInput placeholder={placeHolder} 
			style={style.container}
		/>
	)
}

const style = StyleSheet.create({
	container: {
		width: 330,
		height: 52,
		paddingLeft: 16,
		paddingVertical: 14,
		alignItems: 'center',
		borderWidth: 1,
		color: '#999',
		borderRadius: 5,
		fontSize: 16,
		fontWeight: '400',
		borderColor: '#999'
	}
})