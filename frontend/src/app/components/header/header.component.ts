import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Flower } from 'src/app/common/flower';
import { FlowerCategoryService } from 'src/app/service/flower-category.service';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { FlowerCategory } from 'src/app/common/flower-category';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  keyword:string;
  flowersCategory:FlowerCategory[];
  constructor(private router:Router,
    private flowerCategoryService:FlowerCategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }
  searchByName(){
    this.router.navigateByUrl(`/flowers/${this.keyword}`)
  }
  getCategories(){
    this.flowerCategoryService.getProductList().subscribe(
      data=>{
        console.log("Flower categories:"+data);
        this.flowersCategory=data
      }
    )
  }
}
