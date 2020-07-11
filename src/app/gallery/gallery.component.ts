import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  gallery ={
    image1:"gallery-image-1.jpg",
    image2:"gallery-image-2.jpg",
    image3:"gallery-image-3.jpg",
    image4:"gallery-image-4.jpg",
    image5:"gallery-image-5.jpg",
    image6:"gallery-image-6.jpg",

  };
  constructor() { }

  ngOnInit() {
  }

}
