import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "./src/screens/Home";
import { LikedPokemonUserScreen } from "./src/screens/LikedPokemonUser";
import { ProfileScreen } from "./src/screens/Profile";
import {
	MaterialCommunityIcons,
	FontAwesome,
	Ionicons,
} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen
					name="Home"
					component={HomeScreen}
					options={{
						tabBarIcon: ({ focused, color, size }) => (
							<MaterialCommunityIcons
								name="pokeball"
								color={focused ? "red" : color}
								size={size}
							/>
						),
						headerShown: false
					}}
				/>
				<Tab.Screen
					name="Liked"
					component={LikedPokemonUserScreen}
					options={{
						tabBarIcon: ({ focused, color, size }) => (
							<Ionicons
								name="heart-sharp"
								color={focused ? "red" : color}
								size={size}
							/>
						),
						headerShown: false
					}}
				/>
				<Tab.Screen
					name="Profile"
					component={ProfileScreen}
					options={{
						tabBarIcon: ({ focused, color, size }) => (
							<FontAwesome
								name="user"
								color={focused ? "green" : color}
								size={size}
							/>
						),
						headerShown: false
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}
