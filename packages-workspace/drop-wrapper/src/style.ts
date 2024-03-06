import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
  },
  modalWrapper: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    height: '100%',
  },
  animatedContainer: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 20,
    paddingVertical: 30,
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
  },
  animatedInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
