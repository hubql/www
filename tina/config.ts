import { defineConfig } from 'tinacms'
import { aboutCardsBlockSchema } from '../src/components/blocks/AboutCard'
import { featuredBlog } from '../src/components/blocks/BlogList'
import { cardsBlockSchema } from '../src/components/blocks/Cards'
import { contentBlockSchema } from '../src/components/blocks/Content'
import { featureFocusBlockSchema } from '../src/components/blocks/FeatureFocus'
import { featureFocusSimpleBlockSchema } from '../src/components/blocks/FeatureFocusSimple'
import { heroBlockSchema } from '../src/components/blocks/Hero'
import {
    hero2ColumnBlockSchema,
    hubqlDemoFileSchema,
} from '../src/components/blocks/Hero2Column'
import { imageGalleryBlockSchema } from '../src/components/blocks/ImageGallery'
import { imageGridBlockSchema } from '../src/components/blocks/ImageGrid'
import { scrollCardBlockSchema } from '../src/components/blocks/ScrollCard'
import { sectionCtaBlockSchema } from '../src/components/blocks/SectionCta'
import { sectionHeadingBlockSchema } from '../src/components/blocks/SectionHeading'

import { imageBlockSchema } from '../src/components/blocks/Image'
import { paragraphBlockSchema } from '../src/components/blocks/Paragraph'
import { templateApiReferenceBlockSchema } from '../src/components/blocks/TemplateApiReference'
import { vsHeroBlockSchema } from '../src/components/blocks/VsHero'
import { aboveFoldBlockSchema } from '@/src/components/blocks/AboveFold'
import { trustedByBlockSchema } from '../src/components/blocks/TrustedBy'
import { servicesBlockSchema } from '../src/components/blocks/Services'
import { productGridBlockSchema } from '../src/components/blocks/ProductGrid'
import { whyHubqlBlockSchema } from '../src/components/blocks/WhyHubql'
import { techStackBlockSchema } from '../src/components/blocks/TechStack'
import { testimonialsBlockSchema } from '../src/components/blocks/Testimonials'
import { serviceCardsBlockSchema } from '../src/components/blocks/ServiceCards'
import { projectReferencesBlockSchema } from '../src/components/blocks/ProjectReferences'
import { aboveFoldBlockSchema2 } from '@/src/components/blocks/AboveFold2'
import { teamMembersBlockSchema } from '../src/components/blocks/TeamMembers'

// Your hosting provider likely exposes this as an environment variable
const branch =
    process.env.HEAD ||
    process.env.VERCEL_GIT_COMMIT_REF ||
    process.env.CF_PAGES_BRANCH ||
    'main'

