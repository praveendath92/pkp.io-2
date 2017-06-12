import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { LayoutDependenciesModule } from '../layout-dependencies.module';

@NgModule({
  imports: [CommonModule, LayoutDependenciesModule],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent]
})
export class ToolbarModule { }
