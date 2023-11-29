import { View, Text, StyleSheet, Pressable, useWindowDimensions } from 'react-native';
import BottomTabIcon from './BottomTabIcon';
import Animated, { useAnimatedStyle, withSpring } from 'react-native-reanimated';
const CostumizeBottomTab = ({ state, descriptors, navigation }) => {

  const { width } = useWindowDimensions();

  const MARGIN = 10;
  const TAB_BAR_WIDTH = width - 2 * MARGIN;
  const TAB_WIDTH = TAB_BAR_WIDTH / state.routes.length;

  const translateAnimation = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withSpring(TAB_WIDTH * state.index) }]
    }
  })

  return (
    <View style={[style.tabBarContainer, { width: TAB_BAR_WIDTH, bottom: MARGIN }]}>
      <Animated.View style={[style.slidingTabContainer, 
        { width: TAB_WIDTH },
        translateAnimation
        ]} >
        <View style={style.slidingTab} />
      </Animated.View>

      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Pressable
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            key={index}
            style={{ flex: 1 }}
          >
            <View style={style.contentContainer}>
              <BottomTabIcon route={route.name} isFocused={isFocused} />
              <Text style={{ color: isFocused ? '#0067FF' : '#fff', fontSize: 12 }}>
                {route.name}
              </Text>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
}


const style = StyleSheet.create({
  tabBarContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 60,
    position: 'absolute',
    alignSelf: 'center',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: '#0067FF'
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4
  },
  slidingTab: {
    width: 70,
    height: 70,
    borderRadius: 100,
    backgroundColor: 'white'
  },
  slidingTabContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default CostumizeBottomTab;