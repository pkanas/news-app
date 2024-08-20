import { Component } from '@angular/core';
import { NewsService } from '../../service/news.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-listing',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './news-listing.component.html',
  styleUrl: './news-listing.component.scss',

})
export class NewsListingComponent {
  news: any[] = [];
  fromDate?: string;
  toDate?: string;  
  searchQuery?: string = 'apple';    
  errorMessage: string = '';

  constructor(private newsService: NewsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchNews();
  }

  fetchNews(): void {
    this.newsService.getNews(this.searchQuery, this.fromDate, this.toDate)
      .subscribe(
        response => {
          this.news = response.articles;
          this.errorMessage = ''; 
        },
        error => {
          this.news = [];
          this.errorMessage = error.message || 'An error occurred while fetching the news.';
        }
      );
  }

  onFilterChange(): void {
    this.fetchNews();
  }
 

  viewDetails(article: any): void {
    this.router.navigate(['/news', { ...article }]);
  }

}
