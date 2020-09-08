import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	View,
	FlatList,
	RefreshControl,
	Alert,
	Text
} from "react-native";
import { mainDark, mainColour, red } from "../../../style_variables";
import { getTopics } from "../../services/api";
import { TopicInterface } from "../../interfaces";
import { TopicCard } from "../atoms";
import NewThread from "../atoms/NewThread";
import Loading from "../atoms/Loading";
import ErrorComponent from "../atoms/ErrorComponent";

export default function TopicList({
	distance = "furthest",
	navigation
}: {
	distance: string;
	navigation: any;
}) {
	const [topics, setTopics] = useState<TopicInterface[]>([]);
	const [refreshing, setRefreshing] = useState<boolean>(false);
	const [page, setPage] = useState<number>(1);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<number>(0);
	const [fetching, setFetching] = useState<boolean>(false);

	useEffect(() => {
		const fetchTopics = async () => {
			navigator.geolocation.getCurrentPosition(
				async ({ coords: { latitude, longitude } }) => {
					try {
						const data: TopicInterface[] = await getTopics(
							distance,
							-106.018,
							34.542,
							page
						);
						setTopics(data);
						setLoading(false);
					} catch (e) {
						setLoading(false);
						if (e.response) {
							setError(e.response.status);
						} else {
							setError(502);
						}
					}
				},
				error => Alert.alert(error.message),
				{ enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 }
			);
		};
		fetchTopics();
	}, []);

	useEffect(() => {
		const fetchTopics = async () => {
			navigator.geolocation.getCurrentPosition(
				async ({ coords: { latitude, longitude } }) => {
					const data: TopicInterface[] = await getTopics(
						distance,
						-106.018,
						34.542,
						page
					);
					setTopics([...topics, ...data]);
					setFetching(false);
				},
				error => Alert.alert(error.message),
				{ enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 }
			);
		};
		fetchTopics();
	}, [page]);

	const renderItem = ({ item }: { item: TopicInterface }) => (
		<TopicCard topic={item} navigation={navigation} isStatic={false} />
	);

	const onRefresh = async () => {
		setRefreshing(true);
		setPage(1);
		navigator.geolocation.getCurrentPosition(
			async ({ coords: { latitude, longitude } }) => {
				const data: TopicInterface[] = await getTopics(
					distance,
					-106.018,
					34.542,
					page
				);
				setTopics(data);
			},
			error => Alert.alert(error.message),
			{ enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 }
		);
		setRefreshing(false);
	};

	switch (true) {
		case loading:
			return (
				<View style={loadingStyles.container}>
					<Loading height={75} width={65} />
				</View>
			);
		case error !== 0:
			return <ErrorComponent code={error} />;
		default:
			return (
				<>
					<View style={styles.listContainer}>
						<FlatList
							data={topics}
							renderItem={renderItem}
							keyExtractor={(item: TopicInterface) =>
								item.id + Math.round(Math.random() * 500).toString()
							}
							style={styles.list}
							refreshControl={
								<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
							}
							onEndReached={() => {
								setFetching(true);
								setPage(page + 1);
							}}
							onEndReachedThreshold={0.3}
						/>
						{fetching && (
							<View style={styles.fetchingContainer}>
								<Loading height={30} width={20} />
								<Text style={styles.fetchingText}>Fetching new threads</Text>
							</View>
						)}
					</View>
					<NewThread navigation={navigation} />
				</>
			);
	}
}

const styles = StyleSheet.create({
	listContainer: {
		flex: 1,
		backgroundColor: mainDark
	},
	fetchingContainer: {
		backgroundColor: mainDark,
		borderColor: mainColour,
		borderTopWidth: 1,
		height: 50,
		elevation: 3,
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center"
	},
	fetchingText: {
		color: mainColour,
		marginLeft: 15
	},
	list: {}
});

const loadingStyles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "center",
		paddingTop: 25
	},
	logoWrapper: {
		marginBottom: 25,
		marginTop: 50
	},
	logo: { width: "80%", height: 75 }
});
