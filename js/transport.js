
    $('.swiper-wrapper a').on('click', (e) => {
        //sesstion storage
        let sess = {Name: e.target.className};
        sess = JSON.stringify(sess);
        sessionStorage.setItem("song", sess);
    })



