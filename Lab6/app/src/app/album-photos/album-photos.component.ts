import { Component, OnInit } from '@angular/core';
import { Photo } from '../models';
import { AlbumsService } from '../albums.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit{
  photos !: Photo[]

  constructor(
    private route : ActivatedRoute,
    private albumsService : AlbumsService
    ){ }

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      if(params.get('id')){
        const id = Number(params.get('id'));
        
        this.albumsService.getPhotos(id).subscribe(photos => {
          this.photos = photos
        })
      }
    })
  }
}
