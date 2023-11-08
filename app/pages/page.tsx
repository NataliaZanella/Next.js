type Page = {
    id: number;
    name: string;
}

import { resolve } from "dns";

function fetchPages() : Promise<Page[]> {
    return new Promise((resolve) => {
        setTimeout(() => {

            resolve([
                { id: 1, name: "Pag 1" },
                { id: 1, name: "Pag 1" },
                { id: 1, name: "Pag 1" },
            ]);
        }, 2000);
});
}



export default async function Pages() {
    const pages = await fetchPages();

    return (
        <div>
            <h1>Sobre</h1>
            <ul>
                {pages.map((page) => (
                    <li key={page .id}>{page.name}</li>    
                ))}

            </ul>
        </div>
    );
}