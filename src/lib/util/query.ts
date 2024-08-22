import { pushState } from "$app/navigation";

export function updateQueryParam(key: string, value: string) {
    const url = new URL(window.location.toString());
    url.searchParams.set(key, value);
    pushState(url, {});
}