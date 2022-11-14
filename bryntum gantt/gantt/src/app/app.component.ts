import { Component, ViewChild } from '@angular/core';
import { BryntumGanttComponent, BryntumProjectModelComponent } from '@bryntum/gantt-angular';
import { ganttConfig, projectConfig } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  startDate = new Date(2022, 0, 1);
  tasks: Object[] = [];

  dependencies = [
    { fromTask: 6, toTask: 3 }
  ];

  ganttConfig = ganttConfig;
  projectConfig = projectConfig;

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
      console.log(this.tasks);
    }).catch(function (error) {
      alert(error.message);
    });
    this.ganttComponent.features =  {
      filterBar : {
          keyStrokeFilterDelay : 100
      }
    }; 
  }
}
