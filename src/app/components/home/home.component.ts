import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private api: ApiService,private router: Router) { }
  data : any;
  ngOnInit() {
    this.api.getdata().subscribe(res=>{
      this.data = res;
    })
  }

  selecteditem(key):any{
    localStorage.setItem('Kanvas', JSON.stringify(key));
    this.router.navigate(['/edit'])
  }

}
