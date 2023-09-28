import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path: 'uikit', loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UIkitModule) },
                    { path: 'utilities', loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
                    { path: 'documentation', loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule) },
                    { path: 'blocks', loadChildren: () => import('./demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
                    { path: 'pages', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule) }
                ]
            },
            // { path: 'landing', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
            // localhost:4200/auth
            // localhost:4200/home
            // localhost:4200/adopciones
            // localhost:4200/ donaciones
            // localhost:4200/ ...
            { path: 'auth', loadChildren: () => import('./colitas/modules/components/auth/auth.module').then(m => m.AuthModule) },
            { path: 'home', loadChildren: () => import('./colitas/modules/components/home/home.module').then(m => m.HomeModule) },
            { path: 'adopciones', loadChildren: () => import('./colitas/modules/components/adopciones/adopciones.module').then(m => m.AdopcionesModule) },
            { path: 'donaciones', loadChildren: () => import('./colitas/modules/components/donaciones/donaciones.module').then(m => m.DonacionesModule) },
            { path: 'contactanos', loadChildren: () => import('./colitas/modules/components/contactanos/contactanos.module').then(m => m.ContactanosModule) },
            { path: 'instalaciones', loadChildren: () => import('./colitas/modules/components/instalaciones/instalaciones.module').then(m => m.InstalacionesModule) },
            { path: 'nosotros', loadChildren: () => import('./colitas/modules/components/nosotros/nosotros.module').then(m => m.NosotrosModule) },
            { path: 'publicaciones', loadChildren: () => import('./colitas/modules/components/publicaciones/publicaciones.module').then(m => m.PublicacionesModule) },
            
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
