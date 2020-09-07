import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	View,
	FlatList,
	RefreshControl,
	Alert
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
			return <Loading items="topics" />;
		case error !== 0:
			return <ErrorComponent code={error} />;
		default:
			return (
				<>
					<View style={styles.listContainer}>
						<FlatList
							data={topics}
							renderItem={renderItem}
							keyExtractor={item => item.id.toString()}
							style={styles.list}
							refreshControl={
								<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
							}
							onEndReached={() => setPage(page + 1)}
							onEndReachedThreshold={0.3}
						/>
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
	list: {}
});
