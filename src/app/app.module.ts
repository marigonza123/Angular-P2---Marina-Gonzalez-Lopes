import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MarinaHomeComponent } from './marina-home/marina-home.component';
import { MarinaTarefasComponent } from './marina-tarefas/marina-tarefas.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
    RouterModule.forRoot([
      { path: 'MarinaHomeComponent', component: MarinaHomeComponent },
      { path: 'MarinaTarefasComponent', component: MarinaTarefasComponent } ]),
  declarations: [ AppComponent, HelloComponent, MarinaHomeComponent, MarinaTarefasComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
