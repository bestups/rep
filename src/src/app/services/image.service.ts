import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';



export interface Image {
  id: number;
  image_path: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  constructor(private http: HttpClient) {}

  getImages() {
    return this.http.get<{ images: Image[] }>(`${environment.apiUrl}/images`);
  }

  updateImage(id: number, description: string) {
    return this.http.put(`${environment.apiUrl}/images/${id}`, { description });
  }
  
  // metody do uploadu, edycji, kasowania
}
