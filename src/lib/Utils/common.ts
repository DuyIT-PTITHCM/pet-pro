import { toastErr } from "$lib/store/toastError";
import html2canvas from "html2canvas";
import { onMount } from "svelte";

export const convertImageJsonToArray = function (json: string) {
    if (json) {
        return JSON.parse(json);
    }
    return [];
}

export function formatDate(inputDate: string) {
    const newDate = new Date(inputDate);
    const day = newDate.getDate().toString().padStart(2, '0');
    const month = (newDate.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based, so we add 1
    const year = newDate.getFullYear();
    return `${day}/${month}/${year}`;
}
export function formatDateWithTime(inputDate: string) {
    const newDate = new Date(inputDate);
    const day = newDate.getDate().toString().padStart(2, '0');
    const month = (newDate.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based, so we add 1
    const year = newDate.getFullYear();
    const hours = newDate.getHours().toString().padStart(2, '0');
    const minutes = newDate.getMinutes().toString().padStart(2, '0');
    const seconds = newDate.getSeconds().toString().padStart(2, '0');

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
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
                    value: heading.textContent
                });
            });
        } else {
            console.log("Can't read heading");
        }
    });
    return menus;
}

//save checkin success
export async function captureAndSave(id: string, imageName: string) {
    // Lấy thẻ HTML cần chụp
    try {
        var today = new Date();
        
        const elementToCapture = document.getElementById(id);

        const canvas = await html2canvas(elementToCapture, {
            useCORS: true,
        });

        // Chuyển đổi canvas thành URL của hình ảnh
        const imageDataURL = canvas.toDataURL("image/png");

        // Tạo một đối tượng a để tải xuống hình ảnh
        const downloadLink = document.createElement("a");
        downloadLink.href = imageDataURL;
        downloadLink.download = `${imageName}_${formatDateWithTime(today.toString())}.png`;
        // Thực hiện bấm giả lập để tải xuống
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        return 1;
    } catch (error: any) {
        toastErr.set([
            {
                message: error.message,
                type: "error",
            },
        ]);
    }
}