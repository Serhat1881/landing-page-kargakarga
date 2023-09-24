import Head from 'next/head';
import React from 'react';

interface AppHeadProps {
    title?: string;
}

const AppHead: React.FC<AppHeadProps> = (props) => {

    return (
        <>
            <Head>
                <meta name="theme-color" content="#ffffff" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
        </>
    );
};

export default AppHead;
