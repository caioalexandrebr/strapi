import { default as CardFullColor } from './svg/CardFullColor';
import { default as CardTestimonial } from './svg/CardTestimonial';
import { default as Description } from './svg/Description';
import { default as FAQ } from './svg/FAQ';
import { default as FootnotesList } from './svg/FootnotesList';
import { default as Image } from './svg/Image';
import { default as RelatedContent } from './svg/RelatedContent';
import { default as RichContent } from './svg/RichContent';
import { default as TitleArea } from './svg/TitleArea';
import { default as WayFinder } from './svg/WayFinder';

import * as Icons from '@strapi/icons';
import * as Symbols from '@strapi/icons/symbols';

type Icon = (typeof Icons)[keyof typeof Icons] | (typeof Symbols)[keyof typeof Symbols];

export const CUSTOM_COMPONENT_ICONS: Record<string, Icon> = {
  cardFullColor: CardFullColor,
  cardTestimonial: CardTestimonial,
  description: Description,
  faq: FAQ,
  footnotesList: FootnotesList,
  image: Image,
  relatedContent: RelatedContent,
  richContent: RichContent,
  titleArea: TitleArea,
  wayFinder: WayFinder,
};
