import { storePrefersDarkScheme, storeLightSwitch } from '@skeletonlabs/skeleton';
/** @type {import('./$types').PageLoad} */

export async function load({fetch}) {
    const res = await fetch('https://dummyjson.com/posts')
    const data = await res.json();
    return {
        blogposts: data
    }

}
