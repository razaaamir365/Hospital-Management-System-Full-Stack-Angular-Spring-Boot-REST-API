import { Routes } from '@angular/router';
import { AdminPanel } from './component/admin-panel/admin-panel';
import { AppointmentPage } from './component/appointment-page/appointment-page';
import { CreateAppointment } from './component/create-appointment/create-appointment';
import { CreatePatient } from './component/create-patient/create-patient';
import { Home } from './home/home/home';
import { Docdesh } from './doctor/docdesh/docdesh';
import { Medicinelist } from './medicine/medicinelist/medicinelist';
import { CreateMedicine } from './medicine/create-medicine/create-medicine';
import { UpdatePatient } from './component/update-patient/update-patient';
import { ViewPatient } from './component/view-patient/view-patient';
import { UpdateMedicine } from './medicine/update-medicine/update-medicine';
import { UpdateAppointment } from './component/update-appointment/update-appointment';
import { Doclogin } from './home/doclogin/doclogin';
import { AdminLogin } from './component/admin-login/admin-login';
import { AdminauthenticateguardService } from './service/adminauthenticateguard-service';
import { DoctorauthenticateguardService } from './service/doctorauthenticateguard-service';

export const routes: Routes = [

    {path:'home',component:Home},   
    {path:'',redirectTo:'home',pathMatch:'full'} ,
    {path:'admin',component:AdminPanel,canActivate:[AdminauthenticateguardService]},
    {path:'appoint',component:AppointmentPage,canActivate:[AdminauthenticateguardService]},
    {path:'create',component:CreateAppointment,canActivate:[AdminauthenticateguardService]},
    {path:'createpatient',component:CreatePatient,canActivate:[DoctorauthenticateguardService]},
    {path:'docdesh',component:Docdesh,canActivate:[DoctorauthenticateguardService]},
    {path:'view-medicine',component:Medicinelist,canActivate:[AdminauthenticateguardService]},
    {path:'create-medicine',component:CreateMedicine,canActivate:[AdminauthenticateguardService]},
    {path:'update-patient/:id',component:UpdatePatient,canActivate:[DoctorauthenticateguardService]},
    {path:'view-patient/:id',component:ViewPatient,canActivate:[DoctorauthenticateguardService]},
    {path:'update-medicine/:id',component:UpdateMedicine,canActivate:[AdminauthenticateguardService]},
    {path:'update-appoint/:id',component:UpdateAppointment,canActivate:[AdminauthenticateguardService]},
    {path:'doctor-login',component:Doclogin},
    {path:'admin-login',component:AdminLogin}
];
