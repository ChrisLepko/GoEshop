import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/service/alert-service.service';
import { BasicAuthenticationService } from 'src/app/service/basic-authentication.service';
import { AUTHENTICATED_USER } from 'src/app/app.constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''

  constructor(private router: Router, private alertService: AlertService, 
    private basicAuthenticationService: BasicAuthenticationService
    ) { }



  ngOnInit(): void {
    window.scrollTo(0,0);
    console.log(this.basicAuthenticationService.isUserLoggedIn())
    console.log(sessionStorage.getItem(AUTHENTICATED_USER))
  }


  signIn(){
    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password).subscribe(
      data => {
        this.basicAuthenticationService.setUserRole(this.username).subscribe(
          data => {
            this.router.navigate(['products']);
          }
        )

      },
      error => {
        window.scrollTo(0,0)
        this.alertService.error("Invalid Credentials ! Please Try Again")
      }
    )
  }

  validate(){
    if(this.username == '' || this.password == ''){
      window.scrollTo(0,0)
      this.alertService.error("Please enter all the details !")
    } else{
      this.signIn()
    }
  }


}
