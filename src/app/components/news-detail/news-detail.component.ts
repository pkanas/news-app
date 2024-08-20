import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-news-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-detail.component.html',
  styleUrl: './news-detail.component.scss'
})
export class NewsDetailComponent {

  article: any;

  constructor(private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.article = this.route.snapshot.params;
  }

  goBack() {
    this.router.navigate(['/']); 
  }
}
