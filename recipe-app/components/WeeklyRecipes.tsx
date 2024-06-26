import { Image, Pressable, ScrollView, Text, View, useWindowDimensions } from "react-native";
import { recipeData } from "./recipedata";

export default function WeeklyRecipes() {
  let newArr = [];
  let arrTest = [];

  function shuffle(array: object[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  for (let i = 0; i < recipeData.length; i++) {
    arrTest.push(recipeData[i])
  }
  shuffle(arrTest);
  newArr = arrTest.slice(0, 4);

  return (
    <ScrollView style={{
      height: useWindowDimensions().height / 1.7
    }}>
      <View>
        {newArr.map((recipe, index) => {
          return (
            <View key={index}>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Pressable>
                  <Image
                    resizeMode="cover"
                    source={recipe.image}
                    style={{
                      width: 300,
                      height: 170,
                      borderRadius: 12,
                    }}
                  />
                  <Text
                    style={{
                      paddingVertical: 12,
                      fontSize: 18,
                      textAlign: "center",
                    }}
                  >
                    {recipe.title}
                  </Text>
                </Pressable>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}
