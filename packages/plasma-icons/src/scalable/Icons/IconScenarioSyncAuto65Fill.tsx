import React from 'react';

import { ScenarioSyncAuto65Fill as Icon16 } from '../Icon.assets.16/ScenarioSyncAuto65Fill';
import { ScenarioSyncAuto65Fill as Icon24 } from '../Icon.assets.24/ScenarioSyncAuto65Fill';
import { ScenarioSyncAuto65Fill as Icon36 } from '../Icon.assets.36/ScenarioSyncAuto65Fill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconScenarioSyncAuto65Fill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
