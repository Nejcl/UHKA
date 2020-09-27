import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


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

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
