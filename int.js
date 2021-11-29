var get = function (p, sf) { /*(path,data,success or fail,method)*/
    var xhr = new XMLHttpRequest();
    xhr.open('get', p, true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            sf.success(xhr.responseText);
        } else if (xhr.readyState == 4 && xhr.status !== 200) {
            sf.failed(xhr.status);
        }
    };
}, cached = {};
function s(e, all = false) {
    return all ? document.querySelectorAll(e) : document.querySelector(e);
}
function pl(page) {
    if (cached.hasOwnProperty(page)) {
        s('#container').innerHTML = window.markdownit({ html: true, linkify: true }).render(cached[page]);
    } else {
        get('./' + page + '.md', {
            success: function (m) {
                s('#container').innerHTML = window.markdownit({ html: true, linkify: true }).render(m);
                cached[page] = m;
            }, failed: function (m) {
                s('#container').innerHTML = 'Page load failed';
            }
        });
    }
}
function ca(nav) {
    var es = s('nav > a', true);
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
    s('#container').innerHTML = '<img src=\'https://one.imbottle.com/mcimg/\'></img>';
    ca(a);
    console.log(a);
}).a('reg', 'intro', function (a, b, pn) {
    pl(a);
    ca(a);
}).a('reg', 'rules', function (a, b, pn) {
    pl(a);
    ca(a);
}).a('reg', 'faq', function (a, b, pn) {
    pl(a);
    ca(a);
}).a('reg', 'join', function (a, b, pn) {
    pl(a);
    ca(a);
}).r();
