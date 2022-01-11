export default function LocalServiceWorkerRegister() {
    let url = ''
    if (process.env.NODE_ENV === 'production') {
        const swPath = `https://ilyalesunov.gitlab.io/pet-search/service-worker.js`;
        url = swPath
    } else {
        const swPath = `${process.env.PUBLIC_URL}/service-worker.js`;
        url = swPath
    }


    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register(url)
            .then((reg) => {
                // регистрация сработала
                console.log('Registration succeeded. Scope is ' + reg.scope);
            }).catch((error) => {
            // регистрация прошла неудачно ?
            console.log('Registration failed with ' + error);
        });
    }
}

