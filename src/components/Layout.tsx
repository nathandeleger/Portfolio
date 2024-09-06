import '@/app/globals.css';
import React from 'react';
import { useRouter } from 'next/router';
import Header from './Header';
import Footer from './Footer';

type LayoutProps = React.PropsWithChildren<{}>;

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const router = useRouter();

    return (
        <div className='flex flex-col min-h-screen bg-space bg-fixed'>
            <div className="sticky top-0 z-50 p-6">
                <Header />
            </div>
            <main className="flex-grow p-6 mt-5">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
