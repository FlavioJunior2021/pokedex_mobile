import { View, Image } from "react-native";

export function Header() {
	return (
		<View>
			<Image
				source={require('../../../assets/Pokédex_logo.png')}
				style={{ width: 200, height: 64 }} // Adicione um estilo para
			/>
		</View>
	)
}