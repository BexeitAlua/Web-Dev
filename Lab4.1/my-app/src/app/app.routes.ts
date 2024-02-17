import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';

export const routes: Routes = [
    {
        path: 'cart',
        component: CartComponent
    },
    {
        path: '',
        component:ProductAlertsComponent
    }
];
