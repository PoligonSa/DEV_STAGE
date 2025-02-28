import React from 'react';

import { CrownOutline as Icon16 } from '../Icon.assets.16/CrownOutline';
import { CrownOutline as Icon24 } from '../Icon.assets.24/CrownOutline';
import { CrownOutline as Icon36 } from '../Icon.assets.36/CrownOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCrownOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
