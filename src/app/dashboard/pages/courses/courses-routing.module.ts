import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CoursesComponent } from "./courses.component";

@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      RouterModule.forChild([
        {
          path: '',
          component: CoursesComponent,
        },
      ])
    ],
    exports: [RouterModule],
})
export class CoursesRoutingModule { }