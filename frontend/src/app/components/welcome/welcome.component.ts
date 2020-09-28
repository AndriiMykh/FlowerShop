import { Component, OnInit } from '@angular/core';
import {FlowerService} from 'src/app/service/flower.service'
import { Flower } from 'src/app/common/flower';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  flowers:Flower[];
  constructor(private flowerService:FlowerService) { }

  ngOnInit(): void {
    this.flowerService.getProductList().subscribe(
      data=>{
        this.flowers=data
        console.log(this.flowers)
      }
    )
  }


}
