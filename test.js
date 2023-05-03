import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';


import {NgxsModule} from '@ngxs/store';
// PrimeNG Components for demos
import {AccordionModule} from 'primeng/accordion';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {BadgeModule} from 'primeng/badge';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import {CardModule} from 'primeng/card';
import {CarouselModule} from 'primeng/carousel';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import {ChartModule} from 'primeng/chart';
import {CheckboxModule} from 'primeng/checkbox';
import {ChipModule} from 'primeng/chip';
import {ChipsModule} from 'primeng/chips';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {ColorPickerModule} from 'primeng/colorpicker';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DataViewModule} from 'primeng/dataview';
import {DialogModule} from 'primeng/dialog';
import {DividerModule} from 'primeng/divider';
import {DropdownModule} from 'primeng/dropdown';
import {FieldsetModule} from 'primeng/fieldset';
import {FileUploadModule} from 'primeng/fileupload';
import {FullCalendarModule} from '@fullcalendar/angular';
import {GalleriaModule} from 'primeng/galleria';
import {ImageModule} from 'primeng/image';
import {InplaceModule} from 'primeng/inplace';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputMaskModule} from 'primeng/inputmask';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {KnobModule} from 'primeng/knob';
import {LightboxModule} from 'primeng/lightbox';
import {ListboxModule} from 'primeng/listbox';
import {MegaMenuModule} from 'primeng/megamenu';
import {MenuModule} from 'primeng/menu';
import {MenubarModule} from 'primeng/menubar';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {MultiSelectModule} from 'primeng/multiselect';
import {OrderListModule} from 'primeng/orderlist';
import {OrganizationChartModule} from 'primeng/organizationchart';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {PaginatorModule} from 'primeng/paginator';
import {PanelModule} from 'primeng/panel';
import {PanelMenuModule} from 'primeng/panelmenu';
import {PasswordModule} from 'primeng/password';
import {PickListModule} from 'primeng/picklist';
import {ProgressBarModule} from 'primeng/progressbar';
import {RadioButtonModule} from 'primeng/radiobutton';
import {RatingModule} from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {ScrollTopModule} from 'primeng/scrolltop';
import {SelectButtonModule} from 'primeng/selectbutton';
import {SidebarModule} from 'primeng/sidebar';
import {SkeletonModule} from 'primeng/skeleton';
import {SlideMenuModule} from 'primeng/slidemenu';
import {SliderModule} from 'primeng/slider';
import {SplitButtonModule} from 'primeng/splitbutton';
import {SplitterModule} from 'primeng/splitter';
import {StepsModule} from 'primeng/steps';
import {TabMenuModule} from 'primeng/tabmenu';
import {TableModule} from 'primeng/table';
import {TabViewModule} from 'primeng/tabview';
import {TagModule} from 'primeng/tag';
import {TerminalModule} from 'primeng/terminal';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {TimelineModule} from 'primeng/timeline';
import {ToastModule} from 'primeng/toast';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {ToolbarModule} from 'primeng/toolbar';
import {TooltipModule} from 'primeng/tooltip';
import {TreeModule} from 'primeng/tree';
import {TreeTableModule} from 'primeng/treetable';
import {VirtualScrollerModule} from 'primeng/virtualscroller';

// Application Components
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AppMainComponent} from './app.main.component';
import {AppNotfoundComponent} from './pages/app.notfound.component';
import {AppErrorComponent} from './pages/app.error.component';
import {AppAccessdeniedComponent} from './pages/app.accessdenied.component';
import {AppLoginComponent} from './pages/app.login.component';
import {AppCrudComponent} from './pages/app.crud.component';
import {AppCalendarComponent} from './pages/app.calendar.component';
import {AppTimelineDemoComponent} from './pages/app.timelinedemo.component';
import {AppMenuComponent} from './app.menu.component';
import {AppMenuitemComponent} from './app.menuitem.component';
import {AppBreadcrumbComponent} from './app.breadcrumb.component';
import {AppConfigComponent} from './app.config.component';
import {AppRightPanelComponent} from './app.rightpanel.component';
import {AppTopBarComponent} from './app.topbar.component';
import {AppFooterComponent} from './app.footer.component';

