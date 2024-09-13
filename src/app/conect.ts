import {DOCUMENT} from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable(
    {
        providedIn : "root"
    }
)

export class Conect{
    constructor(@Inject(DOCUMENT) private readonly document: Document) {
    }
    public addScript(scriptSrc: string) {
        const script = this.document.createElement('script');
        script.type = 'text/javascript';
        script.src = scriptSrc;
        script.defer = true;
        this.document.head.appendChild(script);
    }
    public addScriptAsync(scriptSrc: string) {
        const script = this.document.createElement('script');
        script.type = 'text/javascript';
        script.src = scriptSrc;
        script.async = true;
        this.document.head.appendChild(script);
    }
    public addStyle(styleSrc: string) {
        const link = this.document.createElement('link');
        link.rel = 'stylesheet';
        link.href = styleSrc;
        link.type = 'text/css';
        this.document.head.appendChild(link);
    }
}