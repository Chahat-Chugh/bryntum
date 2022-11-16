import { GanttConfig, ProjectModelConfig, ResourceUtilization} from '@bryntum/gantt';

export const projectConfig: Partial<ProjectModelConfig> = {
    // Empty project config
};
export const ganttConfig: Partial<GanttConfig> = {
    columns : [
        { type: 'wbs', region: 'fixed'},
        { type: 'name', width : 160},
        { type: 'duration'},
        { type: 'startdate'},
        { type : 'resourceassignment', showAvatars : true, width : 170, }
    ],
    startDate : new Date(2022, 0, 1),
    endDate   : new Date(2050, 30),
    taskRenderer: ( data: { taskRecord: any; renderData: any} ) => {data.renderData.style = `background-color: ${data.taskRecord.eventColor}`;return `<span class="name" style = "color: black">${data.taskRecord.name}</span>`;},
    features:{
        taskTooltip: {
            template : (data: { taskRecord: { startDate: any; }; }) => {
                return `<strong>${data.taskRecord.startDate}</strong>`
            } 
        },
        criticalPaths: {
            disabled: false
        },
        filterBar : {
            keyStrokeFilterDelay : 100
        },
        rollups: {
            disabled : true
        }
    },
    resources: [{
        id: 1,
        name: 'Anna',
        expanded: true
    }, {
        id: 2,
        name: 'Max',
        expanded: true
    }, {
        id: 3,
        name: 'Tom',
        expanded: true
    }],
    viewPreset : 'dayAndWeek'
      
};
