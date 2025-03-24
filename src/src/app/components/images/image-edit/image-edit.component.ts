import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Image, ImageService } from '../../../services/image.service';

@Component({
  selector: 'app-image-edit',
  templateUrl: './image-edit.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrls: ['./image-edit.component.css']
})


export class ImageEditComponent implements OnInit {
  imageId!: number;
  imageData!: Image;
  description = '';
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private imageService: ImageService
  ) {}

  ngOnInit(): void {
    this.imageId = +this.route.snapshot.paramMap.get('id')!;
    // pobierz szczegóły zdjęcia (jeśli backend ma endpoint np. GET /images/:id)
    // Ewentualnie w prostej wersji możesz nie pobierać ponownie, 
    // tylko przekazać z listy zdjęć, ale to wymaga innej logiki.
    
    // Pseudokod - musisz dodać getImage(id) w serwisie
    // this.imageService.getImage(this.imageId).subscribe({
    //   next: (response) => {
    //     this.imageData = response;
    //     this.description = this.imageData.description;
    //   },
    //   error: (err) => {
    //     this.errorMessage = 'Błąd pobierania zdjęcia';
    //   }
    // });
  }

  onSave() {
    // Musisz mieć updateImage w serwisie
    // this.imageService.updateImage(this.imageId, this.description).subscribe({
    //   next: () => {
    //     this.router.navigate(['/images']);
    //   },
    //   error: (err) => {
    //     this.errorMessage = 'Błąd zapisu zmian';
    //   }
    // });
  }
}
