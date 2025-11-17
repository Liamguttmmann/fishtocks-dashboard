// Minimal stubs to allow TypeScript build without @types/node availability.

declare type Buffer = any;
declare const Buffer: any;

declare namespace NodeJS {
  interface EventEmitter {}
}

declare module 'node:events' {
  export class EventEmitter {}
}

declare module 'node:http' {
  export type OutgoingHttpHeaders = any;
  export type ClientRequestArgs = any;
  export class IncomingMessage {
    url?: string;
  }
  export class ClientRequest {}
  export class Agent {}
  export class Server {}
  export class ServerResponse {}
}

declare module 'node:http2' {
  export class Http2SecureServer {}
}

declare module 'node:https' {
  export type ServerOptions = any;
  export class Server {}
}

declare module 'node:url' {
  export const URL: any;
  export type Url = any;
}

declare module 'node:stream' {
  export class Stream {}
  export class Duplex {}
  export type DuplexOptions = any;
}

declare module 'node:tls' {
  export type SecureContextOptions = any;
}

declare module 'node:zlib' {
  export type ZlibOptions = any;
}

declare module 'node:fs' {
  export class FSWatcher {}
  export class Stats {}
}

declare module 'node:net' {
  export class Server {}
  export class Socket {}
}

declare module 'node:util' {
  export const promisify: any;
}

declare module 'node:path' {
  export const resolve: any;
}

declare module 'node:buffer' {
  export const Buffer: any;
}

declare module 'rollup/parseAst' {
  export const parseAst: any;
  export const parseAstAsync: any;
}

declare module 'node:*' {
  const value: any;
  export = value;
}
