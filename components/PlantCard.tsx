import { StyleSheet, View, Text, Pressable } from "react-native";
import { theme } from "@/theme";
import { PlantType } from "@/store/plantsStore";
import { PlantlyImage } from "./PlantlyImage";
import { Link } from "expo-router";

export function PlantCard({ plant }: { plant: PlantType }) {
	return (
		<Link href={`plants/${plant.id}`} asChild>
			<Pressable style={styles.plantCard}>
				<PlantlyImage size={100} imageUri={plant.imageUri} />
				<View style={styles.details}>
					<Text numberOfLines={1} style={styles.plantName}>
						{plant.name}
					</Text>
					<Text style={styles.subtitle}>
						Water every {plant.wateringFrequencyDays} days
					</Text>
				</View>
			</Pressable>
		</Link>
	);
}

const styles = StyleSheet.create({
	plantCard: {
		flexDirection: "row",
		backgroundColor: theme.colorWhite,
		borderRadius: 6,
		padding: 12,
		marginBottom: 12,

		// Add the following for IOS shadow Android will ignore
		shadowColor: theme.colorBlack, // 1
		shadowOffset: {
			// 2
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22, // 3
		shadowRadius: 2.22, // 4

		// Add this for Android shadow IOS will ignore
		elevation: 3, // 1
	},
	details: {
		padding: 14,
		justifyContent: "center",
	},
	plantName: {
		fontSize: 18,
		marginBottom: 4,
	},
	subtitle: {
		color: theme.colorGrey,
	},
});
