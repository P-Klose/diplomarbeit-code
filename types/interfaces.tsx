// interfaces.ts
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
  };
}
