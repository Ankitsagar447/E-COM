import { Component, OnInit } from '@angular/core';
import { signUp } from '../data-type';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],
})
export class SellerAuthComponent implements OnInit {
  showLogin=false;
  authError:String='';
  constructor(private seller: SellerService) {}

  ngOnInit(): void {
    this.seller.reloadSeller()
  }
  signUp(data: signUp): void {
    this.authError = "";
    console.warn(data);
    this.seller.userSignUp(data);
    if(data){
      this.authError= "SignUp successfully ";

    }
  }
  login(data: signUp): void {
    this.authError = "";
    this.seller.userLogin(data);
    this.seller.isLoginError.subscribe((isError)=>{
      if(isError){
        this.authError="Email or password is not correct";
      }
    })
  }
  openLogin(){
    this.authError = "";
    this.showLogin=true
  }
  openSignUp(){
    this.authError = "";
    this.showLogin=false
  }
}
