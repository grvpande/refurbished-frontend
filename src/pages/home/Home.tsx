import { homePageDescription, homePageTitle } from 'config';
import useSeo from 'hooks/useSeo';

export default function Home() {
    useSeo({ title: homePageTitle, description: homePageDescription });
    return <div>Home</div>;
}
