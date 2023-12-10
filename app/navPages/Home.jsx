import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Animated,
  FlatList,
  useWindowDimensions,
} from "react-native";
import Paginator from "../components/Paginator";
import SearchIcon from "../../assets/img/png-icon/search-icon.png";
import condo1 from "../../assets/img/png-icon/condo1.jpg";
import condo2 from "../../assets/img/png-icon/condo2.jpg";
import room1 from "../../assets/img/png-icon/room1.jpeg";
import room2 from "../../assets/img/png-icon/room2.jpeg";
import { useState, useRef } from "react";
//import { ScrollView } from "react-native-gesture-handler";

const Page = () => {
  //tutorial on : https://www.youtube.com/watch?v=r2NJJye0XnM
  const { width } = useWindowDimensions();
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slideRef = useRef(null);
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 10 }).current;
  const slides = [
    {
      id: 1,
      title: "condo1",
      description: "4 min from cote des neige",
      image: condo1,
    },
    {
      id: 2,
      title: "condo2",
      description: "4 min from sherbrook",
      image: condo2,
    },
    { id: 3, title: "room1", description: "near Mount Royal", image: room1 },
    { id: 4, title: "room2", description: "near Westmount", image: room2 },
  ];

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: "15%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={styles.searchWrapper}>
          <Image
            source={SearchIcon}
            style={styles.logo}
          />
          <TextInput
            style={styles.searchInput}
            placeholderTextColor={"#676767"}
            placeholder="search"
            //keyboardType="numeric"
          />
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{
          display: "flex",
          flex: 0.6,
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          marginLeft: 25,
        }}
      >
        <Text style={styles.title}>Recently added</Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 10 }}
          contentContainerStyle={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
          horizontal={true}
          pagingEnabled
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          viewabilityConfig={viewConfig}
          onViewableItemsChanged={viewableItemsChanged}
          data={slides}
          ref={slideRef}
          renderItem={({ item }) => (
            <Image
              source={item.image}
              style={[styles.slideImage, { width: "90%", height: "20%" }]}
            />
          )}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            marginTop: 0,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Paginator
            data={slides}
            scrollX={scrollX}
          />
        </View>
        <Text style={styles.title}>All</Text>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  searchWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "flex-end",
    backgroundColor: "#D9D9D9",
    borderRadius: 46,
    width: "90%",
    height: "60%",
  },
  slideImage: {
    borderRadius: 29,
    marginRight: 5,
    marginLeft: 5,
  },
  searchInput: {
    textAlign: "center",
    fontWeight: "900",
    backgroundColor: "#D9D9D9",
    color: "#676767",
    width: "80%",
    fontSize: 24,
  },

  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "900",
  },

  main: {
    flex: 0.9,
  },
  navBar: {
    flex: 0.1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  navButton: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#272727",
  },
  logo: {
    height: 36,
    width: 36,
  },
  navCaption: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
});
export default Page;
