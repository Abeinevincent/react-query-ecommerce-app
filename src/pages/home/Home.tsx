import Hero from "../../components/layout/landingpage/Hero";
import LandingPage from "../../components/layout/landingpage/LandingPage";

export default function Home() {
    const token = localStorage.getItem('token')
    return (
        <LandingPage>
            <Hero
                title="Black Friday Offer"
                subtitle="With our black friday offer, you can shop millions of products at reduced prices at the comfort of your living room"
                image="https://source.unsplash.com/collection/404339/800x600"
                ctaText="Click Here to Continue"
                ctaLink={token ? '/products' : '/register'}
            />
        </LandingPage>
    );
}
