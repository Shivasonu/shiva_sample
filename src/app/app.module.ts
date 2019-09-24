import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { SecondComponent } from './second/second.component';
import { FirstComponent } from './first/first.component';
import { RouterModule, Routes } from "@angular/router";
import { CustomMaterialModule } from "./core/material.module";
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { LoginComponent } from './login/login.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { FifthComponent } from './fifth/fifth.component';
import { SixthComponent } from './sixth/sixth.component';
import { PeopleComponent } from './people/people.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SettingsComponent } from './settings/settings.component';
import { ReportsComponent } from './reports/reports.component';
import { AddComponent } from './people/add/add.component';
import { NgxPaginationModule } from 'ngx-pagination';


import { HttpClientModule } from '@angular/common/http';
import { AddcontactComponent } from './notifications/addcontact/addcontact.component';
import { AddcaseComponent } from './fourth/addcase/addcase.component';
import { AddappointmentComponent } from './settings/addappointment/addappointment.component';
import { ViewComponent } from './people/view/view.component';
import { EditComponent } from './people/edit/edit.component';
import { ViewcontactComponent } from './notifications/viewcontact/viewcontact.component';
import { EditcontactComponent } from './notifications/editcontact/editcontact.component';
import { ViewappointmentComponent } from './settings/viewappointment/viewappointment.component';
import { ClientsComponent } from './second/clients/clients.component';
import { EditappointmentComponent } from './settings/editappointment/editappointment.component';
import { AddclientsComponent } from './second/clients/addclients/addclients.component';
import { ViewclientsComponent } from './second/clients/viewclients/viewclients.component';
import { EditclientsComponent } from './second/clients/editclients/editclients.component';
import { EmployeesComponent } from './second/employees/employees.component';
import { AddemployeesComponent } from './second/employees/addemployees/addemployees.component';
import { ViewemployeesComponent } from './second/employees/viewemployees/viewemployees.component';
import { EditemployeesComponent } from './second/employees/editemployees/editemployees.component';
import { UserRoleComponent } from './second/user-role/user-role.component';
import { AdduserroleComponent } from './second/user-role/adduserrole/adduserrole.component';
import { EdituserroleComponent } from './second/user-role/edituserrole/edituserrole.component';
import { DepartmentsComponent } from './second/departments/departments.component';
import { PermissionsComponent } from './second/permissions/permissions.component';
import { AdddepartmentsComponent } from './second/departments/adddepartments/adddepartments.component';
import { EditdepartmentsComponent } from './second/departments/editdepartments/editdepartments.component';
import { NoticeComponent } from './second/notice/notice.component';
import { AddnoticeComponent } from './second/notice/addnotice/addnotice.component';
import { ViewnoticeComponent } from './second/notice/viewnotice/viewnotice.component';
import { EditnoticeComponent } from './second/notice/editnotice/editnotice.component';
import { LeavetypeComponent } from './second/leavetype/leavetype.component';
import { AddleavesComponent } from './second/leavetype/addleaves/addleaves.component';
import { EditleavesComponent } from './second/leavetype/editleaves/editleaves.component';
import { AttendanceComponent } from './second/attendance/attendance.component';
import { LeavenotificationComponent } from './second/leavenotification/leavenotification.component';
import { ViewcaseComponent } from './third/viewcase/viewcase.component';
import { AddcasesComponent } from './third/addcases/addcases.component';
import { AllcasesComponent } from './third/allcases/allcases.component';
import { HearingdatesComponent } from './third/hearingdates/hearingdates.component';
import { HearingdetailsComponent } from './third/hearingdetails/hearingdetails.component';
import { EditcasesComponent } from './third/editcases/editcases.component';
import { ArchivedcasesComponent } from './third/archivedcases/archivedcases.component';
import { StarredcasesComponent } from './third/starredcases/starredcases.component';
import { CarchivedcasesComponent } from './third/carchivedcases/carchivedcases.component';
import { NgMultiSelectDropDownModule } from '../../node_modules/ng-multiselect-dropdown';
import { MasterComponent } from './master/master.component';
import { LocationComponent } from './master/location/location.component';
import { TaxComponent } from './master/tax/tax.component';
import { CaseComponent } from './master/case/case.component';
import { CourtComponent } from './master/court/court.component';
import { ActComponent } from './master/act/act.component';
import { CourtCategoryComponent } from './master/court-category/court-category.component';
import { CaseStagesComponent } from './master/case-stages/case-stages.component';
import { PaymentModeComponent } from './master/payment-mode/payment-mode.component';
import { AddlocationComponent } from './master/location/addlocation/addlocation.component';
import { EditlocationComponent } from './master/location/editlocation/editlocation.component';
import { AddtaxComponent } from './master/tax/addtax/addtax.component';
import { EdittaxComponent } from './master/tax/edittax/edittax.component';
import { AddcasecategoryComponent } from './master/case/addcasecategory/addcasecategory.component';
import { EditcasecategoryComponent } from './master/case/editcasecategory/editcasecategory.component';
import { AddcourtcategoryComponent } from './master/court-category/addcourtcategory/addcourtcategory.component';
import { EditcourtcategoryComponent } from './master/court-category/editcourtcategory/editcourtcategory.component';
import { EditactComponent } from './master/act/editact/editact.component';
import { AddactComponent } from './master/act/addact/addact.component';
import { AddcourtComponent } from './master/court/addcourt/addcourt.component';
import { EditcourtComponent } from './master/court/editcourt/editcourt.component';
import { AddcasestagesComponent } from './master/case-stages/addcasestages/addcasestages.component';
import { EditcasestagesComponent } from './master/case-stages/editcasestages/editcasestages.component';
import { AddpaymentmodeComponent } from './master/payment-mode/addpaymentmode/addpaymentmode.component';
import { EditpaymentmodeComponent } from './master/payment-mode/editpaymentmode/editpaymentmode.component';
import { from } from 'rxjs';
//import { EditorModule } from '@progress/kendo-angular-editor';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { AlltasksComponent } from './fifth/alltasks/alltasks.component';
import { AddtasksComponent } from './fifth/alltasks/addtasks/addtasks.component';
import { ViewtasksComponent } from './fifth/alltasks/viewtasks/viewtasks.component';
import { EdittasksComponent } from './fifth/alltasks/edittasks/edittasks.component';
import { CommenttasksComponent } from './fifth/alltasks/commenttasks/commenttasks.component';
import { MytasksComponent } from './fifth/mytasks/mytasks.component';
import { SendmessageComponent } from './sixth/sendmessage/sendmessage.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BankdetailsComponent } from './second/employees/bankdetails/bankdetails.component';
import { AddbankComponent } from './second/employees/bankdetails/addbank/addbank.component';
import { ViewdepartmentsComponent } from './second/departments/viewdepartments/viewdepartments.component';
import { CookieService } from 'ngx-cookie-service';
import { FeesComponent } from './third/fees/fees.component';
import { ViewcasestudyComponent } from './fourth/viewcasestudy/viewcasestudy.component';
import { EditcasestudyComponent } from './fourth/editcasestudy/editcasestudy.component';
import { CasestudyattachementsComponent } from './fourth/casestudyattachements/casestudyattachements.component';
import { HolidaysComponent } from './second/holidays/holidays.component';
import { AddholidaysComponent } from './second/holidays/addholidays/addholidays.component';
import { ClientmoduleComponent } from './clientmodule/clientmodule.component';
import { CdashboardComponent } from './clientmodule/cdashboard/cdashboard.component';
import { CmycasesComponent } from './clientmodule/cmycases/cmycases.component';
import { CmessagesComponent } from './clientmodule/cmessages/cmessages.component';
import { DetailsComponent } from './clientmodule/cmycases/details/details.component';
import { ProfileComponent } from './first/profile/profile.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { DocumentsComponent } from './third/documents/documents.component';
import { AdddocumentsComponent } from './third/documents/adddocuments/adddocuments.component';
import { EditdocumentsComponent } from './third/documents/editdocuments/editdocuments.component';
import { ManageComponent } from './third/documents/manage/manage.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'login', data: { title: 'First Component' }, pathMatch: 'full' },
  {
    path: 'login', component: LoginLayoutComponent, data: { title: 'First Component' },
    children: [
      { path: '', component: LoginComponent }
    ]
  },
  {
    path: 'main', component: HomeLayoutComponent,
    children: [
      { path: 'dashboard', component: FirstComponent },
      { path: 'hrmange', component: SecondComponent },
      { path: 'cases', component: ThirdComponent },
      { path: 'casestudy', component: FourthComponent },
      { path: 'tasks', component: FifthComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'message', component: SixthComponent },
      { path: 'todolist', component: PeopleComponent },
      { path: 'contacts', component: NotificationsComponent },
      { path: 'appointments', component: SettingsComponent },
      { path: 'todolist/add', component: AddComponent },
      { path: 'contacts/addcontact', component: AddcontactComponent },
      { path: 'casestudy/addcase', component: AddcaseComponent },
      { path: 'casestudy/viewcasestudy', component: ViewcasestudyComponent },
      { path: 'casestudy/viewcasestudy/:id', component: ViewcasestudyComponent },
      { path: 'casestudy/editcasestudy', component:EditcasestudyComponent},
      { path: 'casestudy/editcasestudy/:id', component:EditcasestudyComponent},
      { path: 'casestudy/casestudyattachements/:id', component: CasestudyattachementsComponent},
      { path: 'appointments/addappointment', component: AddappointmentComponent },
      { path: 'todolist/view', component: ViewComponent },
      { path: 'todolist/view/:id', component: ViewComponent },
      { path: 'todolist/edit', component: EditComponent },
      { path: 'todolist/edit/:id', component: EditComponent },
      { path: 'contacts/viewcontact', component: ViewcontactComponent },
      { path: 'contacts/viewcontact/:id', component: ViewcontactComponent },
      { path: 'contacts/editcontact', component: EditcontactComponent },
      { path: 'contacts/editcontact/:id', component: EditcontactComponent },
      { path: 'appointments/viewappointment', component: ViewappointmentComponent },
      { path: 'appointments/viewappointment/:id', component: ViewappointmentComponent },
      { path: 'appointments/editappointment/', component: EditappointmentComponent },
      { path: 'appointments/editappointment/:id', component: EditappointmentComponent },
      { path: 'hrmange/clients', component: ClientsComponent },
      { path: 'hrmange/clients/addclients', component: AddclientsComponent },
      { path: 'hrmange/clients/viewclients', component: ViewclientsComponent },
      { path: 'hrmange/clients/viewclients/:id', component: ViewclientsComponent },
      { path: 'hrmange/clients/editclients', component: EditclientsComponent },
      { path: 'hrmange/clients/editclients/:id', component: EditclientsComponent },
      { path: 'hrmange/employees', component: EmployeesComponent },
      { path: 'hrmange/employees/addemployees', component: AddemployeesComponent },
      { path: 'hrmange/employees/viewemployees', component: ViewemployeesComponent },
      { path: 'hrmange/employees/viewemployees/:id', component: ViewemployeesComponent },
      { path: 'hrmange/employees/editemployees', component: EditemployeesComponent },
      { path: 'hrmange/employees/editemployees/:id', component: EditemployeesComponent },
      { path: 'hrmange/user-role', component: UserRoleComponent },
      { path: 'hrmange/user-role/adduserrole', component: AdduserroleComponent },
      { path: 'hrmange/user-role/edituserrole', component: EdituserroleComponent },
      { path: 'hrmange/user-role/edituserrole/:id', component: EdituserroleComponent },
      { path: 'hrmange/departments', component: DepartmentsComponent },
      { path: 'hrmange/permissions', component: PermissionsComponent },
      { path: 'hrmange/departments/adddepartments', component: AdddepartmentsComponent },
      { path: 'hrmange/departments/viewdepartments', component:ViewdepartmentsComponent },
      { path: 'hrmange/departments/viewdepartments/:id', component:ViewdepartmentsComponent },
      { path: 'hrmange/departments/editdepartments', component:EditdepartmentsComponent },
      { path: 'hrmange/departments/editdepartments/:id', component:EditdepartmentsComponent },
      { path: 'hrmange/notice', component: NoticeComponent },
      { path: 'hrmange/notice/addnotice', component: AddnoticeComponent },
      { path: 'hrmange/notice/viewnotice', component: ViewnoticeComponent },
      { path: 'hrmange/notice/viewnotice/:id', component: ViewnoticeComponent },
      { path: 'hrmange/notice/editnotice', component: EditnoticeComponent },
      { path: 'hrmange/notice/editnotice/:id', component: EditnoticeComponent },
      { path: 'hrmange/leavetype', component: LeavetypeComponent },
      { path: 'hrmange/leavetype/addleaves', component: AddleavesComponent },
      { path: 'hrmange/leavetype/editleaves', component: EditleavesComponent },
      { path: 'hrmange/leavetype/editleaves/:id', component: EditleavesComponent },
      { path: 'hrmange/attendance', component: AttendanceComponent },
      { path: 'hrmange/leavenotification', component: LeavenotificationComponent },
      { path: 'cases/allcases', component: AllcasesComponent },
      { path: 'cases/addcases', component: AddcasesComponent },
      { path: 'cases/viewcase', component: ViewcaseComponent },
      { path: 'cases/viewcase/:id', component: ViewcaseComponent },
      { path: 'cases/hearingdates', component: HearingdatesComponent },
      { path: 'cases/hearingdates/:id', component: HearingdatesComponent },
      { path: 'cases/hearingdetails', component: HearingdetailsComponent },
      { path: 'cases/hearingdetails/:id', component: HearingdetailsComponent },
      { path: 'cases/fees', component: FeesComponent },
      { path: 'cases/fees/:id', component: FeesComponent },
      { path: 'cases/editcases', component: EditcasesComponent },
      { path: 'cases/editcases/:id', component: EditcasesComponent },
      { path: 'cases/archivedcases', component: ArchivedcasesComponent },
      { path: 'cases/archivedcases/:id', component: ArchivedcasesComponent },
      { path: 'cases/starredcases', component: StarredcasesComponent },
      { path: 'cases/carchivedcases', component: CarchivedcasesComponent },
      { path: 'cases/documents', component:DocumentsComponent},
      { path: 'cases/documents/adddocuments', component:AdddocumentsComponent},
      { path: 'cases/documents/editdocuments', component:EditdocumentsComponent},
      { path: 'cases/documents/editdocuments/:id', component:EditdocumentsComponent},
      { path: 'cases/documents/manage', component:ManageComponent},
      { path: 'cases/documents/manage/:id', component:ManageComponent},
      { path: 'master/location', component: LocationComponent },
      { path: 'master/tax', component: TaxComponent },
      { path: 'master/case', component: CaseComponent },
      { path: 'master/court-category', component: CourtCategoryComponent },
      { path: 'master/act', component: ActComponent },
      { path: 'master/court', component: CourtComponent },
      { path: 'master/case-stages', component: CaseStagesComponent },
      { path: 'master/payment-mode', component: PaymentModeComponent },
      { path: 'master/location/addlocation', component: AddlocationComponent },
      { path: 'master/location/editlocation', component: EditlocationComponent },
      { path: 'master/location/editlocation/:id', component: EditlocationComponent },
      { path: 'master/tax/addtax', component: AddtaxComponent },
      { path: 'master/tax/edittax', component: EdittaxComponent },
      { path: 'master/tax/edittax/:id', component: EdittaxComponent },
      { path: 'master/case/addcasecategory', component: AddcasecategoryComponent },
      { path: 'master/case/editcasecategory', component: EditcasecategoryComponent },
      { path: 'master/case/editcasecategory/:id', component: EditcasecategoryComponent },
      { path: 'master/court-category/addcourtcategory', component: AddcourtcategoryComponent },
      { path: 'master/court-category/editcourtcategory', component: EditcourtcategoryComponent },
      { path: 'master/court-category/editcourtcategory/:id', component: EditcourtcategoryComponent },
      { path: 'master/act/addact', component: AddactComponent },
      { path: 'master/act/editact', component: EditactComponent },
      { path: 'master/act/editact/:id', component: EditactComponent },
      { path: 'master/court/addcourt', component: AddcourtComponent },
      { path: 'master/court/editcourt', component: EditcourtComponent },
      { path: 'master/court/editcourt/:id', component: EditcourtComponent },
      { path: 'master/case-stages/addcasestages', component: AddcasestagesComponent },
      { path: 'master/case-stages/editcasestages', component: EditcasestagesComponent },
      { path: 'master/case-stages/editcasestages/:id', component: EditcasestagesComponent },
      { path: 'master/payment-mode/addpaymentmode', component: AddpaymentmodeComponent },
      { path: 'master/payment-mode/editpaymentmode', component: EditpaymentmodeComponent },
      { path: 'master/payment-mode/editpaymentmode/:id', component: EditpaymentmodeComponent },
      { path: 'tasks/alltasks', component: AlltasksComponent},
      { path: 'tasks/addtasks', component: AddtasksComponent},
      { path: 'tasks/viewtasks', component: ViewtasksComponent},
      { path: 'tasks/viewtasks/:id', component: ViewtasksComponent},
      { path: 'tasks/edittasks', component: EdittasksComponent},
      { path: 'tasks/edittasks/:id', component: EdittasksComponent},
      { path: 'tasks/commenttasks', component: CommenttasksComponent},
      { path: 'tasks/commenttasks/:id', component: CommenttasksComponent},
      { path: 'tasks/mytasks', component: MytasksComponent},
      { path: 'message/sendmessage', component: SendmessageComponent},
      { path: 'message/sendmessage/:id', component: SendmessageComponent},
      { path: 'hrmange/employees/bankdetails', component: BankdetailsComponent},
      { path: 'hrmange/employees/bankdetails/:id', component: BankdetailsComponent},
      { path: 'hrmange/employees/bankdetails/addbank', component: AddbankComponent},
      { path: 'hrmange/employees/bankdetails/addbank/:id', component: AddbankComponent},
      { path: 'hrmange/holidays', component: HolidaysComponent},
      { path: 'hrmange/holidays/addholidays', component: AddholidaysComponent},
      { path: 'profile', component: ProfileComponent},
      { path: 'cdashboard', component : CdashboardComponent},
      { path: 'cmycases', component: CmycasesComponent},
      { path: 'cmessages', component: CmessagesComponent},
      { path: 'cmycases/cdetails', component: DetailsComponent},
    ]
  }
];



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SecondComponent,
    FirstComponent,
    LoginLayoutComponent,
    HomeLayoutComponent,
    LoginComponent,
    ToolbarComponent,
    ThirdComponent,
    FourthComponent,
    FifthComponent,
    SixthComponent,
    PeopleComponent,
    NotificationsComponent,
    SettingsComponent,
    ReportsComponent,
    AddComponent,
    AddcontactComponent,
    AddcaseComponent,
    AddappointmentComponent,
    ViewComponent,
    EditComponent,
    ViewcontactComponent,
    EditcontactComponent,
    ViewappointmentComponent,
    ClientsComponent,
    EditappointmentComponent,
    AddclientsComponent,
    ViewclientsComponent,
    EditclientsComponent,
    EmployeesComponent,
    AddemployeesComponent,
    ViewemployeesComponent,
    EditemployeesComponent,
    UserRoleComponent,
    AdduserroleComponent,
    EdituserroleComponent,
    DepartmentsComponent,
    PermissionsComponent,
    AdddepartmentsComponent,
    EditdepartmentsComponent,
    NoticeComponent,
    AddnoticeComponent,
    ViewnoticeComponent,
    EditnoticeComponent,
    LeavetypeComponent,
    AddleavesComponent,
    EditleavesComponent,
    AttendanceComponent,
    LeavenotificationComponent,
    ViewcaseComponent,
    AddcasesComponent,
    AllcasesComponent,
    HearingdatesComponent,
    HearingdetailsComponent,
    EditcasesComponent,
    ArchivedcasesComponent,
    StarredcasesComponent,
    CarchivedcasesComponent,
    MasterComponent,
    LocationComponent,
    TaxComponent,
    CaseComponent,
    CourtComponent,
    ActComponent,
    CourtCategoryComponent,
    CaseStagesComponent,
    PaymentModeComponent,
    AddlocationComponent,
    EditlocationComponent,
    AddtaxComponent,
    EdittaxComponent,
    AddcasecategoryComponent,
    EditcasecategoryComponent,
    AddcourtcategoryComponent,
    EditcourtcategoryComponent,
    EditactComponent,
    AddactComponent,
    AddcourtComponent,
    EditcourtComponent,
    AddcasestagesComponent,
    EditcasestagesComponent,
    AddpaymentmodeComponent,
    EditpaymentmodeComponent,
    AlltasksComponent,
    AddtasksComponent,
    ViewtasksComponent,
    EdittasksComponent,
    CommenttasksComponent,
    MytasksComponent,
    SendmessageComponent,
    BankdetailsComponent,
    AddbankComponent,
    ViewdepartmentsComponent,
    FeesComponent,
    ViewcasestudyComponent,
    EditcasestudyComponent,
    CasestudyattachementsComponent,
    HolidaysComponent,
    AddholidaysComponent,
    ClientmoduleComponent,
    CdashboardComponent,
    CmycasesComponent,
    CmessagesComponent,
    DetailsComponent,
    ProfileComponent,
    DocumentsComponent,
    AdddocumentsComponent,
    EditdocumentsComponent,
    ManageComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    NgMultiSelectDropDownModule,
    BrowserAnimationsModule,
    AngularEditorModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    
    
    //EditorModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash: false } // <-- debugging purposes only
    ),
    CustomMaterialModule
  ],
  providers: [CookieService,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }