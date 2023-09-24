import Head from 'next/head';
import React from 'react';
import VSeo from './VSeo';


interface AppHeadProps {
    title?: string;
    description?: string;
    metaKeywords?: string;
    metaAuthor?: string;
    metaOgImage?: string;
    metaOgImageAlt?: string;
    schemaMarkup?: object;
}

const AppHead: React.FC<AppHeadProps> = ({
    title,
    description,
    metaKeywords,
    metaAuthor,
    metaOgImageAlt,
}) => {
    const pageTitle = title || 'Quick Art Space';
    const pageDescription =
        description ||
        `kargakarga landing page template.`;
    const pageKeywords =
        metaKeywords ||
        'kargakarga, landing page, template, nextjs, react, typescript';
    const pageAuthor = metaAuthor || 'kargakarga';
    const pageOgImageAlt = metaOgImageAlt || 'kargakarga landing page template';

    return (
        <><VSeo title={pageTitle} description={pageDescription} /><Head>
            <title key="title">{pageTitle}</title>
            <meta name="theme-color" content="#ffffff" />
            <meta
                name="description"
                content={pageDescription}
                key="description" />
            <meta name="keywords" content={pageKeywords} key="keywords" />
            <meta name="author" content={pageAuthor} key="author" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0" />
            <meta name="robots" content="index, follow" />
            <meta property="og:title" content={pageTitle} key="og-title" />
            <meta
                property="og:description"
                content={pageDescription}
                key="og-description" />
            <meta
                property="og:image:alt"
                content={pageOgImageAlt}
                key="og-image-alt" />
            <meta property="og:type" content="website" key="og-type" />
            <meta property="og:locale" content="tr_TR" key="og-locale" />

        </Head></>
    );
};

export default AppHead;
