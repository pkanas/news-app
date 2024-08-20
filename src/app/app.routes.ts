import { Routes } from '@angular/router';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';
import { NewsListingComponent } from './components/news-listing/news-listing.component';

export const routes: Routes = [
    { path: '', component: NewsListingComponent },
    { path: 'news', component: NewsDetailComponent },
];
