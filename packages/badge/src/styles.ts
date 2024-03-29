import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  badgeWrapper: {
    position: 'relative',
  },
  badge: {
    top: 0,
    position: 'absolute',
    zIndex: 99,
    borderRadius: 99,
  },
  shadowProp:{
    elevation: 2,
    shadowColor: 'rgb(0, 0, 0)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  badgdeText: {
    fontSize: 12,
    color: '#ffffff',
  },
  badgeSpace: {
    paddingVertical: 2,
    paddingHorizontal: 4,
    minWidth: 18,
    minHeight: 18,
  },
  badgeSize: {
    width: 10,
    height: 10,
    right: 0,
  }
});