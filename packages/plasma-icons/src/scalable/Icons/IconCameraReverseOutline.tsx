import React from 'react';

import { CameraReverseOutline as Icon16 } from '../Icon.assets.16/CameraReverseOutline';
import { CameraReverseOutline as Icon24 } from '../Icon.assets.24/CameraReverseOutline';
import { CameraReverseOutline as Icon36 } from '../Icon.assets.36/CameraReverseOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCameraReverseOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
