import React from 'react';

import { AddFill as Icon16 } from '../Icon.assets.16/AddFill';
import { AddFill as Icon24 } from '../Icon.assets.24/AddFill';
import { AddFill as Icon36 } from '../Icon.assets.36/AddFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconAddFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
