import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Here\'s some pictures...';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://image.freepik.com/free-vector/banana_94396-12.jpg';
  image3 = 'https://media.istockphoto.com/vectors/stamprsimp2red-vector-id1096052566?b=1&k=6&m=1096052566&s=612x612&w=0&h=trgt6UoTrnbxwTR0_lcbBq-A2vMH2Z4T05ebxRaWI30=';

  constructor() { }

  ngOnInit() {
  }

}