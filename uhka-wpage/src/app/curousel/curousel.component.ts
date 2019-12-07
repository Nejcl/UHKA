import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curousel',
  templateUrl: './curousel.component.html',
  styleUrls: ['./curousel.component.css']
})
export class CurouselComponent implements OnInit {
  title = 'owl-carousel';
 
  mySlideImages = ['../../assets/slika1.jpg','../../assets/slika3.jpg'];
  myCarouselImages =['../../assets/slika1.jpg','../../assets/slika3.jpg'];
   
  mySlideOptions={items: 1, dots: true, nav: true};
  myCarouselOptions={items: 3, dots: true, nav: true};
  
  constructor() { }

  ngOnInit() {
  }

}
