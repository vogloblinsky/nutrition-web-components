import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
    namespace: 'nutri-score',
    plugins: [sass()],
    copy: [
        {
            src: '../images/220px-Nutri-score-A.svg.png',
            dest: '../www/220px-Nutri-score-A.svg.png'
        }
    ],
    outputTargets: [
        { type: 'dist' },
        {
            type: 'www',
            baseUrl: '/nutri-score/www',
            serviceWorker: null // disable service workers
        }
    ]
};
