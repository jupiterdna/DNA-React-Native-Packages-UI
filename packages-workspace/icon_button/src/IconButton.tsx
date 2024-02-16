import React from 'react';
import { DNAButton, DNAButtonProps } from '@rndna/button';

/**
 * 
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { IconButton } from '@rndna/icon_button';
 * import { UserIcon } from '@rndna/icon';
 *
 * const ComponentName = () => (
 *  <DNAIconButton icon={UserIcon} />
 * );
 *
 * export default ComponentName;
 * ```
 */

export const DNAIconButton: React.FC<Omit<DNAButtonProps, 'label'>> = (props) => {

  return <DNAButton {...props} label="" />;
}
