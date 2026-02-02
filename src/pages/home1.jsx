import Domains from "../components/Domains";
import Hero from "../components/Hero";
import RequestDemo from "../components/RequestDemo";
import UseCases from "../components/UseCases";
import Why from "../components/Why";
import How from "../components/How";
import '../styles/home.css';

export default function Home1() {
    return(
        <>
            <Hero />
            <Domains />
            <Why />
            <How />
            <UseCases />
            <RequestDemo />
        </>
    )
}