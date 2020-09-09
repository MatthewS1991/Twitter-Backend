import {createServer} from '@marblejs/core';
import {IO} from 'fp-ts/lib/IO';
import {listener} from './http.listener';

const server = createServer({
    port: 8080,
    hostname: '0.0.0.0',
    listener,
});

const main: IO<void> = async () => await (await server)();

main();