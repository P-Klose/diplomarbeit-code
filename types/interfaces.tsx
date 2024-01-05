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
  blok: {
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
  };
  full_slug: string;
}

export interface AllArticlesProps {
  blok: {
    type: string;
    filter: boolean;
    headline: string;
  };
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
