// Q12.Write a JavaScript function to parse an URL.

function parse_URL(url) {
    const a = new URL(url);

    return {
        source: url,
        protocol: a.protocol.replace(':', ''),
        host: a.hostname,
        port: a.port || (a.protocol === 'https:' ? '443' : '80'),  // Use default ports if not provided
        query: a.search,
        params: (function () {
            let ret = {};
            a.searchParams.forEach((value, key) => {
                ret[key] = value;
            });
            return ret;
        })(),
        file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
        hash: a.hash.replace('#', ''),
        path: a.pathname,
        relative: a.href.replace(a.origin, ''),
        segments: a.pathname.replace(/^\//, '').split('/')
    };
}

console.log(parse_URL('https://github.com/pubnub/python/search?utf8=%E2%9C%93&q=python'));

