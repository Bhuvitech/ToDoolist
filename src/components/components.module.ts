import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { DoneListComponent } from './done-list/done-list';
import { UndoneListComponent } from './undone-list/undone-list';
@NgModule({
	declarations: [DoneListComponent,
    UndoneListComponent],
	imports: [IonicModule],
	exports: [DoneListComponent,
    UndoneListComponent]
})
export class ComponentsModule {}
