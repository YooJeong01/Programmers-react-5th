import liveServer from 'live-server';

const params = {
    host : 'localhost',
    prot : 3000,
    open : false,
    mount : [['/','./public']]
}
liveServer.start(params);