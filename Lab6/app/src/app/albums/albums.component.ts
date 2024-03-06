import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Album } from '../models';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit{
  
  albums !: Album[]

  constructor(private albumService : AlbumsService){

  }

  ngOnInit(){
    this.albumService.getAlbums().subscribe(albums => this.albums = albums)
  }

  removeAlbum(id : number){
    this.albums = this.albums.filter(album => album.id !== id);
  }
}
