import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/service/user-data.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/service/alert-service.service';
import { AlertsService } from 'angular-alert-module';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  username = ''
  name = ''
  lastName = ''
  password = ''
  passwordConfirmation = ''


  constructor(private userDataService: UserDataService, private router: Router, private alertService: AlertService) { }

  ngOnInit(): void {
  }

  registerUser(){
    this.userDataService.createUser(this.username, this.name, this.lastName, this.password).subscribe(
      data =>{},
      error =>{
        if(error.status == 200){
          console.log("User created!")
          // this.alertService.success("Created", true)
          this.router.navigate(['login'])
        } else if(error.status == 500){
          // this.ifUserExist = true;
          console.log("User Exists")
          window.scrollTo(0,0)
          this.alertService.error(`Username: ${this.username} is already registered`)
        } else {
          window.scrollTo(0,0)
          this.alertService.error("Registration failed !")
        }
      }
    )
  }

  validate(){
    if(this.username =='' || this.name =='' || this.lastName =='' || this.password =='' || this.passwordConfirmation ==''){
      window.scrollTo(0,0)
      this.alertService.error("Please enter all the details !")
    } else{
      if(this.password != this.passwordConfirmation){
        window.scrollTo(0,0)
        this.alertService.error("Passwords not match !")
      } else{
        this.registerUser()
      }
    }
  }
}
