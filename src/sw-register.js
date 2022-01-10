export default function LocalServiceWorkerRegister() {
    const swPath = `${process.env.PUBLIC_URL}/service-worker.js`;

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register(swPath)
            .then((reg) => {
                // регистрация сработала
                console.log('Registration succeeded. Scope is ' + reg.scope);
            }).catch((error) => {
            // регистрация прошла неудачно
            console.log('Registration failed with ' + error);
        });
    }
}

