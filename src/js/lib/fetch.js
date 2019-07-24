"use strict";
/* global fetch */

class ajaxfetch {
    static options = {
        ContentType: "application/json;charset=utf-8",
        baseURL: null
    };
    static #_opt = {
        headers: {
            "Content-Type": this.options.ContentType
        }
    };

    static get(url) {
        return this.#_fetch(url);
    }

    static post(url, data) {
        return this.#_fetch(url, Object.assign(this.#_opt, {
            method:"POST",
            body: data
        }));
    }

    static put(url, data) {
        return this.#_fetch(url, Object.assign(this.#_opt, {
            method: "PUT",
            body: data
        }));
    }

    static delete(url, data) {
        return this.#_fetch(url, Object.assign(this.#_opt, {
            method: "DELETE",
            body: data
        }));
    }

    static #_fetch(url, options = null) {
        if (this.options.baseURL !== null) {
            url = this.options.baseURL + url;
        }
        if (options !== null) {
            switch (options.headers["Content-Type"]) {
            case "application/json;charset=utf-8": {
                options.body = JSON.stringify(options.body);
                break;
            }}
        }
        return fetch(url, options).then((res) => {
            if (res.status !== 200){
                return res.text().then((text) => {
                    throw new Error(text);
                });
            }
            return res.json();
        });
    }
}

module.exports = ajaxfetch;
