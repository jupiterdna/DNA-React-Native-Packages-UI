import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  fab: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 99,
  },
  fabWrapper: {
    zIndex: 99,
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
    backgroundColor: 'rgba(0,0,0,0.5)',
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
