import * as React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
  Text,
} from "react-native";
import {uTailwind} from '@repo/tailwind-config'

export interface ButtonProps {
  text: string;
  onClick?: (event: GestureResponderEvent) => void;
}

export function Button({ text, onClick }: ButtonProps) {

  const tw = uTailwind();

  return (
    <TouchableOpacity style={styles.button} onPress={onClick}>
      <Text style={styles.text}>{text}</Text>
      <Text style={tw('text-red-200')}>eeesdsdxxessse</Text>
    </TouchableOpacity>
  );

}
const styles = StyleSheet.create({
  button: {
    maxWidth: 200,
    textAlign: "center",
    borderRadius: 10,
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 30,
    paddingRight: 30,
    fontSize: "15px",
    backgroundColor: "#2f80ed",
  },
  text: {
    color: "white",
  },
});
