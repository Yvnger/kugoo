import { header } from "./header";

const appBlock: HTMLElement | null = document.getElementById('app');
const appBlockHeight = appBlock?.clientHeight;

if (appBlock) header?.setAttribute('style', `top: ${appBlockHeight}px`);
