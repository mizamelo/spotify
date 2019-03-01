import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../../../styles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: metrics.basePadding,
    marginTop: metrics.basePadding,
  },

  thumbnail: {
    borderRadius: 28,
    height: 56,
    width: 56,
  },

  info: {
    marginLeft: metrics.baseMargin,
    flex: 1,
  },

  title: {
    fontSize: 15,
    color: colors.white,
    fontWeight: 'bold',
  },
});

export default styles;
