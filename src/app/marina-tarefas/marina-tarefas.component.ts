import { Component, OnInit } from '@angular/core';
import { MarinaTasksServiceService } from '../marina-tasks-service.service';

@Component({
  selector: 'app-marina-tarefas',
  templateUrl: './marina-tarefas.component.html',
  styleUrls: ['./marina-tarefas.component.css'],
})
export class MarinaTarefasComponent implements OnInit {
  lista = null;
  tarefa = 'Nome da tarefa';
  constructor(private tasks: MarinaTasksServiceService) {}

  deletarItem(i: number) {
    this.tasks.deleteItem(i);
  }

  criarItem() {
    this.tasks.createItem(this.tarefa);
  }

  ngOnInit() {
    this.lista = this.tasks.getList();
  }
}
