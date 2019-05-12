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
    this.api.getdataOfAll().subscribe(res=>{
      this.data = res;
    })
  }

  selecteditem(key):any{
    this.api.getJsonSVG(key).subscribe(res=>{
      let jsondata = res.design_templates_json;
      localStorage.setItem('Kanvas', JSON.stringify(jsondata[0]));
      this.router.navigate(['/edit'])
    })
  //   let url = 'https://mamata-card-images.s3.us-east-2.amazonaws.com/'+key;
  //   localStorage.setItem('Kanvas', url);
  //     this.router.navigate(['/edit']);
   }

}
