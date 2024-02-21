import dynamic from 'next/dynamic';
import '../style/homePage.css';
import { NetworkId, ComponentMap } from '@/config';

const Component = dynamic(() => import('@/components/vm-component'), { ssr: false });
const socialComponents = ComponentMap[NetworkId];

export const HomePage = () => {
    return(<>
        <section id="home">
            <Component src={socialComponents.buildAfricaHome} />
        </section>
    </>)
}