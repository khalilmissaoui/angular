import { Component, OnInit } from '@angular/core';
import {CrudServiceService} from '../shared/crud-service.service';
import {User} from '../model/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  username: string  ;
  password: string  ;
  listUsers: User[] = [];


  constructor(private service: CrudServiceService , private route : Router) { }

  ngOnInit(): void {
    this.service.getEmployee().subscribe((users) => this.listUsers = users);

    }


      auth(): void {
        var isfound:boolean =false;

        for(let x of this.listUsers){

          if(this.username==x.username && this.password==x.password){
            console.log("found");
            this.route.navigate(['']);
            isfound = true;
            break;
          }else {
            console.log("not found");

          }
        }
        if(isfound==false){
          alert(`Something wrong :
        Username or Password is not valid ! Please check again :)`);
        }

      }
  }


