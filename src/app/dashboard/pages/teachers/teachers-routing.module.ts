import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TeachersComponent } from "./teachers.component";

@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      RouterModule.forChild([
        {
            path: '',
            component: TeachersComponent,
        },
      ])
    ],
    exports: [RouterModule],
})
export class TeachersRoutingModule { }