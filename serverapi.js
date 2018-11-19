const XMLHttpRequest = this.XMLHttpRequest || require('xmlhttprequest').XMLHttpRequest;

const callback = {
    fetchCat(id, callback, error) {
        const request = new XMLHttpRequest();
        request.addEventListener('open', () => callback(JSON.parse(request.responseText)));
        request.addEventListener('error', error);
        request.open('GET', `http://localhost:9090/cats/${catID}`);
        request.send()
    }
};

const fetch = this.fetch || require('node-fetch');

const promise = {
    fetchCat: catID => fetch(`http://localhost:9090/cats/${catID}`).then(res => res.ok ? res.json() : Promise.reject(res.statusText))
};

module.exports = {callback, promise};