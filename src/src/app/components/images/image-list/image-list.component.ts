import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Image, ImageService } from '../../../services/image.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrls: ['./image-list.component.css']
})

export class ImageListComponent implements OnInit {
  images: Image[] = [];
  errorMessage = '';

  constructor(private imageService: ImageService, private router: Router) {}

  ngOnInit(): void {
    this.imageService.getImages().subscribe({
      next: (response) => {
        this.images = response.images;
      },
      error: (err) => {
        this.errorMessage = 'Błąd podczas pobierania zdjęć';
      }
    });
  }

  onSelectImage(image: Image) {
    this.router.navigate(['/images', image.id, 'edit']);
  }
}
