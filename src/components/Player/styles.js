import { StyleSheet } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import { metrics, colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.secundary,
    flexDirection: 'row',
    paddingHorizontal: metrics.basePadding,
    ...ifIphoneX(
      {
        height: 74,
        paddingBottom: metrics.basePadding,
      },
      {
        // else
        height: 54,
      },
    ),
  },

  currentSong: {
    flex: 1,
  },

  title: {
    color: colors.white,
    fontSize: 14,
  },

  author: {
    color: colors.dark,
    fontSize: 12,
    marginTop: 3,
  },

  controls: {
    alignItems: 'center',
    flexDirection: 'row',
  },

  controlIcon: {
    color: colors.white,
  },

  play: {
    marginHorizontal: metrics.baseMargin / 2,
  },
});

export default styles;
