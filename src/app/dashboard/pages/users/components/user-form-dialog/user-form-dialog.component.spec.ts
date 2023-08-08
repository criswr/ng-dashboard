import { TestBed } from "@angular/core/testing"
import { UserFormDialogComponent } from "./user-form-dialog.component"
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog"
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatInputModule } from "@angular/material/input"
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBar } from "@angular/material/snack-bar"
import { UsersService } from "../../users.service"

describe('UserFormDialogComponent', () => {
    let component: UserFormDialogComponent

    beforeEach(() => {
        TestBed.configureTestingModule({
        declarations: [UserFormDialogComponent],
        providers: [
            {
                provide: MatDialogRef,
                useValue: {}
            },
            {   provide: MAT_DIALOG_DATA, 
                useValue: []
            },
            MatSnackBar
        ],
        imports: [
            MatFormFieldModule, 
            MatInputModule,
            HttpClientTestingModule,
        ],
        })

        component = TestBed.createComponent(UserFormDialogComponent).componentInstance
    })

    it('should be invalid if fields are blank', () => {
        component.emailControl.setValue('')
        component.nameControl.setValue('')
        component.lastnameControl.setValue('')
        component.passwordControl.setValue('')

        expect(component.userForm.invalid).toBeTrue()
    })

    it('should be valid if all data is correctly setted', () => {  
        const usersService = TestBed.inject(UsersService)

        component.emailControl.setValue('test@email.com')
        component.nameControl.setValue('Name')
        component.lastnameControl.setValue('Lastname')
        component.passwordControl.setValue('123456789')
        
        expect(component.userForm.valid).toBeTrue()
      })
})