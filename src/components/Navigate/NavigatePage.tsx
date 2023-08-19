import { useMemo } from 'react';
import { CView } from "../CView";
import { useNavigateProvider } from './provider';

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

    return visible ? children : null;
}
