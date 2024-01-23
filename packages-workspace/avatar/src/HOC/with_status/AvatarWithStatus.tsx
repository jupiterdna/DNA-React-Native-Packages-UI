import React from "react";
import { View, Text } from "react-native";
import { DNAAvatar } from "../../Avatar"
import { DNAAvatarProps, DNAAvatarPropsWithStatus } from "../../types";
import { useColor } from "@rndna/theme-provider";
import { styles, avatarSizeCls } from "../../styles";

const AvatarWithStatus =
  (Component: React.FC<DNAAvatarProps>) =>
  (props: DNAAvatarPropsWithStatus) => {
    const {
      status,
      size = "md",
    } = props;

  const { option = "online", value } = status

  const themeColor = useColor();

  const getBgColor = () => {
    return {
      online: { 
        backgroundColor: themeColor.success["default"], 
        borderColor: '#fff'
      },
      offline: { 
        backgroundColor: themeColor.default["400"],
        borderColor: '#fff' 
      },
      busy: { 
        backgroundColor: themeColor.danger["default"], 
        borderColor: '#fff'
      },
      inactive: { 
        backgroundColor: "#fff", 
        borderColor: themeColor.default["400"]
      },
    }[option];
  }
  
  const getStatusSize = {
    width: avatarSizeCls[size].width  * .25,
    height: avatarSizeCls[size].height * .25,
  }

  return (
    <View>
      <Component {...props} />
      <View style={[getBgColor(), styles.status, getStatusSize]} />
    </View>
  );
};

const DNAAvatarWithStatus = AvatarWithStatus(DNAAvatar);

export default DNAAvatarWithStatus;
