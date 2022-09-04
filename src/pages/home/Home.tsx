import PhoneItem from 'components/shop/phone-item/PhoneItem';
import Container from 'components/ui/layout/Container';
import { homePageDescription, homePageTitle } from 'config';
import useSeo from 'hooks/useSeo';

export default function Home() {
    useSeo({ title: homePageTitle, description: homePageDescription });
    return (
        <Container>
            <PhoneItem />
        </Container>
    );
}
