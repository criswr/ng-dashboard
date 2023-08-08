import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing"
import { TestBed } from "@angular/core/testing"
import { RouterTestingModule } from "@angular/router/testing"
import { MockProvider } from 'ng-mocks'
import { Router } from "@angular/router"
import { UsersService } from "./users.service"
import { User } from "./users.component"
import { MatSnackBar } from "@angular/material/snack-bar"


describe('UsersService', () => {
  let service: UsersService
  let httpController: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule, 
        RouterTestingModule
    ],
      providers: [
        MockProvider(Router),
        MatSnackBar
      ]
    })

    service = TestBed.inject(UsersService)
    httpController = TestBed.inject(HttpTestingController)

  })

  afterEach(() => {  httpController.verify() })

  it('should create an user, and user$ should emit an array containting the new user', done => {

    const mockUser: User = {
        id: 'ules79r8e',
        email: 'email@mail.com',
        password: '123456789',
        name: 'Name',
        lastname: 'Lastname',
        token: '76b85765-e1a3-5597-0031-e90b4167f9c7',
    }

    const mockResponse: User[] = [mockUser]

    service.createUser({
      ...mockUser
    })

    httpController.expectOne({
      method: 'POST',
      url: 'http://localhost:3000/users'
    }).flush(mockResponse)

    service.users$.subscribe({
      next: newUserArr => {
        expect(newUserArr).toBeTruthy()
        expect(newUserArr[0]).toContain(mockUser)
        done()
      }
    })
  })
})