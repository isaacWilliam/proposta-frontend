import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {CardModule} from "primeng/card";
import {MegaMenuModule} from "primeng/megamenu";
import {ToolbarModule} from "primeng/toolbar";
import {MenubarModule} from "primeng/menubar";
import {VirtualScrollerModule} from "primeng/virtualscroller";
import {TooltipModule} from "primeng/tooltip";
import {SidebarModule} from "primeng/sidebar";
import {AutoCompleteModule} from "primeng/autocomplete";
import {ChipsModule} from "primeng/chips";
import {DropdownModule} from "primeng/dropdown";
import {InputMaskModule} from "primeng/inputmask";
import {InputNumberModule} from "primeng/inputnumber";
import {MultiSelectModule} from "primeng/multiselect";
import {InputTextareaModule} from "primeng/inputtextarea";
import {ListboxModule} from "primeng/listbox";
import {PanelMenuModule} from "primeng/panelmenu";
import {RippleModule} from "primeng/ripple";
import {InputTextModule} from "primeng/inputtext";
import {CalendarModule} from "primeng/calendar";
import {ButtonModule} from "primeng/button";
import {PasswordModule} from "primeng/password";
import {CarouselModule} from "primeng/carousel";
import {ToastModule} from "primeng/toast";
import {StepsModule} from "primeng/steps";
import {SplitButtonModule} from "primeng/splitbutton";
import {MenuModule} from "primeng/menu";
import {SelectButtonModule} from "primeng/selectbutton";
import {CheckboxModule} from "primeng/checkbox";
import {RadioButtonModule} from "primeng/radiobutton";
import {TableModule} from "primeng/table";
import {RatingModule} from "primeng/rating";
import {DialogModule} from "primeng/dialog";
import {ScrollPanelModule} from "primeng/scrollpanel";
import {DividerModule} from "primeng/divider";
import {InputSwitchModule} from "primeng/inputswitch";
import {TriStateCheckboxModule} from "primeng/tristatecheckbox";
import {TagModule} from "primeng/tag";
import {TreeSelectModule} from "primeng/treeselect";
import {TieredMenuModule} from "primeng/tieredmenu";
import {TabMenuModule} from "primeng/tabmenu";
import {AvatarModule} from "primeng/avatar";
import {BadgeModule} from "primeng/badge";
import {TabViewModule} from "primeng/tabview";
import {FileUploadModule} from "primeng/fileupload";
import {ImageModule} from "primeng/image";
import {BlockUIModule} from "primeng/blockui";
import {PanelModule} from "primeng/panel";
import {AccordionModule} from "primeng/accordion";
import {ChipModule} from "primeng/chip";
import {TreeTableModule} from "primeng/treetable";
import {OverlayPanelModule} from "primeng/overlaypanel";
import {BreadcrumbModule} from "primeng/breadcrumb";
import {SliderModule} from "primeng/slider";
import {MessageModule} from "primeng/message";
import {MessagesModule} from "primeng/messages";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {DragDropModule} from "primeng/dragdrop";
import {ConfirmPopupModule} from "primeng/confirmpopup";

const primeFaces = [
  MessageModule,
  MessagesModule,
  ProgressSpinnerModule,
  MenuModule,
  MegaMenuModule,
  ToolbarModule,
  MenubarModule,
  ButtonModule,
  VirtualScrollerModule,
  CalendarModule,
  TooltipModule,
  SidebarModule,
  InputTextModule,
  AutoCompleteModule,
  ChipsModule,
  DropdownModule,
  InputMaskModule,
  InputNumberModule,
  MultiSelectModule,
  InputTextareaModule,
  ListboxModule,
  CardModule,
  PanelMenuModule,
  RippleModule,
  PasswordModule,
  CarouselModule,
  ToastModule,
  StepsModule,
  SplitButtonModule,
  SelectButtonModule,
  CheckboxModule,
  RadioButtonModule,
  TableModule,
  RatingModule,
  DialogModule,
  ScrollPanelModule,
  DividerModule,
  InputSwitchModule,
  TriStateCheckboxModule,
  TagModule,
  MenubarModule,
  TreeSelectModule,
  CheckboxModule,
  VirtualScrollerModule,
  TieredMenuModule,
  TabMenuModule,
  AvatarModule,
  BadgeModule,
  TabViewModule,
  FileUploadModule,
  ImageModule,
  BlockUIModule,
  PanelModule,
  AccordionModule,
  ChipModule,
  TreeTableModule,
  ConfirmDialogModule,
  BreadcrumbModule,
  OverlayPanelModule,
  SliderModule,
  DragDropModule,
  ConfirmPopupModule
];
@NgModule({
  imports: [CommonModule, ...primeFaces],
  exports: [...primeFaces]
})
export class PrimeFacesModule {}
