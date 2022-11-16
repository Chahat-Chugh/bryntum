import { Component, ViewChild } from '@angular/core';
import { ResourceUtilization, TaskModel, TimelineBase } from '@bryntum/gantt';
import { BryntumGanttComponent, BryntumProjectModelComponent } from '@bryntum/gantt-angular';
import { ganttConfig, projectConfig } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  startDate = new Date(2022, 0, 1);
  tasks: TaskModel[] = [];

  dependencies = [
    { fromTask: 6, toTask: 3 }
  ];

  assignments = [
    {eventId: 3, resourceId: 3, expanded: true}
  ]

  ganttConfig = ganttConfig;
  projectConfig = projectConfig;

  resourceUtil = new ResourceUtilization();
  
  @ViewChild('gantt') ganttComponent!: BryntumGanttComponent;
  @ViewChild('project') projectComponent!: BryntumProjectModelComponent;

  async ngOnInit() {
    await fetch('./assets/data.json', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(function (response) {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    }).then((data) => {
      //Load the data as new DataSource
      this.tasks = data;
    }).catch(function (error) {
      alert(error.message);
    });

    await fetch('./assets/dependencies.json', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(function (response) {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    }).then((data) => {
      this.dependencies = data;
    }).catch(function (error) {
      alert(error.message);
    });

    await fetch('./assets/assignments.json', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(function (response) {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    }).then((data) => {
      this.assignments = data;
    }).catch(function (error) {
      alert(error.message);
    });

  }
}
