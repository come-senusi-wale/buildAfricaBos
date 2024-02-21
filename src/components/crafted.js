import dynamic from 'next/dynamic';
import '../style/crafted.css';
import { NetworkId, ComponentMap } from '@/config';

const Component = dynamic(() => import('@/components/vm-component'), { ssr: false });
const socialComponents = ComponentMap[NetworkId];

export const Crafted = () => {
    return(<>
        <section id="crated">
            <Component src={socialComponents.crafted} />
        </section>
    </>)
}