// Demo pages
import {DashboardDemoComponent} from './demo/view/dashboarddemo.component';
import {FormLayoutDemoComponent} from './demo/view/formlayoutdemo.component';
import {FloatLabelDemoComponent} from './demo/view/floatlabeldemo.component';
import {InvalidStateDemoComponent} from './demo/view/invalidstatedemo.component';
import {InputDemoComponent} from './demo/view/inputdemo.component';
import {ButtonDemoComponent} from './demo/view/buttondemo.component';
import {TableDemoComponent} from './demo/view/tabledemo.component';
import {ListDemoComponent} from './demo/view/listdemo.component';
import {TreeDemoComponent} from './demo/view/treedemo.component';
import {PanelsDemoComponent} from './demo/view/panelsdemo.component';
import {OverlaysDemoComponent} from './demo/view/overlaysdemo.component';
import {MediaDemoComponent} from './demo/view/mediademo.component';
import {MenusComponent} from './demo/view/menus/menus.component';
import {MessagesDemoComponent} from './demo/view/messagesdemo.component';
import {MiscDemoComponent} from './demo/view/miscdemo.component';
import {EmptyDemoComponent} from './demo/view/emptydemo.component';
import {ChartsDemoComponent} from './demo/view/chartsdemo.component';
import {FileDemoComponent} from './demo/view/filedemo.component';
import {DocumentationComponent} from './demo/view/documentation.component';
import {IconsComponent} from './utilities/icons.component';
import {BlocksComponent} from './blocks/blocks/blocks.component';
import {BlockViewer} from './blocks/blockviewer/blockviewer.component';

// Demo services
import {CountryService} from './demo/service/countryservice';
import {EventService} from './demo/service/eventservice';
import {NodeService} from './demo/service/nodeservice';
import {CustomerService} from './demo/service/customerservice';
import {PhotoService} from './demo/service/photoservice';
import {ProductService} from './demo/service/productservice';
import {IconService} from './demo/service/iconservice';
import {ConfigService} from './demo/service/app.config.service';

// Application services
import {BreadcrumbService} from './breadcrumb.service';
import {MenuService} from './app.menu.service';
import {AppCodeModule} from './blocks/app-code/app.code.component';

import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {SearchListComponent} from './shared/search-list/search-list.component';
import {SearchComponent} from './pages/search/search.component';
import {SearchMasiveComponent} from './shared/search-masive/search-masive.component';
import {environment} from '../environments/environment';
import {CatalogosState} from './state/catalogos/catalogos.state';
import {CountryPipe} from './pipes/country/country.pipe';
import {CountryUafePipe} from './pipes/country/country-uafe.pipe';
import {CountryCodePipe} from './pipes/country/country-code.pipe';
import {GrupoComponent} from './pages/compania/grupo/grupo.component';
import {GrupoState} from './state/grupos/grupo.state';
import {CompaniaComponent} from './pages/compania/compania/compania.component';
import {CompaniaStoreState} from './state/companias/compania-store.state';

import {JwtInterceptorInterceptor} from './jwt-interceptor.interceptor';
import {LoginState} from './state/login/login.state';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {UsuariosComponent} from './pages/usuarios/usuarios.component';
import {UserStoreState} from './state/user/user-store.state';
import {RoleNamePipe} from './pipes/usuarios/role-name.pipe';
import {RoleState} from './state/role/role.state';
import {UploadListComponent} from './shared/upload-list/upload-list.component';

