import App from './App.svelte';

export function render(url) {
    const { head, html, css } = App.render({
        url
    });

    return html;
}
