import { Component, OnInit } from '@angular/core';
import { MarinaTasksServiceService } from '../marina-tasks-service.service';

@Component({
  selector: 'app-marina-home',
  templateUrl: './marina-home.component.html',
  styleUrls: ['./marina-home.component.css']
})
export class MarinaHomeComponent implements OnInit {
  count;
  constructor(private tasks: MarinaTasksServiceService) {}

  ngOnInit() {
    this.count = this.tasks.getList().length;
  }

}