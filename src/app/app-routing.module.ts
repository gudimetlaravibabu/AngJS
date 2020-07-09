import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { PMAccountComponent } from './pmaccount/pmaccount.component';
import { AllAccountsListComponent } from './all-accounts-list/all-accounts-list.component';
import { Pm2accountComponent } from './pm2account/pm2account.component';
import { Pm3accountComponent } from './pm3account/pm3account.component';
import { Pm4accountComponent } from './pm4account/pm4account.component';
import { AllphcvolComponent } from './allphcvol/allphcvol.component';
import { AllAccountsComponent } from './all-accounts/all-accounts.component';
import { DhRtbrComponent } from './dh-rtbr/dh-rtbr.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { AllAccountsDA1Component } from './all-accounts-da1/all-accounts-da1.component';
import { AllAccountsListDA1Component } from './all-accounts-list-da1/all-accounts-list-da1.component';
import { PhcProdFutComponent } from './phc-prod-fut/phc-prod-fut.component';
import { PhcNonProdFutComponent } from './phc-non-prod-fut/phc-non-prod-fut.component';
import { PhcFutComponent } from './phc-fut/phc-fut.component';
import { PhcVolSummaryComponent } from './phc-vol-summary/phc-vol-summary.component';
import { AllPhcVolRemarksComponent } from './all-phc-vol-remarks/all-phc-vol-remarks.component';
import { AllPhcVolTotalComponent } from './all-phc-vol-total/all-phc-vol-total.component';
import { VolumeTodayComponent } from './volume-today/volume-today.component';
import { PhcTodayLWDComponent } from './phc-today-lwd/phc-today-lwd.component';
import { LoadMasterDataComponent } from './load-master-data/load-master-data.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './auth-gaurd.service';
import { PhcVolTargetComponent } from './phc-vol-target/phc-vol-target.component';


const routes: Route[] = [
{path: '', redirectTo: '/allphcvolpu', pathMatch: 'full', canActivate:[AuthGaurdService]},
//{path: 'allaccounts', component: AllAccountsComponent, canActivate:[AuthGaurdService]},
//{path: 'allaccountspu', component: AllAccountsListComponent, canActivate:[AuthGaurdService]},
//{path: 'allaccountsravi', component: AllAccountsDA1Component, canActivate:[AuthGaurdService]},
//{path: 'allaccountsravipu', component: AllAccountsListDA1Component, canActivate:[AuthGaurdService]},
//{path: 'Sarada', component: PMAccountComponent, canActivate:[AuthGaurdService]},
//{path: 'Tanzeem', component: Pm2accountComponent, canActivate:[AuthGaurdService]},
//{path: 'Deepa', component: Pm3accountComponent, canActivate:[AuthGaurdService]},
//{path: 'Purnima', component: Pm4accountComponent, canActivate:[AuthGaurdService]},
{path: 'allphcvol', component: PhcVolSummaryComponent, canActivate:[AuthGaurdService]},
{path: 'allphcvolpu', component: AllphcvolComponent, canActivate:[AuthGaurdService]},
{
  path: 'phcfuture', 
  component: PhcFutComponent,
  children:[
    {path: 'PHCProdFuture', component: PhcProdFutComponent, canActivate:[AuthGaurdService]},
    {path: 'PHCNonProdFuture', component: PhcNonProdFutComponent, canActivate:[AuthGaurdService]}
  ]
},
{path: 'allphcvolpuremarks', component: AllPhcVolRemarksComponent, canActivate:[AuthGaurdService]},
{path: 'allphcvoltotal', component: AllPhcVolTotalComponent, canActivate:[AuthGaurdService]},
{
  path: 'loadmasterdata', 
  component: LoadMasterDataComponent, 
  children:[
    {path: 'dhrtbr', component: DhRtbrComponent, canActivate:[AuthGaurdService]},
    {path: 'volumetoday', component: VolumeTodayComponent, canActivate:[AuthGaurdService]},
    {path: 'phctodaylwd', component: PhcTodayLWDComponent, canActivate:[AuthGaurdService]},
    {path: 'phcvoltarget', component: PhcVolTargetComponent, canActivate:[AuthGaurdService]}
  ]
},
{path: 'addAcnt', component: AddAccountComponent, canActivate:[AuthGaurdService]},
{path: 'login', component: LoginComponent},
{path: 'logout', component: LogoutComponent, canActivate:[AuthGaurdService]}

/*{
  path: 'pm', 
  component: PMAccountComponent,
 /* children :
  [
    {path: '', redirectTo: 'pmall', pathMatch: 'full'},
    {path: 'pmall', component: AllAccountsListComponent},
  ]
}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
