/* eslint-env node */
/* eslint-disable spaced-comment */
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import path from 'path';

import createFastify from 'fastify';
// @ts-ignore
import fastifyGracefulShutdown from 'fastify-graceful-shutdown';
import fastifyStatic from 'fastify-static';

import App from 'App';

const fastify = createFastify({
    logger: {
        level: 'info',
    },
});

interface GetTemplateQueryParams {
    assetsHost?: string;
}

interface GetTemplateUrlParams {
    locale: string;
    template: string;
}

fastify.register(fastifyGracefulShutdown);

fastify.register(fastifyStatic, {
    root: path.join(__dirname, 'assets'),
    prefix: '/assets/',
});

fastify.get<GetTemplateQueryParams, GetTemplateUrlParams>('/templates/:locale/:template', {
    schema: {
        querystring: {
            assetsHost: { type: 'string' },
            payload: { type: 'object' },
        },
        response: {
            200: {
                type: 'string',
            },
        },
    },
}, async (request, reply) => {
    const { template, locale } = request.params;
    reply.header('Content-Type', 'text/html');

    const { assetsHost, ...payloads } = request.query;
    if (assetsHost) {
        // eslint-disable-next-line camelcase,@typescript-eslint/camelcase
        __webpack_public_path__ = `${assetsHost.replace(/\/+$/, '')}/`;
    }

    return ReactDOMServer.renderToStaticMarkup(
        <App
            type={template}
            payload={{locale, ...payloads}}
        />
    );
});

(async () => {
    try {
        await fastify.listen(3000, '0.0.0.0');
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
})();
