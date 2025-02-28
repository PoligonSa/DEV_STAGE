import React from 'react';

import { SberboxTopOutline as Icon16 } from '../Icon.assets.16/SberboxTopOutline';
import { SberboxTopOutline as Icon24 } from '../Icon.assets.24/SberboxTopOutline';
import { SberboxTopOutline as Icon36 } from '../Icon.assets.36/SberboxTopOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSberboxTopOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
