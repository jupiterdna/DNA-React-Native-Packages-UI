import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  collapsible: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 4,
  },
  panelHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
  },
  panelBody: {
    height: 250,
    padding: 8,
  }
});