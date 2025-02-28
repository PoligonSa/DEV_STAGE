import React from 'react';

import { TableLampFill as Icon16 } from '../Icon.assets.16/TableLampFill';
import { TableLampFill as Icon24 } from '../Icon.assets.24/TableLampFill';
import { TableLampFill as Icon36 } from '../Icon.assets.36/TableLampFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconTableLampFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