import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {HomeButtonComponent} from './shared/home-button/home-button.component';
import {ListasComponent} from './pages/listas/listas.component';
import {ListasAdminComponent} from './shared/listas-admin/listas-admin.component';
import {ListaState} from './state/lista/lista.state';
import {EnteListaComponent} from './pages/ente-lista/ente-lista.component';
import {EnteListaAdminComponent} from './shared/ente-lista-admin/ente-lista-admin.component';
import {TableComponent} from './shared/table/table.component';
import {EnteState} from './state/ente/ente.state';
import {ClientesComponent} from './pages/clientes/clientes.component';
import {ClientesAdminComponent} from './shared/clientes-admin/clientes-admin.component';
import {ClientesState} from './state/clientes/clientes.state';
import { TipoIdentificacionPipe } from './pipes/tipo-identificacion.pipe';
import { ActividadEconomicaPipe } from './pipes/actividad-economica.pipe';
import { RepresentanteConyugeComponent } from './shared/clientes/representante-conyuge/representante-conyuge.component';
import { InformacionClienteComponent } from './shared/clientes/informacion-cliente/informacion-cliente.component';
import { SociosComponent } from './shared/clientes/socios/socios.component';
import { InformacionDomicilioComponent } from './shared/clientes/informacion-domicilio/informacion-domicilio.component';
import { InformacionEconomicaComponent } from './shared/clientes/informacion-economica/informacion-economica.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { EmpleadosAdminComponent } from './shared/empleados-admin/empleados-admin.component';
import { InformacionEmpleadoComponent } from './shared/empleados/informacion-empleado/informacion-empleado.component';
import { InformacionFamiliarComponent } from './shared/empleados/informacion-familiar/informacion-familiar.component';
import { ConyugueUnionHechoComponent } from './shared/empleados/conyugue-union-hecho/conyugue-union-hecho.component';
import { IdentificacionPipe } from './pipes/identificacion.pipe';
import { SociosComponent as SociosComponentEmpleados } from './shared/empleados/socios/socios.component';
import { DomicilioPersonalComponent } from './shared/empleados/domicilio-personal/domicilio-personal.component';
import { DeclaracionPatrimonialComponent } from './shared/empleados/declaracion-patrimonial/declaracion-patrimonial.component';
import { DevValidateComponent } from './shared/dev-validate/dev-validate.component';
import { EmpleadosState } from './state/empleados/empleados.state';
import { ProveedoresAdminComponent } from './shared/proveedores-admin/proveedores-admin.component';
import { ProveedoresComponent } from './pages/proveedores/proveedores.component';
import { InfoProveedorComponent } from './shared/proveedores/info-proveedor/info-proveedor.component';
import { RepresentanteLegalComponent } from './shared/proveedores/representante-legal/representante-legal.component';
import { ConyugeConvivienteProveedoresComponent } from './shared/proveedores/conyuge-conviviente-proveedores/conyuge-conviviente-proveedores.component';
import { PerfilFinancieroComponent } from './shared/proveedores/perfil-financiero/perfil-financiero.component';
import { PoliticasComponent } from './shared/proveedores/politicas/politicas.component';
import { SelectInputDirective } from './select-input.directive';
import { ProveedorState } from './state/proveedor/proveedor.state';
import { AutoEmpleadosComponent } from './pages/auto-empleados/auto-empleados.component';
import { AutoProveedoresComponent } from './pages/auto-proveedores/auto-proveedores.component';
import { PreProveedorComponent } from './shared/proveedores/pre-proveedor/pre-proveedor.component';
import { RolesAdminComponent } from './shared/roles-admin/roles-admin.component';
import { SelectListasComponent } from './shared/select-listas/select-listas.component';
import {AlertasAdminComponent} from './shared/alertas-admin/alertas-admin.component';
import { AsignarAlertaComponent } from './shared/alertas/asignar-alerta/asignar-alerta.component';
import { PasswordUsuarioComponent } from './pages/password-usuario/password-usuario.component';
import { UsuariosCiaComponent } from './pages/usuarios-cia/usuarios-cia.component';
import { SinReporteComponent } from './shared/alertas/sin-reporte/sin-reporte.component';
import { ConReporteComponent } from './shared/alertas/con-reporte/con-reporte.component';
import { RespuestaComponent } from './shared/alertas/respuesta/respuesta.component';

FullCalendarModule.registerPlugins([
    dayGridPlugin,
    timeGridPlugin,
    interactionPlugin
]);

