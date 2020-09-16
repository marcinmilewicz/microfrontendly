import './utils/matchers.ts';

import { asMicroAppMap, extractRootPath, getMicroAppConfigByPath, MicroAppsManifest } from './manifest';

let manifest: MicroAppsManifest;

beforeEach(() => {
  manifest = {
    pages: [
      {
        path: '/foo-microapp',
        apps: [
          {
            id: 'header-microapp',
            container: 'header-container',
          },
          {
            id: 'foo-microapp',
            container: 'app-container',
          },
        ],
      },
      {
        path: '/bar-microapp',
        apps: [
          {
            id: 'header-microapp',
            container: 'header-container',
          },
          {
            id: 'bar-microapp',
            container: 'app-container',
          },
        ],
      },
    ],
    apps: [
      {
        selector: 'header-microapp',
        sources: {
          entryJs: 'index.js',
        },
        host: 'http://localhost:9001',
      },
      {
        selector: 'foo-microapp',
        sources: {
          entryJs: 'foo-microapp.js',
          entryStyle: 'styles.css',
        },
        host: 'http://localhost:9002',
        routes: [
          {
            id: '| First |',
            path: '/foo-microapp/first',
          },
          {
            id: '| Second |',
            path: '/foo-microapp/second',
          },
        ],
      },
      {
        selector: 'bar-microapp',
        sources: {
          entryJs: 'bar-microapp.js',
          entryStyle: 'styles.css',
        },
        host: 'http://localhost:9003',
        routes: [
          {
            id: '| First |',
            path: '/bar-microapp/first',
          },
          {
            id: '| Second |',
            path: '/bar-microapp/second',
          },
        ],
      },
    ],
  };
});

test('should get micro app by root path', () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  expect(getMicroAppConfigByPath('/foo-microapp', manifest.apps)).toBeMicroAppWithSelector('foo-microapp');
});

test('should get micro app by secondary path', () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  expect(getMicroAppConfigByPath('/foo-microapp/first', manifest.apps)).toBeMicroAppWithSelector('foo-microapp');
});

test('should get micro app by root path', () => {
  expect(getMicroAppConfigByPath('/foowrong', manifest.apps)).toBeUndefined();
});

test('should get micro app by secondary path', () => {
  expect(getMicroAppConfigByPath('/foo-microapp/wrong', manifest.apps)).toBeUndefined();
});

test('should get micro app by secondary path', () => {
  expect(asMicroAppMap(manifest.apps)).toEqual({
    'header-microapp': {
      selector: 'header-microapp',
      sources: {
        entryJs: 'index.js',
      },
      host: 'http://localhost:9001',
    },
    'foo-microapp': {
      selector: 'foo-microapp',
      sources: {
        entryJs: 'foo-microapp.js',
        entryStyle: 'styles.css',
      },
      host: 'http://localhost:9002',
      routes: [
        {
          id: '| First |',
          path: '/foo-microapp/first',
        },
        {
          id: '| Second |',
          path: '/foo-microapp/second',
        },
      ],
    },
    'bar-microapp': {
      selector: 'bar-microapp',
      sources: {
        entryJs: 'bar-microapp.js',
        entryStyle: 'styles.css',
      },
      host: 'http://localhost:9003',
      routes: [
        {
          id: '| First |',
          path: '/bar-microapp/first',
        },
        {
          id: '| Second |',
          path: '/bar-microapp/second',
        },
      ],
    },
  });
});

test('should extract root path from pathname', () => {
  expect(extractRootPath('/foo-microapp')).toEqual('/foo-microapp');
  expect(extractRootPath('/foo-microapp/')).toEqual('/foo-microapp');
  expect(extractRootPath('/foo-microapp/path')).toEqual('/foo-microapp');
});
