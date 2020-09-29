import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Flower } from 'src/app/common/flower';
import { FlowerService } from 'src/app/service/flower.service';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  keyword:string;
  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }
  searchByName(){
    this.router.navigateByUrl(`/flowers/${this.keyword}`)
  }
}
