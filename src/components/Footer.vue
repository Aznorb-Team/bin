<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__wrapper">
                <div class="footer__navigative">
                    <div class="footer__logo">
                        <div class="footer__image">
                            <svg class="footer__image-logo" viewBox="0 0 108 41">
                                <use xlink:href="#logoBINFooter"></use>
                            </svg>
                        </div>
                    </div>
                    <nav class="footer__nav">
                        <ul class="footer__list">
                            <div id="supports">
                                <p class="footer__item footer__title">Поддержка</p>
                                <div>
                                    <p class="footer__item footer__title">Битрикс:</p>
                                    <p class="footer__link">Сергей Дмитриевич Павлов</p>
                                    <p class="footer__link">Цырендоржо Лопсонович Майдарханов</p>
                                    <p class="footer__link">Денис Буладович Шагдуров</p>
                                </div>
                            </div>
                        </ul>
                    </nav>
                </div>
                <!-- <div class="footer__social">
                    <div class="footer__social-wrap">
                        <div class="foote__social-text">
                            <span class="footer__text">Вступи в наш</span>
                        </div>
                        <div class="footer__socail-image">
                            <a href="#">
                                <svg class="footer__icon-telegram" viewBox="0 0 25 27">
                                    <use xlink:href="#telegram"></use>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div> -->
            </div>
            <div class="footer__line"></div>
            <div class="footer__copyright">
                <div class="footer__copyright-wrap">
                    <span class="footer__coyright-text">Copyright ©  2010-2024</span>
                </div>
                <div class="footer__copyright-wrap">
                    <span class="footer__coyright-text">ГК БИН Все права
                        защищены.</span>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>
<style>
.footer {
    width: 100%;
    background: rgba(255, 255, 255, 0.2);
    border-top-right-radius: 9px;
    border-top-left-radius: 9px;
    position: absolute;
    bottom: 0;
}

.footer__wrapper {
    height: 200px;

    display: grid;
    padding-top: 15px;
    /* grid-template-columns: repeat(2, 1fr); */
    /* align-items: center; */
    gap: 126px;

}

.footer__navigative {
    /* width: 510px; */
    height: 41px;
    display: flex;
    align-items: center;
    gap: 32px;
    margin-left: 55px;
}



.footer__image {
    width: 108px;
    height: 41px;
}

.footer__image-logo {
    width: 100%;
}

.footer__nav {
    width: 633px;
    height: 23px;

}

.footer__list {
    display: flex;
    gap: 18px;
    align-items: center;

}
.supports{
    width: 100%;
    display: inline-block;
}

.footer__item {}

.footer__link {
    display: block;
    height: 25px;
    color: #FFF;
    font-family: "Open Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    margin-top: 5px;
    margin-left: 25px;
}
.footer__title{
    display: block;
    height: 25px;
    color: #FFF;
    font-family: "Open Sans";
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    margin: 5px;
}

.footer__social {
    width: 100px;
}

.footer__social {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

}

.footer__social-wrap {
    width: 225px;
    height: 45px;
    margin-left: 355px;

    display: flex;
    align-items: center;
    gap: 26px;
}

.foote__social-text {
    width: 100%;
}

.footer__text {
    color: #FFF;
    font-family: "Open Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.footer__socail-image {
    border: 1px solid #fff;
    border-radius: 50px;
    padding: 9px 12px 5px 8px;

}

.footer__icon-telegram {
    display: block;
    width: 70px;
    height: 50px;
    fill: #fff;
}

.footer__line {
    height: 1px;
    background: rgba(255, 255, 255, 0.45);
}

.footer__copyright {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 23px 67px;
}

.footer__copyright-wrap {
    max-width: 234px;
    height: 23px;
}

.footer__coyright-text {
    color: #FFF;
    text-align: center;
    font-family: "Open Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
</style>