import { GanttConfig, ProjectModelConfig } from '@bryntum/gantt';

export const projectConfig: Partial<ProjectModelConfig> = {
    // Empty project config
};
export const ganttConfig: Partial<GanttConfig> = {
    columns : [
        { type: 'wbs', region: 'fixed'},
        { type: 'name', width : 160 },
        { type: 'duration'},
        { type: 'startdate'}
    ],
    startDate : new Date(2022, 0, 1),
    endDate   : new Date(2022, 12, 30)
};
