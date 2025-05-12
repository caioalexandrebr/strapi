import { default as AutoRelatedContent } from './svg/AutoRelatedContent';
import { default as Card } from './svg/Card';
import { default as CardFullColor } from './svg/CardFullColor';
import { default as CardTable } from './svg/CardTable';
import { default as CardTestimonial } from './svg/CardTestimonial';
import { default as ClientsShowcase } from './svg/ClientsShowcase';
import { default as Description } from './svg/Description';
import { default as DynamicFormLead } from './svg/DynamicFormLead';
import { default as DynamicList } from './svg/DynamicList';
import { default as EmployeePlansCarousel } from './svg/EmployeePlansCarousel';
import { default as FAQ } from './svg/FAQ';
import { default as FootnotesList } from './svg/FootnotesList';
import { default as GalleryCard } from './svg/GalleryCard';
import { default as HeroCard } from './svg/HeroCard';
import { default as Image } from './svg/Image';
import { default as List } from './svg/List';
import { default as ListCard } from './svg/ListCard';
import { default as ManualRelatedContent } from './svg/ManualRelatedContent';
import { default as Map } from './svg/Map';
import { default as PartnersShowcase } from './svg/PartnersShowcase';
import { default as Placeholder } from './svg/Placeholder';
import { default as RichContent } from './svg/RichContent';
import { default as SkipColumn } from './svg/SkipColumn';
import { default as TitleArea } from './svg/TitleArea';
import { default as Vacancies } from './svg/Vacancies';
import { default as WayFinder } from './svg/WayFinder';

import * as Icons from '@strapi/icons';
import * as Symbols from '@strapi/icons/symbols';

type Icon = (typeof Icons)[keyof typeof Icons] | (typeof Symbols)[keyof typeof Symbols];

export const CUSTOM_COMPONENT_ICONS: Record<string, Icon> = {
  autoRelatedContent: AutoRelatedContent,
  card: Card,
  cardFullColor: CardFullColor,
  cardTable: CardTable,
  cardTestimonial: CardTestimonial,
  clientsShowcase: ClientsShowcase,
  description: Description,
  dynamicFormLead: DynamicFormLead,
  dynamicList: DynamicList,
  employeePlansCarousel: EmployeePlansCarousel,
  faq: FAQ,
  footnotesList: FootnotesList,
  galleryCard: GalleryCard,
  heroCard: HeroCard,
  image: Image,
  list: List,
  listCard: ListCard,
  manualRelatedContent: ManualRelatedContent,
  map: Map,
  partnersShowcase: PartnersShowcase,
  placeholder: Placeholder,
  richContent: RichContent,
  skipColumn: SkipColumn,
  titleArea: TitleArea,
  vacancies: Vacancies,
  wayFinder: WayFinder,
};
