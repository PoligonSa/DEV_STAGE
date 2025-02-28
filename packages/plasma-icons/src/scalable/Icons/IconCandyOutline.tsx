import React from 'react';

import { CandyOutline as Icon16 } from '../Icon.assets.16/CandyOutline';
import { CandyOutline as Icon24 } from '../Icon.assets.24/CandyOutline';
import { CandyOutline as Icon36 } from '../Icon.assets.36/CandyOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCandyOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
