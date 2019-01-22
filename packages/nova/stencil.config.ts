import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
    namespace: 'nova',
    plugins: [sass()],
    outputTargets: [
        { type: 'dist' },
        {
            type: 'www',
            baseUrl: '/nova/www',
            serviceWorker: null // disable service workers
        }
    ]
};
