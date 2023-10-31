import { radioboxConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';
import type { BaseboxProps } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Radiobox.config';

const mergedConfig = mergeConfig(radioboxConfig, config);
const RadioboxComponent = component(mergedConfig) as React.FunctionComponent<Omit<BaseboxProps, 'indeterminate'>>;

export type RadioboxProps = typeof RadioboxComponent;

/**
 * Переключатель, или *радиокнопка*.
 */
export const Radiobox = RadioboxComponent;

export { RadioGroup } from '@salutejs/plasma-new-hope/styled-components';
