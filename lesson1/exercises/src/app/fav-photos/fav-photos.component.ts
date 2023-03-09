import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Favorite Photos/Images';
  image1 = 'https://cdn.mos.cms.futurecdn.net/tm4QNWLdBhk5KZkyUzDnmn-1200-80.jpg.webp';
  image2 = 'https://horseshoebend.com/wp-content/uploads/2018/09/uppersm_600.jpg';
  image3 = 'https://thumbs.dreamstime.com/b/pacific-sunrise-lanikai-beach-hawaii-11054574.jpg';

  constructor() { }

  ngOnInit() {
  }

}