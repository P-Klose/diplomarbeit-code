// interfaces.ts
export interface PageProps {
  params: { lng: string };
}

export interface ArticlePageProps {
  params: {
    lng: string;
    article: string;
  };
}

export interface Asset {
  id: number;
  alt: string;
  name: string;
  focus: string;
  title: string;
  source: string;
  filename: string;
  copyright: string;
  fieldtype: string;
  meta_data: Record<string, any>;
  is_external_url: boolean;
}

export interface ArticleProps {
  _uid: string;
  image: Asset;
  assets: [Asset];
  headline: string;
  subline: string;
  content: any;
  date?: string;
  allocate?: string;
  subpage_enabled?: boolean;
  slug: string;
  type: string;
  _editable: string;
}

export interface AllArticlesProps {
  _uid: string;
  type: string;
  filter: boolean;
  headline: string;
  _editable: string;
}

export interface FeatArticlesProps {
  blok: {
    headline: string;
    articles?: ArticleProps[];
    additional_info?: any;
  };
}

// WITHOUT BLOK

export interface LinkProps {
  _uid: string;
  link: {
    id: string;
    url: string;
    linktype: string;
    fieldtype: string;
    cached_url: string;
  };
  color: string;
  style: string;
  symbol: string;
  component: string;
  display_name: string;
  _editable: string;
}

export interface LinkCollectionProps {
  _uid: string;
  links: LinkProps[];
  headline: string;
  component: string;
  _editable: string;
}

export interface ValueDocumentEntryProps {
  _uid: string;
  headline: string;
  component: string;
  description: any;
  _editable: string;
}

export interface ValueDocumentProps {
  _uid: string;
  content: ValueDocumentEntryProps[];
  subline: string;
  headline: string;
  component: string;
  background_image: {
    id: number;
    alt: string;
    name: string;
    focus: string;
    title: string;
    source: string;
    filename: string;
    copyright: string;
    fieldtype: string;
    meta_data: {};
    is_external_url: boolean;
  };
}

export interface PageComponentProps {
  _uid: string;
  _editable: string;
  body: any[];
  component: string;
}

export interface HeroProps {
  _uid: string;
  _editable: string;
  additional_content: any[];
  hero_features: HeroFeatureProps[];
  background_image: Asset;
  component: string;
  fixed: boolean;
  headline: string;
  height: string;
  type: string;
}

export interface HeroFeatureProps {
  _uid: string;
  _editable: string;
  symbol: string;
  type: string;
  link: any;
  text: string;
}

export interface GridProps {
  _uid: string;
  _editable: string;
  content: any[];
  columns: string;
  mediumcolumns: boolean;
  largecolumns: string;
  max_w: string;
  width: string;
}

export interface BranchProps {
  _uid: string;
  _editable: string;
  headline: string;
  subline: string;
  body: any[];
  component: string;
  description: any;
  folder: Asset;
  imagevideo: any;
}

export interface HorizontalScrollSelectSliderProps {
  _uid: string;
  _editable: string;
  title: string;
  slider: any[];
  scroll_speed: number;
  scroll_start_right: boolean;
}

export interface HorizontalScrollSliderProps {
  _uid: string;
  _editable: string;
  title: string;
  alternating: boolean;
  slider: any[];
  scroll_speed: number;
  slider_table: any;
  scroll_start_right: boolean;
}

export interface MarqueeProps {
  _uid: string;
  _editable: string;
  content: any[];
  spacing_top: boolean;
  spacing_bottom: boolean;
  display_all_mobile: boolean;
  reverse_direction: boolean;
}

export interface FooterColumnProps {
  _uid: string;
  _editable: string;
  links: LinkProps[];
  headline: string;
}

export interface ClassesProps {
  _uid: string;
  _editable: string;
  classes: any[];
  headline: string;
}

export interface DesignableTableValueProps {
  _uid: string;
  _editable: string;
  text: any;
}

export interface DesignableTableRowProps {
  _uid: string;
  _editable: string;
  values: any[];
}

export interface DesignableTableProps {
  _uid: string;
  _editable: string;
  header: DesignableTableRowProps[];
  body: DesignableTableRowProps[];
  headline: string;
  columns: string;
}

export interface MediaIconProps {
  iconName: string;
}

export interface TimetableSubjectProps {
  _uid: string;
  name: string;
  color: string;
  component: string;
  jahrgang1: number;
  jahrgang2: number;
  jahrgang3: number;
  jahrgang4: number;
  jahrgang5: number;
  main_image: Asset;
  short_name: string;
  description: any;
  is_specialized_subject?: boolean;
  _editable: string;
}

export interface TimetableColumsProps {
  _uid: string;
  _editable: string;
  component: string;
  day: string;
  subjects: TimetableSubjectProps[];
}

export interface TimetableProps {
  _uid: string;
  _editable: string;
  component: string;
  headline: string;
  columns: TimetableColumsProps[];
}

export interface GridItemProps {
  _uid: string;
  link: {
    id: string;
    url: string;
    linktype: string;
    fieldtype: string;
    cached_url: string;
  };
  type: string;
  width: string;
  content: string;
  subline: string;
  allocate: string;
  headline: string;
  component: string;
  main_image: Asset;
  sub_images: any[];
  image_right: boolean;
  _editable: string;
}

export interface HeadlineProps {
  _uid: string;
  headline: string;
  _editable: string;
  component: string;
}

export interface ImageComponentProps {
  _uid: string;
  _editable: string;
  component: string;
  image: Asset;
  animation: string;
  type: string;
}

export interface SponsorProps {
  _uid: string;
  _editable: string;
  component: string;
  subline: string;
  headline: string;
  image: Asset;
  link: any;
  only_image: boolean;
}

export interface TableProps {
  _uid: string;
  _editable: string;
  component: string;
  headline: string;
  table: any;
}

export interface TextProps {
  _uid: string;
  _editable: string;
  component: string;
  headline: string;
  content: any;
  max_w: string;
  divider: boolean;
}

export interface FaqCollectionProps {
  _uid: string;
  _editable: string;
  component: string;
  headline: string;
  description?: any;
  faqs: any[];
}

export interface FaqProps {
  _uid: string;
  _editable: string;
  component: string;
  question: string;
  answer: any;
  video?: any;
  show_video: boolean;
}

export interface DefaultProps {
  _uid: string;
  _editable: string;
  component: string;
}
