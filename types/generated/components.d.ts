import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksMultislider extends Struct.ComponentSchema {
  collectionName: 'components_blocks_multisliders';
  info: {
    displayName: 'Multislider';
  };
  attributes: {
    multislider_element: Schema.Attribute.Component<
      'blocks.multislider-element',
      true
    >;
  };
}

export interface BlocksMultisliderElement extends Struct.ComponentSchema {
  collectionName: 'components_blocks_multislider_elements';
  info: {
    displayName: 'Multislider element';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    short_description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlocksReferenceElement extends Struct.ComponentSchema {
  collectionName: 'components_blocks_reference_elements';
  info: {
    displayName: 'Reference element';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.Component<'shared.link', false>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksReferences extends Struct.ComponentSchema {
  collectionName: 'components_blocks_references';
  info: {
    displayName: 'References';
  };
  attributes: {
    reference_elements: Schema.Attribute.Component<
      'blocks.reference-element',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface BlocksServiceElement extends Struct.ComponentSchema {
  collectionName: 'components_blocks_service_elements';
  info: {
    displayName: 'Service element';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    short_description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlocksServices extends Struct.ComponentSchema {
  collectionName: 'components_blocks_services';
  info: {
    displayName: 'Services';
  };
  attributes: {
    service_elements: Schema.Attribute.Component<
      'blocks.service-element',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    logo: Schema.Attribute.Component<'shared.logo-link', false>;
    navItems: Schema.Attribute.Component<'shared.link', true>;
    socialLinks: Schema.Attribute.Component<'shared.logo-link', true>;
    text: Schema.Attribute.Text;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.link', false>;
    logo: Schema.Attribute.Component<'shared.logo-link', false>;
    navItems: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface LayoutTopbar extends Struct.ComponentSchema {
  collectionName: 'components_layout_topbars';
  info: {
    displayName: 'Topbar';
  };
  attributes: {
    description: Schema.Attribute.Text;
    isVisible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    link: Schema.Attribute.Component<'shared.link', false>;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isButtonLink: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['PRIMARY', 'SECONDARY']>;
  };
}

export interface SharedLogoLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_logo_links';
  info: {
    displayName: 'Logo Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'files' | 'images'>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.multislider': BlocksMultislider;
      'blocks.multislider-element': BlocksMultisliderElement;
      'blocks.reference-element': BlocksReferenceElement;
      'blocks.references': BlocksReferences;
      'blocks.service-element': BlocksServiceElement;
      'blocks.services': BlocksServices;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'layout.topbar': LayoutTopbar;
      'shared.link': SharedLink;
      'shared.logo-link': SharedLogoLink;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
