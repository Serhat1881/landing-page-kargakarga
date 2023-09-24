import MainLayout from '@/components/layouts/MainLayout';
import AdvertSection from '@/sections/AdvertSection';
import ArtistSection from '@/sections/ArtistSection';
import ContacSection from '@/sections/ContacSection';
import CookieSection from '@/sections/CookieSection';
import CustomerSection from '@/sections/CustomerSection';
import Fqa from '@/sections/Faq';
import HeroSection from '@/sections/HeroSection';
import ServicesSection from '@/sections/ServicesSection';
import React from 'react';

export default function Home() {
    return (
        <MainLayout containerWidth={false}>
         
            <HeroSection />
         
          <CookieSection />
          
            <ServicesSection />
        
            <ArtistSection />

            <CustomerSection />

            <AdvertSection />

            <Fqa />

            <ContacSection />
        </MainLayout>
    );
}
