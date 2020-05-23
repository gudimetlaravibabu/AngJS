import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllAccountsListComponent } from './all-accounts-list/all-accounts-list.component';
import { AccountsTileComponent } from './accounts-tile/accounts-tile.component';
import { AccountserviceService } from './accountservice.service';
import { TruncatePipe } from './truncate.pipe';
import { PMAccountComponent } from './pmaccount/pmaccount.component';
import { Pm2accountComponent } from './pm2account/pm2account.component';
import { Pm3accountComponent } from './pm3account/pm3account.component';
import { Pm4accountComponent } from './pm4account/pm4account.component';
import { AllphcvolComponent } from './allphcvol/allphcvol.component';
import { PhcVolTileComponent } from './phc-vol-tile/phc-vol-tile.component';
import { AllAccountsComponent } from './all-accounts/all-accounts.component';
import { AccountsAllTileComponent } from './accounts-all-tile/accounts-all-tile.component';
import { DhRtbrComponent } from './dh-rtbr/dh-rtbr.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { AllAccountsDA1Component } from './all-accounts-da1/all-accounts-da1.component';
import { AllAccountsListDA1Component } from './all-accounts-list-da1/all-accounts-list-da1.component';
import { OnlynumberDirective } from './onlynumber.directive';
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
import { AuthenticationService } from './authentication.service';
import { AuthGaurdService } from './auth-gaurd.service';
import { BasicAuthHttpInterceptorService } from './basic-auth-http-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    AllAccountsListComponent,
    AccountsTileComponent,
    TruncatePipe,
    PMAccountComponent,
    Pm2accountComponent,
    Pm3accountComponent,
    Pm4accountComponent,
    AllphcvolComponent,
    PhcVolTileComponent,
    AllAccountsComponent,
    AccountsAllTileComponent,
    DhRtbrComponent,
    AddAccountComponent,
    AllAccountsDA1Component,
    AllAccountsListDA1Component,
    OnlynumberDirective,
    PhcProdFutComponent,
    PhcNonProdFutComponent,
    PhcFutComponent,
    PhcVolSummaryComponent,
    AllPhcVolRemarksComponent,
    AllPhcVolTotalComponent,
    VolumeTodayComponent,
    PhcTodayLWDComponent,
    LoadMasterDataComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AccountserviceService, TruncatePipe, AuthenticationService, AuthGaurdService,
  { provide: HTTP_INTERCEPTORS, useClass:BasicAuthHttpInterceptorService, multi:true }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
