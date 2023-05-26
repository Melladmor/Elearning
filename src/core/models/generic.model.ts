import { SelectItemOptionsType } from "primereact/selectitem";

export interface SidebarItemModel {
  label: string;
  path: string;
  icon: any;
  subMenu?: SidebarItemModel[];
}
export interface LightModel {
  id: number;
  name: string;
}
export interface DateModel {
  id: number;
  date: string;
}
export interface NameAndImgModel {
  name: string;
  img: string;
}
export interface MoreLightModel extends LightModel {
  description: string;
}
export interface LightImageModel extends LightModel {
  img: string;
}
export interface MoreLightImageModel extends LightImageModel {
  description: string;
}
export interface StatisticsModel extends MoreLightImageModel {
  statistic: string;
  otherDescription: string;
}
export interface FaqModel {
  id: number;
  question: string;
  answer: string;
  isOpend: boolean;
}
export interface GraduateOpinionModel {
  id: number;
  name: string;
  position: string;
  mediaType?: "video" | "image";
  mediaSrc: string;
  description: string;
  rating?: number;
}
export interface GenericQueryParamsModel {
  SearchKey?: string;
  SortBy?: string;
  SortDirection?: 0 | 1;
  PageNumber: number;
  PageSize: number;
}
export interface ErrorModel {
  errorTitle: string;
  errorMessage: string;
  statusCode: number;
}

interface ResponseModel {
  success: boolean;
  statusCode: number;
  error: any;
}

export interface SingleResponseModel<T> extends ResponseModel {
  result: T;
}

export interface ListResponseModel<T> extends ResponseModel {
  result: { items: T[] };
}
export interface PagedListResponseModel<T> {
  itemsCount: number;
  pageNumber: number;
  pageSize: number;
  pagesCount: number;
  items: T[];
}
export interface BreadcrumbsItems {
  label: string;
  path?: string;
}
export interface CookieModel {
  expires?: number;
  secure: boolean;
  sameSite: any;
  path: string;
}
type ColumnBody = "data" | "number" | "list" | "rate" | "date" | "dateTime" | "image" | "switch";
type FilterType = "text" | "toggle" | "number" | "price" | "radio" | "checkbox" | "date" | "numberRange" | "switch";
export interface ColDef {
  field: string; // value to bind the column to its values
  header: string; // title of column to be showed.
  body: ColumnBody; // type of content inside the column.
  bodyTruncateNum?: number;
  sortable?: boolean; // to make a column sortable.
  editable?: boolean; // to make a row editble.
  addable?: boolean; // to make a row addable.
  hasFilter?: boolean; // to set if a column has a filter.
  filterElementType?: FilterType;
  filterElemnts?: SelectItemOptionsType | undefined;
  resizeable?: boolean; // to set if a column is resizable or not.
  style?: object;
  onRowEvent?: (...args: any[]) => void;
}
export interface ActionDef {
  actionName: string;
  element: (...args: any[]) => JSX.Element;
}
export interface PaginationDef {
  paginator: boolean;
  onPage: (event: any) => void;
  onSearchKey: (value: string) => void;
}

export interface JwtPayload {
  iss?: string;
  sub?: string;
  aud?: string[] | string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  name?: string;
  username?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
}

export interface MultiStateModel<T> {
  data: T;
  stateName: string | number;
}

type navItemType = "bootcamp" | "course" | "info";
export interface WNavItemModel {
  label: string;
  description?: string;
  path: string | null;
  type?: navItemType;
  subMenuItems?: WSubMenuModel[];
}
export interface WSubMenuModel {
  label: string;
  path?: string;
  icon?: any;
  isSoon?: boolean;
  subMenuItemsChildren?: WSubMenuModel[];
}
export interface EventModel {
  id: number;
  name: string;
  description: string;
  date: string;
  time: string;
  location: string;
  price: string;
  lecturers: {
    id: number;
    name: string;
    position: string;
    img: any;
  }[];
  otherDescription: string;
  agendaList: {
    id: number;
    time: string;
    description: string;
  }[];
}
export interface UpcomingGridCol {
  key: string;
  label: string;
}
