<style>
    .trans {
        transition: 1s ease;
    }
</style>
<img class="trans" src="./pics/letMeCheck.png" id="loadingPic"></img>
<div class="trans" id="serverStatus"></div>

<script>
    const TOKEN = 'fddd65b630$%6626er5bb4e#60a0fc93$622e95';
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
    fetch('https://one.imbottle.com/bottlem/backend/query/mc', {
        headers: {
            'Authorization': `Bearer ${TOKEN}`
        }
    }).then(res => {
        if (res.status === 200)
            return res.json();
        // 获取失败
        return Promise.reject(res);
    }).then(resp => {
        let respData = resp.data,
            dataItemNum = respData ? Object.entries(respData).length : 0;
        if (dataItemNum > 0) {
            renderHTML = `
                <p>服务器已启动~</p>
                <p>有 ${respData.players_online}/${respData.players_max} 位小伙伴正在用餐</p>
                <p>餐馆地址: ${respData.ip}</p>
            `;
            if (respData.players_online === 0) {
                timeLeft = respData.idling_time_left;
                renderHTML += `<p>餐馆还有<span id="timeLeft">${timeLeft}</span>秒关闭</p>`;
                let timer = setInterval(() => {
                    let timeLeftElem = document.getElementById('timeLeft');
                    if (!timeLeftElem || timeLeft <= 0)
                        clearInterval(timer);
                    else
                        timeLeftElem.innerText = timeLeft--;
                }, 1000);
            }
        }
    }).catch(err => {
        console.log(err);
        renderHTML = '<p>状态信息获取失败TAT</p>';
    }).finally(() => {
        SERVER_STATUS.innerHTML = renderHTML;
        showStatus();
    });
</script>