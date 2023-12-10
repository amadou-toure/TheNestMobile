import react from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  useWindowDimensions,
} from "react-native";

//tutorial on : https://www.youtube.com/watch?v=r2NJJye0XnM
export default Page = ({ data, scrollX }) => {
  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        width: "80%",
        height: 80,
      }}
    >
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [20, 40, 20],
          extrapolate: "clamp",
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.5, 1, 0.5],
          extrapolate: "clamp",
        });
        const bgcolor = scrollX.interpolate({
          inputRange,
          outputRange: ["#D9D9D9", "#6E3ED3", "#D9D9D9"],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            style={[
              styles.dot,
              { width: dotWidth, opacity, backgroundColor: bgcolor },
            ]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  dot: {
    marginTop: 0,
    height: 20,
    borderRadius: 9,
  },
});