export default defineConfig({
    branch,
    clientId: '7258bb05-043a-4916-97cd-b09c3974737d',
    token: process.env.TINA_TOKEN,
    build: {
        outputFolder: 'admin',
        publicFolder: 'public',
    },
    media: {
        tina: {
            mediaRoot: '',
            publicFolder: 'public',
        },
    },
    schema: {
        collections: [
            {
                name: 'post',
                label: 'Blog Posts',
                path: 'src/content/posts',
                format: 'mdx',
                fields: [
                    {
                        type: 'string',
                        name: 'title',
                        label: 'Title',
                        isTitle: true,
                        required: true,
                    },
                    {
                        type: 'string',
                        name: 'seoTitle',
                        label: 'Seo - Title',
                        required: true,
                    },
                    {
                        type: 'string',
                        name: 'seoDescription',
                        label: 'SEO - Description',
                        required: true,
                        ui: {
                            component: 'textarea',
                        },
                    },
                    {
                        type: 'datetime',
                        name: 'pubDate',
                        label: 'Published At',
                        ui: {
                            timeFormat: 'HH:mm',
                        },
                    },
                    {
                        type: 'image',
                        label: 'Hero image',
                        name: 'heroImage',
                    },
                    {
                        label: 'Category',
                        name: 'category',
                        type: 'reference',
                        collections: ['category'],
                    },
                    {
                        type: 'rich-text',
                        name: 'body',
                        label: 'Body',
                        isBody: true,
                        templates: [
                            {
                                name: 'TwitterCard',
                                label: 'Twitter Card',
                                fields: [
                                    {
                                        name: 'twitter',
                                        label: 'Twitter post ID',
                                        type: 'string',
                                    },
                                ],
                            },
                            {
                                name: 'Image',
                                label: 'Image',
                                fields: [
                                    {
                                        type: 'object',
                                        label: 'Image',
                                        name: 'image',
                                        fields: [
                                            {
                                                name: 'src',
                                                label: 'Image Source',
                                                type: 'image',
                                            },
                                            {
                                                name: 'alt',
                                                label: 'Alt Text',
                                                type: 'string',
                                            },
                                            {
                                                name: 'caption',
                                                label: 'Caption Text',
                                                type: 'string',
                                            },
                                            {
                                                name: 'size',
                                                label: 'full width',
                                                type: 'boolean',
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                name: 'Cta',
                                label: 'Cta',
                                fields: [
                                    {
                                        // I can't leave a field empty - this is a workaround
                                        name: 'empty',
                                        label: 'leave empty ',
                                        type: 'string',
                                    },
                                ],
                            },
                            {
                                name: 'JumpTarget',
                                label: 'Jump link target',
                                fields: [
                                    {
                                        name: 'target',
                                        label: 'Jump link target',
                                        type: 'string',
                                    },
                                ],
                            },
                        ],
                    },
                ],
                ui: {
                    router: ({ document }) => `/blog/${document._sys.filename}`,
                },
            },
            {
                name: 'docs',
                label: 'Docs',
                path: 'src/content/docs',
                format: 'mdx',
                fields: [
                    {
                        type: 'string',
                        name: 'title',
                        label: 'Title',
                        isTitle: true,
                        required: true,
                    },
                    {
                        type: 'string',
                        name: 'seoTitle',
                        label: 'Seo - Title',
                        required: true,
                    },
                    {
                        type: 'string',
                        name: 'seoDescription',
                        label: 'SEO - Description',
                        required: true,
                        ui: {
                            component: 'textarea',
                        },
                    },
                    {
                        type: 'number',
                        label: 'Order',
                        name: 'order',
                        required: true,
                    },
                    {
                        type: 'image',
                        label: 'Hero image',
                        name: 'heroImage',
                    },
                    {
                        label: 'Category',
                        name: 'category',
                        type: 'reference',
                        collections: ['category'],
                        required: true,
                    },
                    {
                        type: 'rich-text',
                        name: 'body',
                        label: 'Body',
                        isBody: true,
                        templates: [
                            {
                                name: 'EmbeddedIframe',
                                label: 'Embedded Iframe',
                                ui: {
                                    previewSrc: '',
                                    defaultItem: {
                                        title: 'IFrame',
                                        url: 'https://www.google.com',
                                    },
                                },
                                fields: [
                                    {
                                        type: 'string',
                                        label: 'Title',
                                        name: 'title',
                                    },
                                    {
                                        type: 'string',
                                        label: 'Url',
                                        name: 'url',
                                    },
                                ],
                            },
                            {
                                name: 'TwitterCard',
                                label: 'Twitter Card',
                                fields: [
                                    {
                                        name: 'twitter',
                                        label: 'Twitter post ID',
                                        type: 'string',
                                    },
                                ],
                            },
                            {
                                name: 'Image',
                                label: 'Image',
                                fields: [
                                    {
                                        type: 'object',
                                        label: 'Image',
                                        name: 'image',
                                        fields: [
                                            {
                                                name: 'src',
                                                label: 'Image Source',
                                                type: 'image',
                                            },
                                            {
                                                name: 'alt',
                                                label: 'Alt Text',
                                                type: 'string',
                                            },
                                            {
                                                name: 'caption',
                                                label: 'Caption Text',
                                                type: 'string',
                                            },
                                            {
                                                name: 'size',
                                                label: 'full width',
                                                type: 'boolean',
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                name: 'Cta',
                                label: 'Cta',
                                fields: [
                                    {
                                        // I can't leave a field empty - this is a workaround
                                        name: 'empty',
                                        label: 'leave empty',
                                        type: 'string',
                                    },
                                ],
                            },
                            {
                                name: 'JumpTarget',
                                label: 'Jump link target',
                                fields: [
                                    {
                                        name: 'target',
                                        label: 'Jump link target',
                                        type: 'string',
                                    },
                                ],
                            },
                        ],
                    },
                ],
                ui: {
                    router: ({ document }) =>
                        `/docs/*/${document._sys.filename}`,
                },
            },
            {
                name: 'pages',
                label: 'Pages',
                path: 'src/content/pages',
                format: 'mdx',
                fields: [
                    {
                        type: 'string',
                        name: 'title',
                        label: 'Title',
                        isTitle: true,
                        required: true,
                    },
                    {
                        type: 'string',
                        name: 'seoTitle',
                        label: 'SEO - Title',
                    },
                    {
                        type: 'string',
                        name: 'seoDescription',
                        label: 'SEO - Description',
                        ui: {
                            component: 'textarea',
                        },
                    },
                    {
                        type: 'string',
                        name: 'robots',
                        label: 'Robots',
                        required: false,
                    },
                    {
                        type: 'object',
                        list: true,
                        name: 'blocks',
                        label: 'Sections',
                        ui: {
                            visualSelector: true,
                        },
                        templates: [
                            heroBlockSchema,
                            featureFocusBlockSchema,
                            sectionHeadingBlockSchema,
                            sectionCtaBlockSchema,
                            hero2ColumnBlockSchema,
                            featureFocusSimpleBlockSchema,
                            contentBlockSchema,
                            cardsBlockSchema,
                            featuredBlog,
                            imageGalleryBlockSchema,
                            aboutCardsBlockSchema,
                            hubqlDemoFileSchema,
                            scrollCardBlockSchema,
                            templateApiReferenceBlockSchema,
                            vsHeroBlockSchema,
                            paragraphBlockSchema,
                            imageBlockSchema,
                            aboveFoldBlockSchema,
                            trustedByBlockSchema,
                            servicesBlockSchema,
                            productGridBlockSchema,
                            whyHubqlBlockSchema,
                            techStackBlockSchema,
                            testimonialsBlockSchema,
                            serviceCardsBlockSchema,
                            projectReferencesBlockSchema,
                            aboveFoldBlockSchema2,
                            imageGridBlockSchema,
                            teamMembersBlockSchema,
                        ],
                    },
                ],
                ui: {
                    router: ({ document }) => {
                        if (document._sys.filename === 'home') {
                            return `/`
                        }
                        return `/${document._sys.relativePath.replace(
                            '.mdx',
                            ''
                        )}`
                    },
                },
            },
            {
                label: 'Layout',
                name: 'global',
                path: 'src/content/global',
                format: 'json',
                ui: {
                    global: true,
                },
                fields: [
                    {
                        type: 'object',
                        label: 'Header',
                        name: 'header',
                        fields: [
                            {
                                type: 'string',
                                label: 'Name',
                                name: 'name',
                            },

                            {
                                type: 'object',
                                label: 'Nav Links',
                                name: 'nav',
                                list: true,
                                ui: {
                                    itemProps: (item) => {
                                        return { label: item?.label }
                                    },
                                    defaultItem: {
                                        href: 'home',
                                        label: 'Home',
                                    },
                                },
                                fields: [
                                    {
                                        type: 'boolean',
                                        label: 'isExternalLink?',
                                        name: 'isExternal',
                                    },
                                    {
                                        type: 'string',
                                        label: 'Label',
                                        name: 'label',
                                    },
                                    {
                                        type: 'string',
                                        label: 'Link',
                                        name: 'href',
                                    },
                                    {
                                        type: 'object',
                                        label: 'Nav Links',
                                        name: 'nav',
                                        list: true,
                                        ui: {
                                            itemProps: (item) => {
                                                return { label: item?.label }
                                            },
                                            defaultItem: {
                                                href: 'home',
                                                label: 'Home',
                                            },
                                        },
                                        fields: [
                                            {
                                                type: 'boolean',
                                                label: 'isExternalLink?',
                                                name: 'isExternal',
                                            },
                                            {
                                                type: 'string',
                                                label: 'Link',
                                                name: 'href',
                                            },
                                            {
                                                type: 'string',
                                                label: 'Label',
                                                name: 'label',
                                            },
                                            {
                                                type: 'image',
                                                label: 'icon image',
                                                name: 'icon',
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                type: 'string',
                                label: 'Cta label',
                                name: 'ctaLabel',
                            },
                        ],
                    },
                    {
                        type: 'object',
                        label: 'Footer',
                        name: 'footer',
                        fields: [
                            {
                                type: 'object',
                                label: 'Nav Links',
                                name: 'nav',
                                list: true,
                                ui: {
                                    itemProps: (item) => {
                                        return { label: item?.label }
                                    },
                                    defaultItem: {
                                        href: 'home',
                                        label: 'Home',
                                    },
                                },
                                fields: [
                                    {
                                        type: 'string',
                                        label: 'Label',
                                        name: 'label',
                                    },
                                    {
                                        type: 'string',
                                        label: 'Href',
                                        name: 'href',
                                    },
                                    {
                                        type: 'object',
                                        label: 'Nav Links',
                                        name: 'nav',
                                        list: true,
                                        ui: {
                                            itemProps: (item) => {
                                                return { label: item?.label }
                                            },
                                            defaultItem: {
                                                href: 'home',
                                                label: 'Home',
                                            },
                                        },
                                        fields: [
                                            {
                                                type: 'boolean',
                                                label: 'isExternalLink?',
                                                name: 'isExternal',
                                            },
                                            {
                                                type: 'string',
                                                label: 'Label',
                                                name: 'label',
                                            },
                                            {
                                                type: 'string',
                                                label: 'Link',
                                                name: 'href',
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                type: 'object',
                                label: 'Legal Links',
                                name: 'legalNav',
                                list: true,
                                ui: {
                                    itemProps: (item) => {
                                        return { label: item?.label }
                                    },
                                    defaultItem: {
                                        href: 'home',
                                        label: 'Home',
                                    },
                                },
                                fields: [
                                    {
                                        type: 'string',
                                        label: 'Link',
                                        name: 'href',
                                    },
                                    {
                                        type: 'string',
                                        label: 'Label',
                                        name: 'label',
                                    },
                                ],
                            },
                            {
                                type: 'object',
                                label: 'Social Links',
                                name: 'social',
                                fields: [
                                    {
                                        type: 'string',
                                        label: 'LinkedIn',
                                        name: 'linkedin',
                                    },
                                    {
                                        type: 'string',
                                        label: 'Twitter',
                                        name: 'twitter',
                                    },
                                    {
                                        type: 'string',
                                        label: 'Github',
                                        name: 'github',
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                label: 'Category',
                name: 'category',
                path: 'categories',
                fields: [
                    {
                        label: 'Name',
                        name: 'name',
                        type: 'string',
                    },
                    {
                        label: 'Order',
                        name: 'order',
                        type: 'number',
                    },
                ],
            },
        ],
    },
})
