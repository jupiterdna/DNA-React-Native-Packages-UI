import React from "react";
import { DNAAvatar } from "../../Avatar"
import { DNAAvatarProps, DNAAvatarPropsWithBadge } from "../../types";
import { DNABadge } from "@rndna/badge";

/**
 * An Avatar With Status control can be used to display a badge of the avatar you've displayed.
 * 
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { DNAAvatarWithBadge } from '@rndna/avatar';
 *
 * const MyComponent = () => (
 *   <DNAAvatarWithBadge
 *     size="md"
 *     badge={{
 *       value: '99+',
 *       color: 'danger',
 *     }}
 *   />
 *
 * export default MyComponent;
 * ```
 */

const AvatarWithBadge = (Component: React.FC<DNAAvatarProps>) =>
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
