const execScripts = function (html) {
    const scriptMatch = html.match(/<script(\s.*)?>([\s\S]+?)<\/script>/);
    if (scriptMatch) {
        // 闭包执行页面脚本
        setTimeout(`(()=>{
            ${scriptMatch[2]}
        })()`, 0);
    }
}, mdRender = function (plain) {
    return window.markdownit({ html: true, linkify: true }).render(plain);
};
const CACHED_PAGES = {};
function sel(e, all = false) {
    return all ? document.querySelectorAll(e) : document.querySelector(e);
}
function router(page) {
    if (CACHED_PAGES.hasOwnProperty(page)) {
        sel('#container').innerHTML = mdRender(CACHED_PAGES[page]);
        execScripts(CACHED_PAGES[page]);
    } else {
        fetch(`./md/${page}.md`).then(res => res.text())
            .then(text => {
                sel('#container').innerHTML = mdRender(text);
                execScripts(text);
                CACHED_PAGES[page] = text;
            }).catch(err => {
                sel('#container').innerHTML = 'Page load failed :(';
                console.log(`Page load failed: ${err}`);
            });
    }
}
function checkActive(nav) {
    var es = sel('nav > a', true);
    for (var i in es) {
        if (!(es[i] instanceof Element)) break;
        if (es[i].id == nav) {
            es[i].classList.add('active');
        } else {
            es[i].classList.remove('active');
        }
    }
}
rou.x('container').a('def', '!index', function (a, b, pn) {
    sel('#container').innerHTML = '<img src=\'https://one.imbottle.com/mcimg/\' referrerpolicy="no-referrer"></img>';
    checkActive(a);
    console.log(a);
}).a('reg', 'intro', function (a, b, pn) {
    router(a);
    checkActive(a);
}).a('reg', 'rules', function (a, b, pn) {
    router(a);
    checkActive(a);
}).a('reg', 'faq', function (a, b, pn) {
    router(a);
    checkActive(a);
}).a('reg', 'join', function (a, b, pn) {
    router(a);
    checkActive(a);
}).a('reg', 'status', function (a, b, pn) {
    router(a);
    checkActive(a);
}).r();
