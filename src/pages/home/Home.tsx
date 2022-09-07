import PhoneListing from 'components/shop/phone-listing/PhoneListing';
import Hero from 'components/structure/hero/Hero';
import { homePageDescription, homePageTitle } from 'config';
import useSeo from 'hooks/useSeo';

export default function Home() {
    useSeo({ title: homePageTitle, description: homePageDescription });
    return (
        <>
            <Hero />
            <PhoneListing />
        </>
    );
}
