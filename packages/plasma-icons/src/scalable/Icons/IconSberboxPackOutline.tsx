import React from 'react';

import { SberboxPackOutline as Icon16 } from '../Icon.assets.16/SberboxPackOutline';
import { SberboxPackOutline as Icon24 } from '../Icon.assets.24/SberboxPackOutline';
import { SberboxPackOutline as Icon36 } from '../Icon.assets.36/SberboxPackOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSberboxPackOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
