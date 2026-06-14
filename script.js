// ============================================
// DATA STRUCTURE - EASILY CUSTOMIZABLE
// ============================================

// HARDCODED CREDENTIALS - EDIT THESE TO CHANGE LOGIN
const VALID_CREDENTIALS = {
    username: 'aa',
    password: 'aa'
};

const galleryData = {
    us: {
        name: 'A journey of love and laughter',
        video: 'https://res.cloudinary.com/dwmcugijh/video/upload/v1781456871/videosUs/pei83pnj7u5ivwqe70hk.mp4',
        videoPoster: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781457314/posters/us.png',
        sections: [            { title: 'anniversary', id: 'anniversary', items: [
                { id: 1, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455643/imageUs/anniversary/ann1.jpg', title: 'ann1.jpg' },
                { id: 2, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455643/imageUs/anniversary/ann10.jpg', title: 'ann10.jpg' },
                { id: 3, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455644/imageUs/anniversary/ann11.jpg', title: 'ann11.jpg' },
                { id: 4, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455645/imageUs/anniversary/ann12.png', title: 'ann12.png' },
                { id: 5, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455646/imageUs/anniversary/ann13.jpg', title: 'ann13.jpg' },
                { id: 6, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455647/imageUs/anniversary/ann15.jpg', title: 'ann15.jpg' },
                { id: 7, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455648/imageUs/anniversary/ann16.jpg', title: 'ann16.jpg' },
                { id: 8, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455648/imageUs/anniversary/ann17.jpg', title: 'ann17.jpg' },
                { id: 9, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455650/imageUs/anniversary/ann18.jpg', title: 'ann18.jpg' },
                { id: 10, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455651/imageUs/anniversary/ann19.jpg', title: 'ann19.jpg' },
                { id: 11, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455652/imageUs/anniversary/ann2.jpg', title: 'ann2.jpg' },
                { id: 12, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455653/imageUs/anniversary/ann20.jpg', title: 'ann20.jpg' },
                { id: 13, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455654/imageUs/anniversary/ann21.jpg', title: 'ann21.jpg' },
                { id: 14, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455654/imageUs/anniversary/ann3.jpg', title: 'ann3.jpg' },
                { id: 15, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455655/imageUs/anniversary/ann4.jpg', title: 'ann4.jpg' },
                { id: 16, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455656/imageUs/anniversary/ann5.jpg', title: 'ann5.jpg' },
                { id: 17, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455656/imageUs/anniversary/ann6.jpg', title: 'ann6.jpg' },
                { id: 18, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455657/imageUs/anniversary/ann7.jpg', title: 'ann7.jpg' },
                { id: 19, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455658/imageUs/anniversary/ann8.jpg', title: 'ann8.jpg' },
                { id: 20, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455658/imageUs/anniversary/ann9.jpg', title: 'ann9.jpg' },
            ] },
            { title: 'Date night 2', id: 'date night 2', items: [
                { id: 1, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455659/imageUs/Date%20night%202/dn1.jpg', title: 'dn1.jpg' },
                { id: 2, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455660/imageUs/Date%20night%202/dn2.jpg', title: 'dn2.jpg' },
                { id: 3, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455661/imageUs/Date%20night%202/dn3.jpg', title: 'dn3.jpg' },
                { id: 4, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455662/imageUs/Date%20night%202/dn4.jpg', title: 'dn4.jpg' },
                { id: 5, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455662/imageUs/Date%20night%202/dn5.jpg', title: 'dn5.jpg' },
            ] },
            { title: 'Gunduuuu', id: 'gunduuuu', items: [
                { id: 1, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455663/imageUs/Gunduuuu/gundu1.jpg', title: 'gundu1.jpg' },
                { id: 2, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455664/imageUs/Gunduuuu/gundu10.jpg', title: 'gundu10.jpg' },
                { id: 3, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455665/imageUs/Gunduuuu/gundu11.jpg', title: 'gundu11.jpg' },
                { id: 4, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455666/imageUs/Gunduuuu/gundu12.jpg', title: 'gundu12.jpg' },
                { id: 5, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455667/imageUs/Gunduuuu/gundu13.jpg', title: 'gundu13.jpg' },
                { id: 6, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455667/imageUs/Gunduuuu/gundu14.jpg', title: 'gundu14.jpg' },
                { id: 7, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455668/imageUs/Gunduuuu/gundu15.jpg', title: 'gundu15.jpg' },
                { id: 8, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455669/imageUs/Gunduuuu/gundu16.jpg', title: 'gundu16.jpg' },
                { id: 9, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455670/imageUs/Gunduuuu/gundu17.jpg', title: 'gundu17.jpg' },
                { id: 10, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455670/imageUs/Gunduuuu/gundu18.jpg', title: 'gundu18.jpeg' },
                { id: 11, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455671/imageUs/Gunduuuu/gundu19.jpg', title: 'gundu19.jpg' },
                { id: 12, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455673/imageUs/Gunduuuu/gundu2.jpg', title: 'gundu2.jpg' },
                { id: 13, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455674/imageUs/Gunduuuu/gundu20.jpg', title: 'gundu20.jpg' },
                { id: 14, src: 'https://res.cloudinary.com/dwmcugijh/video/upload/v1781455679/imageUs/Gunduuuu/gundu21.mp4', title: 'gundu21.mp4' },
                { id: 15, src: 'https://res.cloudinary.com/dwmcugijh/video/upload/v1781455682/imageUs/Gunduuuu/gundu22.mp4', title: 'gundu22.mp4' },
                { id: 16, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455684/imageUs/Gunduuuu/gundu3.jpg', title: 'gundu3.jpg' },
                { id: 17, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455685/imageUs/Gunduuuu/gundu4.jpg', title: 'gundu4.jpg' },
                { id: 18, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455686/imageUs/Gunduuuu/gundu5.jpg', title: 'gundu5.jpg' },
                { id: 19, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455687/imageUs/Gunduuuu/gundu6.jpg', title: 'gundu6.jpg' },
                { id: 20, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455689/imageUs/Gunduuuu/gundu7.jpg', title: 'gundu7.jpg' },
                { id: 21, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455690/imageUs/Gunduuuu/gundu8.jpg', title: 'gundu8.jpg' },
                { id: 22, src: 'https://res.cloudinary.com/dwmcugijh/video/upload/v1781455694/imageUs/Gunduuuu/us25.mp4', title: 'us25.mp4' },
            ] },
            { title: 'Oia Date', id: 'oia date', items: [
                { id: 1, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455696/imageUs/Oia%20Date/oia%201.jpg', title: 'oia 1.jpg' },
                { id: 2, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455697/imageUs/Oia%20Date/oia2.jpg', title: 'oia2.jpg' },
                { id: 3, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455699/imageUs/Oia%20Date/oia3.jpg', title: 'oia3.jpg' },
                { id: 4, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455699/imageUs/Oia%20Date/oia4.jpg', title: 'oia4.jpg' },
                { id: 5, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455700/imageUs/Oia%20Date/oia5.jpg', title: 'oia5.jpg' },
                { id: 6, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455702/imageUs/Oia%20Date/oia6.jpg', title: 'oia6.jpg' },
            ] },
            { title: 'pranav bday', id: 'pranav bday', items: [
                { id: 1, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455702/imageUs/pranav%20bday/bday1.jpg', title: 'bday1.jpg' },
                { id: 2, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455704/imageUs/pranav%20bday/bday10.jpg', title: 'bday10.jpg' },
                { id: 3, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455704/imageUs/pranav%20bday/bday2.jpg', title: 'bday2.jpg' },
                { id: 4, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455705/imageUs/pranav%20bday/bday3.jpg', title: 'bday3.jpg' },
                { id: 5, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455706/imageUs/pranav%20bday/bday4.jpg', title: 'bday4.jpg' },
                { id: 6, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455706/imageUs/pranav%20bday/bday5.jpg', title: 'bday5.jpg' },
                { id: 7, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455707/imageUs/pranav%20bday/bday6.jpg', title: 'bday6.jpg' },
                { id: 8, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455708/imageUs/pranav%20bday/bday7.jpg', title: 'bday7.jpg' },
                { id: 9, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455709/imageUs/pranav%20bday/bday8.jpg', title: 'bday8.jpg' },
            ] },
            { title: 'Queen', id: 'queen', items: [
                { id: 1, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455741/imageUs/Queen/solo.jpg', title: 'solo.jpg' },
                { id: 2, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455742/imageUs/Queen/solo1.webp', title: 'solo1.webp' },
                { id: 3, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455743/imageUs/Queen/solo10.jpg', title: 'solo10.jpg' },
                { id: 4, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455744/imageUs/Queen/solo11.jpg', title: 'solo11.jpg' },
                { id: 5, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455745/imageUs/Queen/solo12.jpg', title: 'solo12.jpg' },
                { id: 6, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455749/imageUs/Queen/solo14.jpg', title: 'solo14.jpg' },
                { id: 7, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455750/imageUs/Queen/solo16.jpg', title: 'solo16.jpg' },
                { id: 8, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455751/imageUs/Queen/solo17.jpg', title: 'solo17.jpg' },
                { id: 9, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455753/imageUs/Queen/solo18.jpg', title: 'solo18.jpg' },
                { id: 10, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455754/imageUs/Queen/solo19.jpg', title: 'solo19.jpg' },
                { id: 11, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455755/imageUs/Queen/solo2.jpg', title: 'solo2.jpg' },
                { id: 12, src: 'https://res.cloudinary.com/dwmcugijh/video/upload/v1781455756/imageUs/Queen/solo20.mp4', title: 'solo20.mp4' },
                { id: 13, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455758/imageUs/Queen/solo21.jpg', title: 'solo21.jpg' },
                { id: 14, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455758/imageUs/Queen/solo21.jpg', title: 'solo21.mp4' },
                { id: 15, src: 'https://res.cloudinary.com/dwmcugijh/video/upload/v1781455766/imageUs/Queen/solo27.mp4', title: 'solo27.mp4' },
                { id: 16, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455767/imageUs/Queen/solo28.jpg', title: 'solo28.jpg' },
                { id: 17, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455768/imageUs/Queen/solo29.jpg', title: 'solo29.jpg' },
                { id: 18, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455770/imageUs/Queen/solo3.jpg', title: 'solo3.jpg' },
                { id: 19, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455771/imageUs/Queen/solo30.jpg', title: 'solo30.jpg' },
                { id: 20, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455772/imageUs/Queen/solo31.jpg', title: 'solo31.jpg' },
                { id: 21, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455773/imageUs/Queen/solo32.jpg', title: 'solo32.jpg' },
                { id: 22, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455774/imageUs/Queen/solo33.jpg', title: 'solo33.jpg' },
                { id: 23, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455776/imageUs/Queen/solo6.jpg', title: 'solo6.jpg' },
                { id: 24, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455777/imageUs/Queen/solo7.jpg', title: 'solo7.jpg' },
                { id: 25, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455778/imageUs/Queen/solo8.jpg', title: 'solo8.jpg' },
                { id: 26, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455779/imageUs/Queen/solo9.jpg', title: 'solo9.jpg' },
            ] },
            { title: 'Sensitive', id: 'sensitive', items: [
                { id: 1, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455780/imageUs/Sensitive/sens1.jpg', title: 'sens1.jpg' },
                { id: 2, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455781/imageUs/Sensitive/sens10.jpg', title: 'sens10.jpg' },
                { id: 3, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455782/imageUs/Sensitive/sens12.jpg', title: 'sens12.jpg' },
                { id: 4, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455785/imageUs/Sensitive/sens13.jpg', title: 'sens13.jpg' },
                { id: 5, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455788/imageUs/Sensitive/sens14.jpg', title: 'sens14.jpg' },
                { id: 6, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455789/imageUs/Sensitive/sens2.jpg', title: 'sens2.jpg' },
                { id: 7, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455790/imageUs/Sensitive/sens3.jpg', title: 'sens3.jpg' },
                { id: 8, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455790/imageUs/Sensitive/sens4.jpg', title: 'sens4.jpg' },
                { id: 9, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455791/imageUs/Sensitive/sens5.jpg', title: 'sens5.jpg' },
                { id: 10, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455792/imageUs/Sensitive/sens6.jpg', title: 'sens6.jpg' },
                { id: 11, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455792/imageUs/Sensitive/sens7.jpg', title: 'sens7.jpg' },
                { id: 12, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455793/imageUs/Sensitive/sens8.jpg', title: 'sens8.jpg' },
                { id: 13, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455794/imageUs/Sensitive/sens9.jpg', title: 'sens9.jpg' },
            ] },
            { title: 'Udupi', id: 'udupi', items: [
                { id: 1, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455795/imageUs/Udupi/udp1.jpg', title: 'udp1.jpg' },
                { id: 2, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455795/imageUs/Udupi/udp2.jpg', title: 'udp2.jpg' },
                { id: 3, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455797/imageUs/Udupi/udp3.jpg', title: 'udp3.jpg' },
                { id: 4, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455797/imageUs/Udupi/udp4.jpg', title: 'udp4.jpg' },
                { id: 5, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455798/imageUs/Udupi/udp6.jpg', title: 'udp6.jpg' },
                { id: 6, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455799/imageUs/Udupi/udp7.jpg', title: 'udp7.jpg' },
                { id: 7, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455800/imageUs/Udupi/udp8.jpg', title: 'udp8.jpg' },
                { id: 8, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455801/imageUs/Udupi/udp9.jpg', title: 'udp9.jpg' },
            ] },
            { title: 'Us', id: 'us', items: [
                { id: 1, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455802/imageUs/Us/onam1.jpg', title: 'onam1.jpg' },
                { id: 2, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455803/imageUs/Us/onam2.jpg', title: 'onam2.jpg' },
                { id: 3, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455804/imageUs/Us/onam3.jpg', title: 'onam3.jpg' },
                { id: 4, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455805/imageUs/Us/us%2016.jpg', title: 'us 16.jpg' },
                { id: 5, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455806/imageUs/Us/us1.jpg', title: 'us1.jpg' },
                { id: 6, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455807/imageUs/Us/us10.jpg', title: 'us10.jpg' },
                { id: 7, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455807/imageUs/Us/us11.jpg', title: 'us11.jpg' },
                { id: 8, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455808/imageUs/Us/us12.jpg', title: 'us12.jpg' },
                { id: 9, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455809/imageUs/Us/us13.jpg', title: 'us13.jpg' },
                { id: 10, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455811/imageUs/Us/us15.jpg', title: 'us15.jpg' },
                { id: 11, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455811/imageUs/Us/us15.jpg', title: 'us15.mp4' },
                { id: 12, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455812/imageUs/Us/us17.jpg', title: 'us17.jpg' },
                { id: 13, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455813/imageUs/Us/us18.jpg', title: 'us18.jpg' },
                { id: 14, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455814/imageUs/Us/us19.jpg', title: 'us19.jpg' },
                { id: 15, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455815/imageUs/Us/us2.jpg', title: 'us2.jpg' },
                { id: 16, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455815/imageUs/Us/us20.jpg', title: 'us20.jpg' },
                { id: 17, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455817/imageUs/Us/us21.jpg', title: 'us21.jpg' },
                { id: 18, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455819/imageUs/Us/us22.jpg', title: 'us22.jpg' },
                { id: 19, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455820/imageUs/Us/us3.jpg', title: 'us3.jpg' },
                { id: 20, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455820/imageUs/Us/us4.jpg', title: 'us4.jpg' },
                { id: 21, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455821/imageUs/Us/us5.jpg', title: 'us5.jpg' },
                { id: 22, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455822/imageUs/Us/us6.jpg', title: 'us6.jpg' },
                { id: 23, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455823/imageUs/Us/us8.jpg', title: 'us8.jpg' },
                { id: 24, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455824/imageUs/Us/us9.jpg', title: 'us9.jpg' },
            ] },
            { title: 'Valentines Day', id: 'valentines day', items: [
                { id: 1, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455825/imageUs/Valentines%20Day/val1.jpg', title: 'val1.jpg' },
                { id: 2, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455825/imageUs/Valentines%20Day/val2.jpg', title: 'val2.jpg' },
                { id: 3, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455826/imageUs/Valentines%20Day/val3.jpg', title: 'val3.jpg' },
                { id: 4, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455827/imageUs/Valentines%20Day/val4.jpg', title: 'val4.jpg' },
                { id: 5, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455827/imageUs/Valentines%20Day/val5.jpg', title: 'val5.jpg' },
            ] },
            { title: 'Wonderla', id: 'wonderla', items: [
                { id: 1, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455828/imageUs/Wonderla/wonderla1.jpg', title: 'wonderla1.jpg' },
                { id: 2, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455829/imageUs/Wonderla/wonderla10.jpg', title: 'wonderla10.jpg' },
                { id: 3, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455829/imageUs/Wonderla/wonderla11.jpg', title: 'wonderla11.jpg' },
                { id: 4, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455830/imageUs/Wonderla/wonderla12.jpg', title: 'wonderla12.jpg' },
                { id: 5, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455832/imageUs/Wonderla/wonderla13.jpg', title: 'wonderla13.jpg' },
                { id: 6, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455833/imageUs/Wonderla/wonderla14.jpg', title: 'wonderla14.jpg' },
                { id: 7, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455834/imageUs/Wonderla/wonderla2.jpg', title: 'wonderla2.jpg' },
                { id: 8, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455835/imageUs/Wonderla/wonderla3.jpg', title: 'wonderla3.jpg' },
                { id: 9, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455835/imageUs/Wonderla/wonderla4.jpg', title: 'wonderla4.jpg' },
                { id: 10, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455836/imageUs/Wonderla/wonderla5.jpg', title: 'wonderla5.jpg' },
                { id: 11, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455837/imageUs/Wonderla/wonderla6.jpg', title: 'wonderla6.jpg' },
                { id: 12, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455838/imageUs/Wonderla/wonderla7.jpg', title: 'wonderla7.jpg' },
                { id: 13, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455839/imageUs/Wonderla/wonderla8.jpg', title: 'wonderla8.jpg' },
                { id: 14, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455839/imageUs/Wonderla/wonderla9.jpg', title: 'wonderla9.jpg' },
            ] },
        ]
    },
    me: {
        name: 'Me',
        video: 'videosMe/memories.mp4',
        videoPoster: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781457315/posters/me.png',
        sections: [            { title: 'Baby', id: 'baby', items: [
                { id: 1, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455591/imageMe/Baby/baby1.jpg', title: 'baby1.JPG' },
                { id: 2, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455598/imageMe/Baby/baby2.jpg', title: 'baby2.JPG' },
                { id: 3, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455599/imageMe/Baby/baby3.jpg', title: 'baby3.JPG' },
                { id: 4, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455600/imageMe/Baby/baby4.jpg', title: 'baby4.JPG' },
                { id: 5, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455601/imageMe/Baby/baby5.jpg', title: 'baby5.JPG' },
                { id: 6, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455601/imageMe/Baby/baby6.jpg', title: 'baby6.JPG' },
                { id: 7, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455603/imageMe/Baby/baby7.jpg', title: 'baby7.jpg' },
                { id: 8, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455603/imageMe/Baby/baby8.jpg', title: 'baby8.jpg' },
                { id: 9, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455604/imageMe/Baby/baby9.jpg', title: 'baby9.jpg' },
            ] },
            { title: 'Dance', id: 'dance', items: [
                { id: 1, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455605/imageMe/Dance/dance1.jpg', title: 'dance1.JPG' },
                { id: 2, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455606/imageMe/Dance/dance2.jpg', title: 'dance2.JPG' },
                { id: 3, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455607/imageMe/Dance/dance4.jpg', title: 'dance4.JPG' },
            ] },
            { title: 'Family', id: 'family', items: [
                { id: 1, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455607/imageMe/Family/dad1.jpg', title: 'dad1.JPG' },
                { id: 2, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455608/imageMe/Family/dad2.jpg', title: 'dad2.JPG' },
                { id: 3, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455609/imageMe/Family/dad3.jpg', title: 'dad3.JPG' },
                { id: 4, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455610/imageMe/Family/fam10.jpg', title: 'fam10.JPG' },
                { id: 5, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455611/imageMe/Family/fam11.jpg', title: 'fam11.JPG' },
                { id: 6, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455612/imageMe/Family/fam12.jpg', title: 'fam12.jpg' },
                { id: 7, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455613/imageMe/Family/fam14.jpg', title: 'fam14.JPG' },
                { id: 8, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455614/imageMe/Family/fam16.jpg', title: 'fam16.JPG' },
                { id: 9, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455615/imageMe/Family/fam17.jpg', title: 'fam17.JPG' },
                { id: 10, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455616/imageMe/Family/fam18.jpg', title: 'fam18.JPG' },
                { id: 11, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455616/imageMe/Family/fam19.jpg', title: 'fam19.JPG' },
                { id: 12, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455617/imageMe/Family/fam2.jpg', title: 'fam2.JPG' },
                { id: 13, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455618/imageMe/Family/fam3.jpg', title: 'fam3.JPG' },
                { id: 14, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455619/imageMe/Family/fam4.jpg', title: 'fam4.JPG' },
                { id: 15, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455620/imageMe/Family/fam5.jpg', title: 'fam5.JPG' },
                { id: 16, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455621/imageMe/Family/fam6.jpg', title: 'fam6.JPG' },
                { id: 17, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455621/imageMe/Family/fam7.jpg', title: 'fam7.JPG' },
                { id: 18, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455622/imageMe/Family/fam8.jpg', title: 'fam8.jpg' },
                { id: 19, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455623/imageMe/Family/fam9.jpg', title: 'fam9.JPG' },
            ] },
            { title: 'Me', id: 'me', items: [
                { id: 1, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455624/imageMe/Me/IMG_0311.jpg', title: 'IMG_0311.JPG' },
                { id: 2, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455625/imageMe/Me/IMG_1791.jpg', title: 'IMG_1791.JPG' },
                { id: 3, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455626/imageMe/Me/IMG_1891.jpg', title: 'IMG_1891.JPG' },
                { id: 4, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455627/imageMe/Me/IMG_3913.jpg', title: 'IMG_3913.JPG' },
                { id: 5, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455628/imageMe/Me/me1.jpg', title: 'me1.JPG' },
                { id: 6, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455628/imageMe/Me/me10.jpg', title: 'me10.JPG' },
                { id: 7, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455629/imageMe/Me/me11.jpg', title: 'me11.JPG' },
                { id: 8, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455630/imageMe/Me/me12.jpg', title: 'me12.JPG' },
                { id: 9, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455631/imageMe/Me/me13.jpg', title: 'me13.JPG' },
                { id: 10, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455632/imageMe/Me/me14.jpg', title: 'me14.JPG' },
                { id: 11, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455632/imageMe/Me/me15.jpg', title: 'me15.JPG' },
                { id: 12, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455634/imageMe/Me/me16.jpg', title: 'me16.jpg' },
                { id: 13, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455634/imageMe/Me/me17.jpg', title: 'me17.JPG' },
                { id: 14, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455635/imageMe/Me/me18.jpg', title: 'me18.jpg' },
                { id: 15, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455636/imageMe/Me/me19.jpg', title: 'me19.jpg' },
                { id: 16, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455637/imageMe/Me/me20.jpg', title: 'me20.JPG' },
                { id: 17, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455637/imageMe/Me/me21.jpg', title: 'me21.jpg' },
                { id: 18, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455638/imageMe/Me/me22.jpg', title: 'me22.JPG' },
                { id: 19, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455639/imageMe/Me/me23.jpg', title: 'me23.JPG' },
                { id: 20, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455639/imageMe/Me/me25.jpg', title: 'me25.jpg' },
                { id: 21, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455640/imageMe/Me/me3.jpg', title: 'me3.JPG' },
                { id: 22, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455641/imageMe/Me/me5.jpg', title: 'me5.JPG' },
                { id: 23, src: 'https://res.cloudinary.com/dwmcugijh/image/upload/v1781455642/imageMe/Me/me9.jpg', title: 'me9.JPG' },
            ] },
        ]
    }
};

// ============================================
// DOM ELEMENTS
// ============================================
const loadingScreen = document.getElementById('loadingScreen');
const authScreen = document.getElementById('authScreen');
const loadingSignInBtn = document.getElementById('loadingSignInBtn');
const profileScreen = document.getElementById('profileScreen');
const mainContent = document.getElementById('mainContent');
const profileCards = document.querySelectorAll('.profile-card');
const heroBgImage = document.getElementById('heroBgImage');
const heroTitle = document.getElementById('heroTitle');
const heroDescription = document.getElementById('heroDescription');
const heroRank = document.getElementById('heroRank');
const heroRating = document.getElementById('heroRating');
const heroPlayBtn = document.getElementById('heroPlayBtn');
const heroInfoBtn = document.getElementById('heroInfoBtn');
const contentArea = document.getElementById('contentArea');
const sectionButtons = document.getElementById('sectionButtons');
const imageViewer = document.getElementById('imageModal');
const viewerImage = document.getElementById('viewerImage');
const viewerCaption = document.getElementById('viewerCaption');
const viewerCounter = document.getElementById('viewerCounter');
const viewerBackBtn = document.querySelector('.viewer-back-btn');
const viewerPrevBtn = document.querySelector('.viewer-prev-btn');
const viewerNextBtn = document.querySelector('.viewer-next-btn');
const profilesBtn = document.getElementById('profilesBtn');
const profileDropdown = document.getElementById('profileDropdown');
const profileDropdownItems = document.querySelectorAll('.profile-dropdown-item');
const profileSelectorImg = document.getElementById('profileSelectorImg');
const viewToggleBtns = document.querySelectorAll('.view-btn');

// Auth elements
const authForm = document.getElementById('authForm');
const usernameInput = document.getElementById('username');
const authError = document.getElementById('authError');

// ============================================
// STATE MANAGEMENT
// ============================================
let currentProfile = null;
let currentView = 'events';  // 'date' or 'events' - DEFAULT SET TO EVENTS
let currentVideoSrc = '';    // Tracks the video src for the current profile
let allItemsFlat = [];  // Flat array of all items for viewer navigation
let currentViewerIndex = -1;
let currentViewerSectionId = null;
const itemsPerPage = 4;  // Items to show before "More+" button
const sectionPaginationState = {};  // Track pagination for each section

// ============================================
// SESSION MANAGEMENT (localStorage)
// ============================================
const SESSION_KEY = 'gallery_session';

function saveSession() {
    const session = {
        isAuthenticated: true,
        profile: currentProfile,
        view: currentView,
        timestamp: Date.now()
    };
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

function loadSession() {
    const sessionData = sessionStorage.getItem(SESSION_KEY);
    if (sessionData) {
        try {
            const session = JSON.parse(sessionData);
            return session;
        } catch (e) {
            console.log('Session data corrupted, starting fresh');
            return null;
        }
    }
    return null;
}

function clearSession() {
    sessionStorage.removeItem(SESSION_KEY);
}

function restoreSession() {
    try {
        const session = loadSession();
        console.log('ðŸ“¦ Loaded session data:', session);
        
        if (session && session.isAuthenticated && session.profile) {
            console.log('ðŸ”„ Attempting to restore session...');
            
            // Skip the loading and auth screens, go straight to profile
            loadingScreen.classList.add('hidden');
            authScreen.classList.add('hidden');
            profileScreen.classList.add('hidden');
            mainContent.classList.remove('hidden');
            
            // Restore profile and view
            currentProfile = session.profile;
            currentView = session.view || 'events';
            
            // Load the profile content
            console.log('ðŸ“‚ Loading profile:', session.profile);
            loadProfile(session.profile);
            updateProfileSelectorImage(session.profile);
            setupNavbarScroll();
            
            console.log('âœ… Session restored successfully! Profile =', session.profile, 'View =', session.view);
            return true;
        }
        console.log('âš ï¸ No valid session found. Showing login screen.');
        return false;
    } catch (error) {
        console.error('âŒ Error restoring session:', error);
        return false;
    }
}

// ============================================
// EVENT LISTENERS
// ============================================

// Loading Screen Sign In Button
loadingSignInBtn.addEventListener('click', () => {
    loadingScreen.style.animation = 'slideOutUp 0.6s ease-in forwards';
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        authScreen.classList.remove('hidden');
    }, 300);
});

// Auth Form Submission
authForm.addEventListener('submit', (e) => {
    e.preventDefault();
    handleAuthentication();
});

// Profile Card Selection
profileCards.forEach(card => {
    card.addEventListener('click', () => {
        const profile = card.getAttribute('data-profile');
        selectProfile(profile);
    });
});

// View Toggle (Date vs Events)
viewToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const view = btn.getAttribute('data-view');
        switchView(view);
    });
});

// Hero Play button â€” open fullscreen modal
heroPlayBtn.addEventListener('click', () => {
    openFullscreenVideo();
});

// Hero Info button â€” open More Info modal
heroInfoBtn.addEventListener('click', () => {
    openMoreInfoModal();
});

// More Info Modal
const moreInfoModal = document.getElementById('moreInfoModal');
const moreInfoCloseBtn = document.getElementById('moreInfoCloseBtn');
const moreInfoPlayBtn = document.getElementById('moreInfoPlayBtn');

moreInfoCloseBtn.addEventListener('click', closeMoreInfoModal);
moreInfoModal.addEventListener('click', (e) => {
    if (e.target === moreInfoModal) closeMoreInfoModal();
});
moreInfoPlayBtn.addEventListener('click', () => {
    closeMoreInfoModal();
    openFullscreenVideo();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !moreInfoModal.classList.contains('hidden')) {
        closeMoreInfoModal();
    }
});

function openMoreInfoModal() {
    const profile = galleryData[currentProfile];
    if (!profile) return;
    document.getElementById('moreInfoHeroImg').style.backgroundImage = profile.videoPoster ? `url('${profile.videoPoster}')` : 'none';
    document.getElementById('moreInfoTitle').textContent = profile.videoTitle;
    document.getElementById('moreInfoYear').textContent = profile.year || '';
    document.getElementById('moreInfoDuration').textContent = profile.duration || '';
    document.getElementById('moreInfoRating').textContent = profile.rating || '';
    document.getElementById('moreInfoWarnings').textContent = profile.warnings || '';
    document.getElementById('moreInfoRank').textContent = profile.rank || '';
    document.getElementById('moreInfoDescription').textContent = profile.description || '';
    document.getElementById('moreInfoCast').textContent = profile.cast || '';
    document.getElementById('moreInfoGenres').textContent = profile.genres || '';
    document.getElementById('moreInfoTags').textContent = profile.tags || '';
    moreInfoModal.classList.remove('hidden');
    updateBodyOverflow();
}

function closeMoreInfoModal() {
    moreInfoModal.classList.add('hidden');
    updateBodyOverflow();
}

// Profiles Button - Toggle Profile Dropdown
profilesBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    profileDropdown.classList.toggle('hidden');
});

// Profile Dropdown Item Selection
profileDropdownItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.stopPropagation();
        const profileKey = item.dataset.profile;
        selectProfile(profileKey);
        profileDropdown.classList.add('hidden');
    });
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.profile-selector-wrapper')) {
        profileDropdown.classList.add('hidden');
    }
});

// Navbar scroll effect - make gradient appear on scroll
function setupNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    if (!navbar) return;
    
    function updateNavbarOnScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    // Initial check
    updateNavbarOnScroll();
    
    // Listen for scroll
    window.addEventListener('scroll', updateNavbarOnScroll);
}

// Image Viewer Navigation
viewerBackBtn.addEventListener('click', closeImageViewer);
viewerPrevBtn.addEventListener('click', showPrevImage);
viewerNextBtn.addEventListener('click', showNextImage);

// Close viewer with Escape key / Arrow keys
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (!imageViewer.classList.contains('hidden')) {
            closeImageViewer();
        }
    }
    if (e.key === 'ArrowLeft') {
        if (!imageViewer.classList.contains('hidden')) {
            showPrevImage();
        }
    }
    if (e.key === 'ArrowRight') {
        if (!imageViewer.classList.contains('hidden')) {
            showNextImage();
        }
    }
});

// ============================================
// FUNCTIONS
// ============================================

/**
 * Handle authentication
 */
function handleAuthentication() {
    const enteredUsername = usernameInput.value.trim();
    const enteredPassword = document.getElementById('password').value.trim();
    
    // Validate both username AND password
    if (enteredUsername === VALID_CREDENTIALS.username && 
        enteredPassword === VALID_CREDENTIALS.password) {
        // Credentials correct - proceed to profile screen
        authError.textContent = '';
        // Save auth state to localStorage
        saveSession();
        proceedToProfiles();
    } else {
        // Credentials incorrect - show error
        authError.textContent = 'Invalid username or password';
        usernameInput.value = '';
        document.getElementById('password').value = '';
        usernameInput.focus();
    }
}

/**
 * Transition from auth screen to profile screen
 */
function proceedToProfiles() {
    // Hide auth screen and show profile screen
    authScreen.style.animation = 'slideOutUp 0.6s ease-in forwards';
    
    setTimeout(() => {
        authScreen.classList.add('hidden');
        profileScreen.classList.remove('hidden');
    }, 300);
}

/**
 * Select a profile and load its content
 */
function selectProfile(profileKey) {
    currentProfile = profileKey;
    // Save profile selection to localStorage
    saveSession();

    // Hide profile screen and show main content with animation
    profileScreen.style.animation = 'slideOutUp 0.6s ease-in forwards';
    
    setTimeout(() => {
        profileScreen.classList.add('hidden');
        mainContent.classList.remove('hidden');
        
        loadProfile(profileKey);
        updateProfileSelectorImage(profileKey);
        setupNavbarScroll();
    }, 300);
}

/**
 * Update the profile image in the navbar selector
 */
function updateProfileSelectorImage(profileKey) {
    const profileImages = {
        'me': 'Logos/profileMe.jpg',
        'us': 'Logos/profileUs.jpg'
    };
    profileSelectorImg.src = profileImages[profileKey];
}

/**
 * Load profile content
 */
function loadProfile(profileKey) {
    const profile = galleryData[profileKey];

    // Update hero banner
    currentVideoSrc = profile.video;
    heroBgImage.style.backgroundImage = profile.videoPoster ? `url('${profile.videoPoster}')` : 'none';
    heroTitle.textContent = profile.videoTitle;
    heroDescription.textContent = profile.description || '';
    heroRank.textContent = profile.rank || '#1 in Memories Today';
    heroRating.textContent = profile.rating || 'U/A 18+';

    // Scroll to top
    window.scrollTo(0, 0);

    // Determine which sections to use based on currentView
    let sectionsToUse = profile.sections;
    if (currentView === 'events' && profile.eventSections) {
        sectionsToUse = profile.eventSections;
    }

    // Build flat array for image viewer navigation (only for item-based sections)
    allItemsFlat = [];
    sectionsToUse.forEach(section => {
        // Handle item-based sections (Me profile)
        if (section.items && Array.isArray(section.items)) {
            section.items.forEach(item => {
                // Skip redirect items (they don't have images)
                if (!item.isRedirect) {
                    allItemsFlat.push({
                        ...item,
                        sectionId: section.id,
                        sectionTitle: section.title
                    });
                }
            });
        }
        // Handle folder-based sections (Us profile)
        else if (section.folders && Array.isArray(section.folders)) {
            section.folders.forEach(folder => {
                folder.images.forEach(image => {
                    allItemsFlat.push({
                        ...image,
                        folderId: folder.id,
                        folderTitle: folder.title,
                        sectionId: section.id,
                        sectionTitle: section.title
                    });
                });
            });
        }
    });

    // Show/hide view toggle section - only show for Us profile
    const viewToggleSection = document.querySelector('.view-toggle-section');
    if (viewToggleSection) {
        if (profileKey === 'us') {
            viewToggleSection.style.display = 'flex';
        } else {
            viewToggleSection.style.display = 'none';
        }
    }

    // Render all sections
    renderSections(profile);
}

/**
 * Render all sections for the profile
 */
function renderSections(profile) {
    // Determine which sections to use based on currentView
    let sectionsToRender = profile.sections;
    if (currentView === 'events' && profile.eventSections) {
        sectionsToRender = profile.eventSections;
    }

    // Clear and render section buttons in navbar
    sectionButtons.innerHTML = '';
    sectionsToRender.forEach((section) => {
        const btn = document.createElement('button');
        btn.className = 'section-btn';
        btn.textContent = section.title;
        btn.setAttribute('data-section-id', section.id);
        
        btn.addEventListener('click', () => {
            scrollToSection(section.id);
        });
        
        sectionButtons.appendChild(btn);
    });
    
    // Clear content area
    contentArea.innerHTML = '';
    
    // Initialize pagination state
    sectionsToRender.forEach(section => {
        sectionPaginationState[section.id] = 0;  // Start at page 0
    });

    // Render sections with pagination
    sectionsToRender.forEach((section, sectionIndex) => {
        renderSection(section, sectionIndex);
    });
}

/**
 * Render a single section with pagination
 */
function renderSection(section, sectionIndex) {
    const contentRow = document.createElement('div');
    contentRow.className = 'content-row';
    contentRow.setAttribute('data-section-id', section.id);
    contentRow.innerHTML = `
        <div class="row-title">${section.title}</div>
        <div class="scroll-nav-container">
            <button class="nav-arrow nav-arrow-left hidden" data-section-id="${section.id}">â®</button>
            <div class="scroll-container" data-section-id="${section.id}"></div>
            <button class="nav-arrow nav-arrow-right hidden" data-section-id="${section.id}">â¯</button>
        </div>
    `;

    const scrollContainer = contentRow.querySelector('.scroll-container');
    const navArrowLeft = contentRow.querySelector('.nav-arrow-left');
    const navArrowRight = contentRow.querySelector('.nav-arrow-right');
    
    // Render items (now all sections use items)
    const pageIndex = sectionPaginationState[section.id] || 0;
    const startIndex = pageIndex * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToShow = section.items.slice(startIndex, endIndex);
    
    itemsToShow.forEach((item, itemIndex) => {
        const flatIndex = allItemsFlat.findIndex(i => 
            i.id === item.id && i.sectionId === section.id && i.title === item.title
        );

        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.setAttribute('data-section-id', section.id);
        
        const isLastItem = itemIndex === itemsToShow.length - 1;
        const hasMoreItems = endIndex < section.items.length;
        
        // Check if this is a redirect button item
        if (item.isRedirect) {
            galleryItem.innerHTML = `
                <div class="gallery-image-wrapper" style="display: flex; align-items: center; justify-content: center; background: rgba(229, 9, 20, 0.2); border: 2px solid #e50914; cursor: pointer;">
                    <button class="redirect-button" style="background: #e50914; color: white; border: none; padding: 20px 30px; font-size: 16px; font-weight: bold; border-radius: 4px; cursor: pointer; transition: all 0.3s ease;">
                        Click here to go to Gundu and Teddy section
                    </button>
                </div>
                <div class="gallery-item-title" style="text-align: center; margin-top: 10px;">Gundu and Teddy</div>
            `;
            
            galleryItem.addEventListener('click', () => {
                selectProfile(item.redirectProfile);
            });
        } else {
            galleryItem.innerHTML = `
                <div class="gallery-image-wrapper">
                    <img src="${item.src}" alt="${item.title}">
                    ${isLastItem && hasMoreItems ? '<div class="arrow-overlay">â†’</div>' : ''}
                </div>
                <div class="gallery-item-title">${item.title}</div>
            `;

            galleryItem.addEventListener('click', () => {
                // If last item and has more items - load more
                if (isLastItem && hasMoreItems) {
                    loadMoreItems(section.id);
                } else {
                    // Otherwise open image viewer
                    openImageViewer(flatIndex);
                }
            });
        }

        scrollContainer.appendChild(galleryItem);
    });

    // Setup left/right navigation arrow click handlers
    navArrowLeft.addEventListener('click', () => {
        scrollPaginationLeft(section.id);
    });
    
    navArrowRight.addEventListener('click', () => {
        scrollPaginationRight(section.id);
    });

    contentArea.appendChild(contentRow);
}

/**
 * Load more items for a section (pagination)
 */
function loadMoreItems(sectionId) {
    const profile = galleryData[currentProfile];
    const section = profile.sections.find(s => s.id === sectionId);
    
    if (!section) return;
    
    // Increment page
    sectionPaginationState[sectionId]++;
    
    // Get the scroll container
    const scrollContainer = document.querySelector(`.scroll-container[data-section-id="${sectionId}"]`);
    const navArrowLeft = document.querySelector(`.content-row[data-section-id="${sectionId}"] .nav-arrow-left`);
    const navArrowRight = document.querySelector(`.content-row[data-section-id="${sectionId}"] .nav-arrow-right`);
    if (!scrollContainer) return;
    
    // Get next batch of items
    const pageIndex = sectionPaginationState[sectionId];
    const startIndex = pageIndex * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToShow = section.items.slice(startIndex, endIndex);
    
    // Remove old items (to replace with new batch)
    scrollContainer.querySelectorAll('.gallery-item').forEach(item => item.remove());
    
    // Add new items with slide animation
    itemsToShow.forEach((item, itemIndex) => {
        const flatIndex = allItemsFlat.findIndex(i => 
            i.id === item.id && i.sectionId === section.id && i.title === item.title
        );

        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.setAttribute('data-section-id', sectionId);
        
        const isLastItem = itemIndex === itemsToShow.length - 1;
        const hasMoreItems = endIndex < section.items.length;
        
        galleryItem.innerHTML = `
            <div class="gallery-image-wrapper">
                <img src="${item.src}" alt="${item.title}">
                ${isLastItem && hasMoreItems ? '<div class="arrow-overlay">â†’</div>' : ''}
            </div>
            <div class="gallery-item-title">${item.title}</div>
        `;

        galleryItem.addEventListener('click', () => {
            // If last item and has more items, and clicking the arrow area - load more
            if (isLastItem && hasMoreItems) {
                loadMoreItems(sectionId);
            } else {
                // Otherwise open image viewer
                openImageViewer(flatIndex);
            }
        });

        scrollContainer.appendChild(galleryItem);
    });
    
    // Show navigation arrows if we've paginated (not on page 0)
    if (pageIndex > 0) {
        navArrowLeft.classList.remove('hidden');
        navArrowRight.classList.remove('hidden');
    }
    
    // Scroll to show new items smoothly
    setTimeout(() => {
        scrollContainer.scrollLeft = 0;  // Reset scroll to show from beginning
    }, 50);
}

/**
 * Scroll pagination left (previous batch)
 */
function scrollPaginationLeft(sectionId) {
    const profile = galleryData[currentProfile];
    const section = profile.sections.find(s => s.id === sectionId);
    
    if (!section) return;
    
    // Decrement page if not at first page
    if (sectionPaginationState[sectionId] > 0) {
        sectionPaginationState[sectionId]--;
        renderPaginationBatch(sectionId);
        
        // Hide arrows if we're back at page 0
        if (sectionPaginationState[sectionId] === 0) {
            const navArrowLeft = document.querySelector(`.content-row[data-section-id="${sectionId}"] .nav-arrow-left`);
            const navArrowRight = document.querySelector(`.content-row[data-section-id="${sectionId}"] .nav-arrow-right`);
            navArrowLeft.classList.add('hidden');
            navArrowRight.classList.add('hidden');
        }
    }
}

/**
 * Scroll pagination right (next batch)
 */
function scrollPaginationRight(sectionId) {
    const profile = galleryData[currentProfile];
    const section = profile.sections.find(s => s.id === sectionId);
    
    if (!section) return;
    
    // Increment page if there are more items
    const pageIndex = sectionPaginationState[sectionId];
    const endIndex = (pageIndex + 1) * itemsPerPage;
    
    if (endIndex < section.items.length) {
        sectionPaginationState[sectionId]++;
        renderPaginationBatch(sectionId);
    }
}

/**
 * Render a pagination batch of items
 */
function renderPaginationBatch(sectionId) {
    const profile = galleryData[currentProfile];
    const section = profile.sections.find(s => s.id === sectionId);
    
    if (!section) return;
    
    const scrollContainer = document.querySelector(`.scroll-container[data-section-id="${sectionId}"]`);
    if (!scrollContainer) return;
    
    // Get items for current page
    const pageIndex = sectionPaginationState[sectionId];
    const startIndex = pageIndex * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToShow = section.items.slice(startIndex, endIndex);
    
    // Clear and render new batch
    scrollContainer.innerHTML = '';
    
    itemsToShow.forEach((item, itemIndex) => {
        const flatIndex = allItemsFlat.findIndex(i => 
            i.id === item.id && i.sectionId === section.id && i.title === item.title
        );

        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.setAttribute('data-section-id', sectionId);
        
        const isLastItem = itemIndex === itemsToShow.length - 1;
        const hasMoreItems = endIndex < section.items.length;
        
        // Check if this is a redirect button item
        if (item.isRedirect) {
            galleryItem.innerHTML = `
                <div class="gallery-image-wrapper" style="display: flex; align-items: center; justify-content: center; background: rgba(229, 9, 20, 0.2); border: 2px solid #e50914; cursor: pointer;">
                    <button class="redirect-button" style="background: #e50914; color: white; border: none; padding: 20px 30px; font-size: 16px; font-weight: bold; border-radius: 4px; cursor: pointer; transition: all 0.3s ease;">
                        Click here to go to Gundu and Teddy section
                    </button>
                </div>
                <div class="gallery-item-title" style="text-align: center; margin-top: 10px;">Gundu and Teddy</div>
            `;
            
            galleryItem.addEventListener('click', () => {
                selectProfile(item.redirectProfile);
            });
        } else {
            galleryItem.innerHTML = `
                <div class="gallery-image-wrapper">
                    <img src="${item.src}" alt="${item.title}">
                    ${isLastItem && hasMoreItems ? '<div class="arrow-overlay">â†’</div>' : ''}
                </div>
                <div class="gallery-item-title">${item.title}</div>
            `;

            galleryItem.addEventListener('click', () => {
                // If last item and has more items - load more
                if (isLastItem && hasMoreItems) {
                    loadMoreItems(sectionId);
                } else {
                    // Otherwise open image viewer
                    openImageViewer(flatIndex);
                }
            });
        }

        scrollContainer.appendChild(galleryItem);
    });
}

/**
 * Scroll to a specific section
 */
function scrollToSection(sectionId) {
    const contentRow = document.querySelector(`.content-row[data-section-id="${sectionId}"]`);
    if (contentRow) {
        contentRow.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

/**
 * Open image viewer
 */
function openImageViewer(index) {
    currentViewerIndex = index;
    const item = allItemsFlat[index];
    currentViewerSectionId = item.sectionId;
    updateViewerImage();
    imageViewer.classList.remove('hidden');
    updateBodyOverflow();
}

/**
 * Update viewer image
 */
function updateViewerImage() {
    const item = allItemsFlat[currentViewerIndex];
    viewerImage.src = item.src;
    viewerCaption.textContent = item.title;
    viewerCounter.textContent = `${currentViewerIndex + 1} / ${allItemsFlat.length}`;
    // Update cinematic blurred background
    const bgBlur = document.getElementById('viewerBgBlur');
    if (bgBlur) bgBlur.style.backgroundImage = `url('${item.src}')`;
}

/**
 * Show next image
 */
function showNextImage() {
    if (currentViewerIndex < allItemsFlat.length - 1) {
        currentViewerIndex++;
        updateViewerImage();
    }
}

/**
 * Show previous image
 */
function showPrevImage() {
    if (currentViewerIndex > 0) {
        currentViewerIndex--;
        updateViewerImage();
    }
}

/**
 * Close image viewer
 */
function closeImageViewer() {
    imageViewer.classList.add('hidden');
    currentViewerIndex = -1;
    currentViewerSectionId = null;
    updateBodyOverflow();
}

/**
 * Folder Modal Functions
 */

/**
 * Manage body overflow based on open modals
 * Prevents scrollbar from appearing/disappearing which causes layout shift and flicker
 * Uses requestAnimationFrame to prevent layout thrashing
 */
function updateBodyOverflow() {
    requestAnimationFrame(() => {
        const hasOpenModals = 
            !imageViewer.classList.contains('hidden') ||
            !moreInfoModal.classList.contains('hidden') ||
            !fullscreenModal.classList.contains('hidden');
        
        if (hasOpenModals) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
}

/**
 * Switch between Date and Events views
 */
function switchView(view) {
    if (view === currentView) return; // Already on this view
    
    currentView = view;
    
    // Save view preference to localStorage
    saveSession();
    
    // Update button states
    viewToggleBtns.forEach(btn => {
        if (btn.getAttribute('data-view') === view) {
            btn.classList.add('view-btn-active');
        } else {
            btn.classList.remove('view-btn-active');
        }
    });
    
    // Reload profile with new view
    if (currentProfile) {
        loadProfile(currentProfile);
    }
}

/**
 * Back to profiles
 */
function backToProfiles() {
    mainContent.classList.add('hidden');
    profileScreen.classList.remove('hidden');
    profileScreen.style.animation = 'none';
    currentProfile = null;
    currentView = 'events';  // Reset to default view (EVENTS)
    allItemsFlat = [];
    currentViewerIndex = -1;
}

// ============================================
// INITIALIZE ON PAGE LOAD
// ============================================
window.addEventListener('load', () => {
    try {
        console.log('ðŸŽ¬ Premium Netflix-style Gallery loaded successfully!');
        console.log('ðŸ’¾ Checking for saved session in localStorage...');
        
        // Try to restore session from localStorage
        const sessionRestored = restoreSession();
        
        if (!sessionRestored) {
            // No valid session, show loading screen
            console.log('ðŸ‘¤ No session found - showing login screen');
            loadingScreen.classList.remove('hidden');
        }
    } catch (error) {
        console.error('âŒ Error during initialization:', error);
        loadingScreen.classList.remove('hidden');
    }
});

// Add logout functionality (optional - call clearSession() when user signs out)
function logout() {
    clearSession();
    location.reload();
}

// ============================================
// FULLSCREEN VIDEO FUNCTIONALITY
// ============================================
const fullscreenModal = document.getElementById('fullscreenModal');
const fullscreenVideo = document.getElementById('fullscreenVideo');
const fullscreenProgress = document.getElementById('fullscreenProgress');
const playPauseBtn = document.getElementById('playPauseBtn');
const fullscreenExitBtn = document.getElementById('fullscreenExitBtn');
const fullscreenBackBtn = document.getElementById('fullscreenBackBtn');
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');

function closeFullscreenVideo() {
    fullscreenModal.classList.add('hidden');
    fullscreenVideo.pause();
    fullscreenVideo.src = '';
    updateBodyOverflow();
}

// Open fullscreen video
function openFullscreenVideo() {
    fullscreenModal.classList.remove('hidden');
    fullscreenVideo.src = currentVideoSrc;
    fullscreenVideo.currentTime = 0;
    updateBodyOverflow();

    fullscreenVideo.play().catch(err => {
        console.log('Play error:', err);
    });

    setTimeout(() => {
        updatePlayPauseIcon();
        updateTimeDisplay();
    }, 100);
}

// Back button (top-left)
fullscreenBackBtn.addEventListener('click', closeFullscreenVideo);

// Exit fullscreen (bottom-right icon)
fullscreenExitBtn.addEventListener('click', closeFullscreenVideo);

// Play/Pause button in fullscreen
playPauseBtn.addEventListener('click', () => {
    if (fullscreenVideo.paused) {
        fullscreenVideo.play();
        updatePlayPauseIcon();
    } else {
        fullscreenVideo.pause();
        updatePlayPauseIcon();
    }
});

// Update play/pause icon
function updatePlayPauseIcon() {
    const playIcon = document.getElementById('playIcon');
    const pauseIcon1 = document.getElementById('pauseIcon-1');
    const pauseIcon2 = document.getElementById('pauseIcon-2');
    
    if (fullscreenVideo.paused) {
        playIcon.style.display = 'block';
        pauseIcon1.style.display = 'none';
        pauseIcon2.style.display = 'none';
    } else {
        playIcon.style.display = 'none';
        pauseIcon1.style.display = 'block';
        pauseIcon2.style.display = 'block';
    }
}

// Update fullscreen progress bar
fullscreenVideo.addEventListener('timeupdate', () => {
    const progress = (fullscreenVideo.currentTime / fullscreenVideo.duration) * 100;
    fullscreenProgress.value = progress || 0;
    updateTimeDisplay();
});

// Fullscreen progress bar input
fullscreenProgress.addEventListener('input', (e) => {
    const time = (e.target.value / 100) * fullscreenVideo.duration;
    fullscreenVideo.currentTime = time;
    fullscreenVideo.play().catch(err => {
        console.log('Play after seek not available');
    });
});

// Update time display
function updateTimeDisplay() {
    const current = formatTime(fullscreenVideo.currentTime);
    const duration = formatTime(fullscreenVideo.duration);
    currentTimeDisplay.textContent = current;
    durationDisplay.textContent = duration;
}

// Update duration display when video loads
function updateDurationDisplay() {
    fullscreenVideo.addEventListener('loadedmetadata', () => {
        durationDisplay.textContent = formatTime(fullscreenVideo.duration);
    }, { once: true });
}

// Format time to MM:SS
function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Update play/pause icon on video play/pause
fullscreenVideo.addEventListener('play', updatePlayPauseIcon);
fullscreenVideo.addEventListener('pause', updatePlayPauseIcon);

// Also update duration when metadata loads
fullscreenVideo.addEventListener('loadedmetadata', () => {
    durationDisplay.textContent = formatTime(fullscreenVideo.duration);
});

// Close fullscreen with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !fullscreenModal.classList.contains('hidden')) {
        closeFullscreenVideo();
    }
});


// ============================================
// âœ¦ FUTURISTIC ENHANCEMENTS
// ============================================

// --- Cursor Spotlight ---
const cursorSpotlight = document.getElementById('cursorSpotlight');
let rafPending = false;
document.addEventListener('mousemove', (e) => {
    if (!rafPending) {
        rafPending = true;
        requestAnimationFrame(() => {
            cursorSpotlight.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;
            rafPending = false;
        });
    }
});

// --- Vanilla Tilt â€” 3D card effect ---
function initTiltOnElement(el) {
    if (typeof VanillaTilt === 'undefined' || !el || el._tiltInitialized) return;
    VanillaTilt.init(el, {
        max: 7,
        speed: 450,
        glare: true,
        'max-glare': 0.10,
        perspective: 1000,
        scale: 1.03,
        gyroscope: false,
        easing: 'cubic-bezier(.03,.98,.52,.99)',
    });
    el._tiltInitialized = true;
}

// Watch contentArea for new .gallery-item nodes and apply tilt
if (typeof contentArea !== 'undefined' && contentArea) {
    const tiltObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType !== 1) return;
                if (node.classList && node.classList.contains('gallery-item')) {
                    initTiltOnElement(node);
                }
                if (node.querySelectorAll) {
                    node.querySelectorAll('.gallery-item').forEach(initTiltOnElement);
                }
            });
        });
    });
    tiltObserver.observe(contentArea, { childList: true, subtree: true });
}

// --- GSAP Scroll Reveal ---
function initGSAPScrollReveal() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    // Kill previous triggers before re-init
    ScrollTrigger.getAll().forEach((st) => st.kill());

    // Batch layout measurements to avoid thrashing
    requestAnimationFrame(() => {
        const rows = gsap.utils.toArray('.content-row');
        const visibilityMap = [];
        
        // Single pass: measure all at once
        rows.forEach((row) => {
            const rect = row.getBoundingClientRect();
            visibilityMap.push(rect.top < window.innerHeight);
        });

        // Second pass: apply animations without forcing reflow
        rows.forEach((row, index) => {
            const alreadyVisible = visibilityMap[index];
            if (alreadyVisible) {
                // Already in view on load â€” animate in immediately
                gsap.fromTo(row, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' });
            } else {
                gsap.fromTo(
                    row,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.75,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: row,
                            start: 'top 92%',
                            toggleActions: 'play none none none',
                        },
                    }
                );
            }
        });
        
        ScrollTrigger.refresh();
    });
}

// Re-run GSAP + tilt whenever content area is rebuilt
if (typeof contentArea !== 'undefined' && contentArea) {
    let _gsapRebuildTimer = null;
    const gsapRebuildObserver = new MutationObserver(() => {
        clearTimeout(_gsapRebuildTimer);
        _gsapRebuildTimer = setTimeout(() => {
            initGSAPScrollReveal();
            document.querySelectorAll('.gallery-item').forEach(initTiltOnElement);
        }, 120);
    });
    gsapRebuildObserver.observe(contentArea, { childList: true });
}

