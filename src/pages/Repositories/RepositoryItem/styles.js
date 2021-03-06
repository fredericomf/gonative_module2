import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    marginHorizontal: metrics.baseMargin,
    marginTop: metrics.baseMargin,
    padding: metrics.basePadding,
  },

  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },

  infoContainer: {
    flexDirection: 'row',
    marginTop: metrics.baseMargin,
  },

  info: {
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: metrics.baseMargin,
  },

  infoIcon: {
    color: colors.dark,
  },

  infoText: {
    color: colors.dark,
    fontSize: 12,
    marginLeft: metrics.baseMargin / 2,
  },
});

export default styles;
