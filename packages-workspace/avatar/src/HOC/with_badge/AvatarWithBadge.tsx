import React from "react";
import { View, Text } from "react-native";
import { DNAAvatar } from "../../Avatar"
import { DNAAvatarProps, DNAAvatarPropsWithBadge } from "../../types";
import { DNABadge } from "@rndna/badge";

const AvatarWithBadge =
  (Component: React.FC<DNAAvatarProps>) =>
  (props: DNAAvatarPropsWithBadge) => {
    const {
      badge,
    } = props;

  const { color = "danger", value } = badge

  return (
    <DNABadge value={value} color={color}>
      <Component {...props} />
    </DNABadge>
  );
};

const DNAAvatarWithBadge = AvatarWithBadge(DNAAvatar);

export default DNAAvatarWithBadge;
