import type { Placement } from '../Tooltip';

import { PreviewGalleryProps } from './PreviewGallery';

export type StatusType = 'success' | 'error';

export type InteractionType = 'selectable' | 'draggable';

export type AddionalItemProps = Omit<PreviewGalleryProps, 'items | onItemsSortEnd'>;

export interface TooltipItem {
    /**
     * Текст тултипа.
     */
    text: string;
    /**
     * Направление раскрытия тултипа.
     */
    placement?: Placement;
    /**
     * Видимость стрелки (хвоста).
     */
    arrow?: boolean;
    /**
     * Анимированное появление/сокрытие.
     */
    animated?: boolean;
}
