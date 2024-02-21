import dynamic from 'next/dynamic';
import '../style/about.css';
import { NetworkId, ComponentMap } from '@/config';

const Component = dynamic(() => import('@/components/vm-component'), { ssr: false });
const socialComponents = ComponentMap[NetworkId];

export const About = () => {
    return(<>
        <section id="about">
            <Component src={socialComponents.buildAfricaAbout} />
        </section>
    </>)
}