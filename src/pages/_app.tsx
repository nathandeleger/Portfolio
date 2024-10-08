import Layout from '@/components/Layout';
import '../app/globals.css';
import type {AppProps} from 'next/app';
import React, {useEffect} from "react";

function MyApp({ Component, pageProps }: AppProps) {
    return (
            <Layout>
                <Component {...pageProps} />
            </Layout>
    );
}

export default MyApp;