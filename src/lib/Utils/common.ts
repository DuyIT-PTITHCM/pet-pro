import { onMount } from "svelte";

export const convertImageJsonToArray = function (json: string) {
    if (json) {
        return JSON.parse(json);
    }
    return [];
}

export function formatDate(inputDate: string){
    const newDate = new Date(inputDate);
    const day = newDate.getDate().toString().padStart(2, '0');
    const month = (newDate.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based, so we add 1
    const year = newDate.getFullYear();
    return `${day}/${month}/${year}`;
}

export async function getHeading(menus: any, isNumber = false) {
    onMount(() => {
        const postContent = document.getElementById('postcontent');
        if (postContent) {
            const headings = postContent.querySelectorAll('h1, h2, h3, h4, h5, h6');
            headings.forEach((heading, index) => {
                const tagName = heading.tagName.toLowerCase();
                let id = "heading" + index;
                //heading.innerHTML = tagName.charAt(1) + " " + heading.innerHTML;
                switch (tagName) {
                    case "h1":
                        heading.classList.add("text-3xl")
                        break;
                    case "h2":
                        heading.classList.add("text-xl")
                        break;
                    case "h3":
                        heading.classList.add("text-lg")
                        break;
                    default:
                        heading.classList.add("text-base")
                }
                heading.setAttribute("id", id)
                menus.push({
                    id: id,
                    value: heading.innerHTML
                });
            });
        } else {
            console.log("Can't read heading");
        }
    });
    return menus;
}