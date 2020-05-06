import { Component, OnInit } from '@angular/core';
import { AUTHENTICATED_USER } from 'src/app/app.constants';
import { UserDataService } from 'src/app/service/user-data.service';
import { AlertService } from 'src/app/service/alert-service.service';
import { BasicAuthenticationService } from 'src/app/service/basic-authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  username = ''
  name = ''
  lastName = ''
  password = ''
  passwordConfirmation = ''
  authority = ''
  isDisabled = true
  oldUsername = ''

  constructor(private userService: UserDataService, private alertService: AlertService, private basicAuthenticationService: BasicAuthenticationService,
    private router: Router) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.handleUserDetails()
  }

  validate(){
    if(this.username == '' || this.name == '' || this.lastName == '' || this.password == '' || this.passwordConfirmation == ''){
      window.scrollTo(0,0)
      this.alertService.error("Please enter all the details !", false)  
    } else if (this.password != this.passwordConfirmation){
      window.scrollTo(0,0)
      this.alertService.error("Passwords not match !", false)
    } else{
      this.updateUser();
    }
  }

  enableEdit(){
    this.isDisabled = false;
  }

  handleUserDetails(){
    const username: string = sessionStorage.getItem(AUTHENTICATED_USER);

    this.userService.getUser(username).subscribe(
      data => {
        this.username = data.username
        this.oldUsername = data.username
        this.name = data.name
        this.lastName = data.lastName
        switch(data.role.role){
          case 'ROLE_USER':{
            this.authority = 'Account status: Basic User';
            break;
          }
          case 'ROLE_ADMIN':{
            this.authority = 'Account status: Administrator';
            break;
          }
          default: {
            break;
          }
        }
      },
      error => {
        // console.log(error)
      }
    )
  }

  updateUser(){
    this.userService.updateUser(this.username, this.name, this.lastName, this.password, this.oldUsername).subscribe(
      data => {
      },
      error => {
        // console.log(error)
        if(error.status == 200){
          window.scrollTo(0,0)
          this.alertService.success("User profile updated succesfully !")
          this.basicAuthenticationService.executeAuthenticationService(this.username, this.password).subscribe(
            data => {
              this.router.navigate(['account'])
              this.handleUserDetails()
              this.isDisabled = true;
            }
          )


        }
      }
    )
  }

}
