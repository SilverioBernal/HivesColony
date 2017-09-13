import { CustomerEditComponent } from './customers/customer-edit/customer-edit.component';
import { OrderHeaderComponent } from './order/order-header/order-header.component';
import { OrderNewComponent } from './order/order-new/order-new.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { CustomerAddComponent } from './customers/customer-add/customer-add.component';
import { LoginComponent } from './seguridad/login/login.component';
import { HomeComponent } from './home/home.component';
import {Routes,RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {DashboardDemo} from './demo/view/dashboarddemo';
import {SampleDemo} from './demo/view/sampledemo';
import {FormsDemo} from './demo/view/formsdemo';
import {DataDemo} from './demo/view/datademo';
import {PanelsDemo} from './demo/view/panelsdemo';
import {OverlaysDemo} from './demo/view/overlaysdemo';
import {MenusDemo} from './demo/view/menusdemo';
import {MessagesDemo} from './demo/view/messagesdemo';
import {MiscDemo} from './demo/view/miscdemo';
import {EmptyDemo} from './demo/view/emptydemo';
import {ChartsDemo} from './demo/view/chartsdemo';
import {FileDemo} from './demo/view/filedemo';
import {UtilsDemo} from './demo/view/utilsdemo';
import {Documentation} from './demo/view/documentation';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'dashboard', component: DashboardDemo},
    {path: 'sample', component: SampleDemo},
    {path: 'forms', component: FormsDemo},
    {path: 'data', component: DataDemo},
    {path: 'panels', component: PanelsDemo},
    {path: 'overlays', component: OverlaysDemo},
    {path: 'menus', component: MenusDemo},
    {path: 'messages', component: MessagesDemo},
    {path: 'misc', component: MiscDemo},
    {path: 'empty', component: EmptyDemo},
    {path: 'charts', component: ChartsDemo},
    {path: 'file', component: FileDemo},
    {path: 'utils', component: UtilsDemo},
    {path: 'documentation', component: Documentation},
    {path: 'customer', component: CustomerListComponent},
    {path: 'customer/add', component: CustomerAddComponent},
    {path: 'customer/edit/:id', component: CustomerEditComponent},
    {path: 'login', component: LoginComponent},
    {path: 'order', component: OrderNewComponent},
    {path: 'order/:id', component: OrderNewComponent},
    {path: 'order/customer/:id', component: CustomerAddComponent},
    {path: 'order/head/:id', component: OrderHeaderComponent},
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
