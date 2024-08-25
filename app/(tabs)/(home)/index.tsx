import { FlatList, StyleSheet } from "react-native";
import { theme } from "@/theme";
import { usePlantStore } from "@/store/plantsStore";
import { PlantCard } from "@/components/PlantCard";
import { PlantlyButton } from "@/components/PlantlyButton";
import { useRouter } from "expo-router";

export default function App() {
	const router = useRouter();
	const plants = usePlantStore((state) => state.plants);
	// console.log(plants);

	return (
		<FlatList
			style={styles.container}
			contentContainerStyle={styles.contentContainer}
			data={plants}
			renderItem={({ item }) => <PlantCard plant={item} />}
			ListEmptyComponent={
				<PlantlyButton
					title="Add your first plant"
					onPress={() => router.navigate("/")}
				/>
			}
		/>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colorWhite,
	},
	contentContainer: {
		padding: 12,
	},
});
