import type { DefaultSeoProps } from 'next-seo';

const SEO: DefaultSeoProps = {
    twitter: {
        handle: '@kargakarga',
        site: '@kargakarga',
    },
    description:
        "kargakarga'nın yaptığı bir şeyler.",
    titleTemplate: 'kargakarga | %s',
    title: 'kargakarga',
    additionalMetaTags: [
        {
            name: 'keywords',
            content:
                'karga, kargakarga, kargakarga.com, kargakarga.net, kargakarga.org, ka',
        },
    ],
};

export default SEO;
