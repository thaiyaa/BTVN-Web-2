import { Routes } from '@angular/router';
import { ServiceProductImageEventComponent } from './components/service-product-image-event/service-product-image-event.component';
import { ServiceProductImageEventDetailComponent } from './components/service-product-image-event-detail/service-product-image-event-detail.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { GroupCustomersComponent } from './components/group-customers/group-customers.component';

export const routes: Routes = [
  { path: '', redirectTo: 'service-product-image-event', pathMatch: 'full' },
  // Bài 13
  { path: 'service-product-image-event', component: ServiceProductImageEventComponent },
  { path: 'service-product-image-event/:id', component: ServiceProductImageEventDetailComponent },
  // Bài 14
  { path: 'catalog', component: CatalogComponent },
  // Bài 18
  { path: 'group-customers', component: GroupCustomersComponent },
];
