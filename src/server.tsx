/* eslint-env node */
/* eslint-disable spaced-comment */
import React from 'react';

import path from 'path';

import createFastify from 'fastify';
import fastifyStatic from 'fastify-static';
import { AddressInfo } from 'net';

import ReactDOMServer from 'react-dom/server';
import { Html } from 'components';
import App, { Params } from 'App';

const fastify = createFastify({
    logger: {
        level: 'warn',
    },
});

interface GetTemplateQueryParams {
    assetsHost?: string;
}

interface GetTemplateUrlParams {
    locale: string;
    template: string;
}

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

    const params: Params = {
        type: template,
        payload: {
            locale,
            ...payloads,
        },
    };

    if (assetsHost) {
        // eslint-disable-next-line camelcase,@typescript-eslint/camelcase
        __webpack_public_path__ = `${assetsHost.replace(/\/+$/, '')}/`;
    }

    return ReactDOMServer.renderToStaticMarkup(
        <Html>
            <App {...params} />
        </Html>
    );
});

(async () => {
    try {
        await fastify.listen(3000);
        fastify.log.info(`server listening on ${(fastify.server.address() as AddressInfo)!.port}`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
})();
