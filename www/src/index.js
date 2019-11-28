import App from './app/App.svelte';

const replaceContainer = function (Component, options) {
    const frag = document.createDocumentFragment();
    // const component = new Component(Object.assign({}, options, { target: frag }));
    const component = new Component({ ...options, target: frag });

    document.querySelector('#root').replaceChild(frag, options.target);

    return component;
}

let app = new App({
    target: document.querySelector('#root'),
    props: {
        name: 'worlds'
    }
});

export default app;

if (module.hot) {
    module.hot.accept();
    module.hot.accept("./app/App.svelte", () => {
        app = replaceContainer(App, {
            target: document.querySelector('#main'),
            props: {
                name: 'worlds'
            }
        })
    });
}
