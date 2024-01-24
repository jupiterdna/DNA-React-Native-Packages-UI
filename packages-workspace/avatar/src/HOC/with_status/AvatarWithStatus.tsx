import React from "react";
import { View, Text } from "react-native";
import { DNAAvatar } from "../../Avatar"
import { DNAAvatarProps, DNAAvatarPropsWithStatus } from "../../types";
import { useColor } from "@rndna/theme-provider";
import { styles, avatarSizeCls } from "../../styles";

/**
 * An Avatar With Status control can be used to display small circle component 
 * on the lower right corner of your avatar typically a numerical value where it will be 
 * "online" | "offline" | "inactive" | "busy"
 * 
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { DNAAvatarWithStatus } from '@rndna/avatar';
 *
 * const MyComponent = () => (
 *   <DNAAvatarWithStatus
 *     size="md"
 *     status={{
 *       option: 'online',
 *       value: 'test',
 *     }}
 *   />
 *
 * export default MyComponent;
 * ```
 */


const AvatarWithStatus = (Component: React.FC<DNAAvatarProps>) =>
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
