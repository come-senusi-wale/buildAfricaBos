import dynamic from 'next/dynamic';
import '../style/header.css';
import { NetworkId, ComponentMap } from '@/config';

const Component = dynamic(() => import('@/components/vm-component'), { ssr: false });
const socialComponents = ComponentMap[NetworkId];

export const Header = () => {
    return(<>
        <section id="header">
            <Component src={socialComponents.buildAfricaHead} />
        </section>
    </>)
}