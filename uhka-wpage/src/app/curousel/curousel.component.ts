import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curousel',
  templateUrl: './curousel.component.html',
  styleUrls: ['./curousel.component.css']
})
export class CurouselComponent implements OnInit {
  title = 'owl-carousel';
 
  images = [
    {
      text: "Čiščenje oken in vrat.",
      image: "../../assets/slika1.jpg"
    },
    {
      text: "Mokro in suho ekstrakcijsko čiščenje",
      image: "../../assets/slika3.jpg"
    },
    {
      text: "Uporaba eko čistil.",
      image: "../../assets/slika4.jpg"
    },
    
    ];
  myCarouselImages =['../../assets/slika1.jpg','../../assets/slika3.jpg'];
   
  mySlideOptions={items: 1, dots: false, nav: false, autoplay:true,
    autoplayTimeout:5000,
    loop:true,
    autoplayHoverPause:true};
  myCarouselOptions={items: 3, dots: true, nav: true,};

  constructor() { }

  ngOnInit() {
  }

}
