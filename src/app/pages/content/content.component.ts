import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover:string = "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0A2C59BE2EF8E3C95BD6A69AE050198F4E44123D4B5C070DA3F62EE076F4AD92/scale?width=1200&amp;aspectRatio=1.78&amp;format=webp"
  contentTitle:string = "MINHA NOTICIA"
  contentDescription:string = "ola mundo"

  constructor(private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value => 
      console.log(value.get("id"))
    )
  }

}
