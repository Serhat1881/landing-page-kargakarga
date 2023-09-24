import type { DefaultSeoProps } from 'next-seo';
import { DefaultSeo } from 'next-seo';
import SEO from '../../../../next-seo.config';

import React from 'react';

type VSeoProps = {} & DefaultSeoProps;

/**
 *
 * Options:
 *
 * - Default Seo settings can be made from the next-seo.config.ts file
 * - [Option list](https://github.com/garmeeh/next-seo#nextseo-options)
 */
const VSeo: React.FC<VSeoProps> = (props) => {
    return <DefaultSeo {...SEO} {...props} />;
};

export default VSeo;
