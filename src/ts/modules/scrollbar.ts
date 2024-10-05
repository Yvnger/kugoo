import SimpleBar from "simplebar";

const basketWidgetContent: HTMLElement | null = document.querySelector('.js-basket-widget-content');

if (basketWidgetContent) new SimpleBar(basketWidgetContent, { autoHide: true });