@NgModule({
    imports: [
        NgxsModule.forRoot([
            CatalogosState,
            GrupoState,
            CompaniaStoreState,
            UserStoreState,
            LoginState,
            ListaState,
            EnteState,
            ClientesState,
            EmpleadosState,
            ProveedorState,
            RoleState,
        ], {
            developmentMode: !environment.production
        }),
        ProgressSpinnerModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        AppCodeModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AccordionModule,
        AutoCompleteModule,
        AvatarModule,
        AvatarGroupModule,
        BadgeModule,
        BreadcrumbModule,
        ButtonModule,
        CalendarModule,
        CardModule,
        CarouselModule,
        CascadeSelectModule,
        ChartModule,
        CheckboxModule,
        ChipModule,
        ChipsModule,
        CodeHighlighterModule,
        ConfirmDialogModule,
        ConfirmPopupModule,
        ColorPickerModule,
        ContextMenuModule,
        DataViewModule,
        DialogModule,
        DividerModule,
        DropdownModule,
        FieldsetModule,
        FileUploadModule,
        FullCalendarModule,
        GalleriaModule,
        ImageModule,
        InplaceModule,
        InputNumberModule,
        InputMaskModule,
        InputSwitchModule,
        InputTextModule,
        InputTextareaModule,
        KnobModule,
        LightboxModule,
        ListboxModule,
        MegaMenuModule,
        MenuModule,
        MenubarModule,
        MessageModule,
        MessagesModule,
        MultiSelectModule,
        OrderListModule,
        OrganizationChartModule,
        OverlayPanelModule,
        PaginatorModule,
        PanelModule,
        PanelMenuModule,
        PasswordModule,
        PickListModule,
        ProgressBarModule,
        RadioButtonModule,
        RatingModule,
        RippleModule,
        ScrollPanelModule,
        ScrollTopModule,
        SelectButtonModule,
        SidebarModule,
        SkeletonModule,
        SlideMenuModule,
        SliderModule,
        SplitButtonModule,
        SplitterModule,
        StepsModule,
        TableModule,
        TabMenuModule,
        TabViewModule,
        TagModule,
        TerminalModule,
        TimelineModule,
        TieredMenuModule,
        ToastModule,
        ToggleButtonModule,
        ToolbarModule,
        TooltipModule,
        TreeModule,
        TreeTableModule,
        VirtualScrollerModule,
        FontAwesomeModule,
        FullCalendarModule,
    ],
    declarations: [
        AppComponent,
        AppMainComponent,
        AppMenuComponent,
        AppMenuitemComponent,
        AppTopBarComponent,
        AppFooterComponent,
        AppRightPanelComponent,
        AppConfigComponent,
        AppBreadcrumbComponent,
        AppNotfoundComponent,
        AppErrorComponent,
        AppAccessdeniedComponent,
        AppLoginComponent,
        AppCrudComponent,
        AppCalendarComponent,
        AppTimelineDemoComponent,
        DashboardDemoComponent,
        FormLayoutDemoComponent,
        FloatLabelDemoComponent,
        InvalidStateDemoComponent,
        InputDemoComponent,
        ButtonDemoComponent,
        TableDemoComponent,
        ListDemoComponent,
        TreeDemoComponent,
        PanelsDemoComponent,
        OverlaysDemoComponent,
        MediaDemoComponent,
        MenusComponent,
        MessagesDemoComponent,
        MessagesDemoComponent,
        MiscDemoComponent,
        ChartsDemoComponent,
        EmptyDemoComponent,
        FileDemoComponent,
        DocumentationComponent,
        IconsComponent,
        BlocksComponent,
        BlockViewer,
        SearchListComponent,
        SearchComponent,
        SearchMasiveComponent,
        CountryPipe,
        CountryUafePipe,
        CountryCodePipe,
        GrupoComponent,
        CompaniaComponent,
        UsuariosComponent,
        RoleNamePipe,
        UploadListComponent,
        HomeButtonComponent,
        ListasComponent,
        ListasAdminComponent,
        EnteListaComponent,
        EnteListaAdminComponent,
        TableComponent,
        ClientesComponent,
        ClientesAdminComponent,
        TipoIdentificacionPipe,
        ActividadEconomicaPipe,
        RepresentanteConyugeComponent,
        InformacionClienteComponent,
        SociosComponent,
        InformacionDomicilioComponent,
        InformacionEconomicaComponent,
        IdentificacionPipe,
        EmpleadosComponent,
        EmpleadosAdminComponent,
        InformacionEmpleadoComponent,
        InformacionFamiliarComponent,
        ConyugueUnionHechoComponent,
        SociosComponentEmpleados,
        DomicilioPersonalComponent,
        DeclaracionPatrimonialComponent,
        DevValidateComponent,
        ProveedoresAdminComponent,
        ProveedoresComponent,
        InfoProveedorComponent,
        RepresentanteLegalComponent,
        ConyugeConvivienteProveedoresComponent,
        PerfilFinancieroComponent,
        PoliticasComponent,
        SelectInputDirective,
        AutoEmpleadosComponent,
        AutoProveedoresComponent,
        PreProveedorComponent,
        RolesAdminComponent,
        SelectListasComponent,
        AlertasAdminComponent,
        AsignarAlertaComponent,
        PasswordUsuarioComponent,
        UsuariosCiaComponent,
        SinReporteComponent,
        ConReporteComponent,
        RespuestaComponent,
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService, MenuService, BreadcrumbService, ConfigService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptorInterceptor,
            multi: true
        }
    ],
    exports: [
        SociosComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
