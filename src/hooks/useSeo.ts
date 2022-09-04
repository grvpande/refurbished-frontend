import { useEffect } from 'react';

export default function useSeo({
    title = 'default title',
    description = 'default description',
}) {
    useEffect(() => {
        document.title = title;
        const meta = document.querySelector(
            'meta[name="description"]',
        ) as HTMLElement;
        meta.setAttribute('content', description);
    }, [description, title]);
}
