import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album, Photo } from './models';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private client : HttpClient) { }

  getAlbums() : Observable<Album[]>{
    return this.client.get<Album[]>("https://jsonplaceholder.typicode.com/albums")
  }

  getAlbum(id : number): Observable<Album>{
    return this.client.get<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`)
  }

  getPhotos(id : number) : Observable<Photo[]>{
    return this.client.get<Photo[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
  }
}
