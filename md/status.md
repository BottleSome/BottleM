<style>
    .trans {
        transition: .5s ease;
    }
</style>
<img class="trans" src="./pics/letMeCheckGif.gif" id="loadingPic"></img>
<div class="trans" id="serverStatus"></div>

<script>
    const PIC = document.getElementById('loadingPic');
    const SERVER_STATUS = document.getElementById('serverStatus');
    let timeLeft = 0;
    let renderHTML = '<p>啊咧，服务器尚未启动诶~(￣▽￣)~*</p>';
    function showStatus() {
        PIC.style.opacity = 0;
        PIC.addEventListener('transitionend', () => {
            PIC.style.display = 'none';
            SERVER_STATUS.style.display = 'block';
            setTimeout(() => {
                SERVER_STATUS.style.opacity = 1;
            }, 100);
        })
    }
    SERVER_STATUS.style.display = 'none';
    SERVER_STATUS.style.opacity = 0;
    fetch(`https://serv.xbottle.top/mc/mcstatus`).then(res => {
        if (res.status === 200)
            return res.json();
        // 获取失败
        return Promise.reject(res);
    }).then(resp => {
        if(resp.ok){
            renderHTML = `
                <p>服务器已启动~</p>
                <p>有 ${resp.players.online}/${resp.players.max} 位小伙伴正在用餐</p>
            `;
        }
    }).catch(err => {
        console.log(err);
        renderHTML = '<p>状态信息获取失败TAT</p>';
    }).finally(() => {
        SERVER_STATUS.innerHTML = renderHTML;
        showStatus();
    });
</script>
