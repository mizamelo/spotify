import { StyleSheet } from 'react-native';
import { metrics, colors } from '../../styles';

const styles = StyleSheet.create({
  author: {
    color: colors.white,
    fontSize: 14,
    marginTop: 3,
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: metrics.basePadding,
    marginTop: metrics.basePadding,
  },
  info: {
    flex: 1,
  },

  play: {
    color: colors.regular,
  },

  title: {
    color: colors.white,
    fontSize: 15,
    fontWeight: 'bold',
  },

  active: {
    color: colors.green,
  },
});

export default styles;
