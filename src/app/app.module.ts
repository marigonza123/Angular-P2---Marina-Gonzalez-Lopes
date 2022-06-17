import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MarinaHomeComponent } from './marina-home/marina-home.component';
import { MarinaTarefasComponent } from './marina-tarefas/marina-tarefas.component';
import { MarinaTasksServiceService } from './marina-tasks-service.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'marina-home', component: MarinaHomeComponent },
      { path: 'marina-tarefas', component: MarinaTarefasComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    MarinaHomeComponent,
    MarinaTarefasComponent,
  ],
  providers: [MarinaTasksServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
