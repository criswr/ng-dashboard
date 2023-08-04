import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { StudentsComponent } from "./students.component";

@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      RouterModule.forChild([
        {
            path: '',
            component: StudentsComponent,
        },
      ])
    ],
    exports: [RouterModule],
})
export class StudentsRoutingModule { }