import { useMemo } from 'react';
import { useNavigateProvider } from './provider';
import * as Animatable from 'react-native-animatable'

// const ANIMATE:Animatable.Animation = "bounceInLeft";
const ANIMATE:Animatable.Animation = "fadeInLeft";

interface INavigateProps {
    href: string | RegExp,
    children: any
}

export function NavigatePage({ children, href }: INavigateProps)
{
    const { page } = useNavigateProvider();

    const visible = useMemo(() => {
        if (href instanceof RegExp)
            return href.test(page);
        return href === page;
    }, [page, href]);

    if (!visible)
        return null;

    return <Animatable.View animation={ANIMATE} style={{flex:1, width:'100%'}}>
        {children}
    </Animatable.View>
}
