import { StyleSheet, useColorScheme} from 'react-native';

export const styles = StyleSheet.create({
  fab: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 99,
    zIndex: 99,
  },
  childWrapper: {
    position: 'absolute',
    top: -99999,
  },
  childrenStyle: {
    gap: 8,
    zIndex: 99,
    flexDirection: 'column-reverse',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    gap: 8,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: useColorScheme() === 'light' ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)',
    zIndex: -1,
  },
});

export const fabSizeCls = {
  xs: {
    height: 34,
    width: 34,
  },
  sm: {
    height: 40,
    width: 40,
  },
  md: {
    height: 48,
    width: 48,
  },
  lg: {
    height: 56,
    width: 56,
  },
  xl: {
    height: 64,
    width: 64,
  },
}
