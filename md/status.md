<style>
    .trans {
        transition: 1s ease;
    }
</style>
<img class="trans" src="./pics/letMeCheck.png" id="loadingPic"></img>
<div class="trans" id="serverStatus"></div>

<script>
    const SERVER_ADDR='im.rainplay.cn:28503';
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
    fetch(`https://api.mcsrvstat.us/2/${SERVER_ADDR}`).then(res => {
        if (res.status === 200)
            return res.json();
        // 获取失败
        return Promise.reject(res);
    }).then(resp => {
        if(resp.online){
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
