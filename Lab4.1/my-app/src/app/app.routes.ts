import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductListComponent } from './product-list/product-list.component';

export const routes: Routes = [
    {
        path: 'cart',
        component: CartComponent
    },
    {
        path: 'product-alerts',
        component:ProductAlertsComponent
    },
    {
        path:'product-list',
        component:ProductListComponent
    }
];
