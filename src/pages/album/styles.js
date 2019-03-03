import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
  },

  thumbnail: {
    height: 120,
    width: '100%',
  },

  thumbnailContent: {
    alignItems: 'center',
    backgroundColor: colors.darkTransparent,
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
  },

  author: {
    fontSize: 18,
    color: colors.whiteTransparent,
    marginTop: metrics.baseMargin / 2,
  },
});

export default styles;
