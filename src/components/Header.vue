<template>
    <header class="header">
        <div class="container">
            <div class="header__wrapper">
                <div class="header__logo">
                    <div class="header__image">
                        <svg class="header__image-logo" viewBox="0 0 108 41">
                            <use xlink:href="#logoBIN"></use>
                        </svg>
                    </div>
                </div>
                <nav class="header__nav">
                    <ul class="header__list">
                        <li class="header__item">
                            <a href="Инструкция.docx" class="header__link">Инструкция</a>
                        </li>
                        <li class="header__item">
                            <a href="#supports" class="header__link">Поддержка</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    emits: ['scroll'],
    methods: {}

}
</script>

<style>
.header {
    margin-top: 16px;
}

.header__wrapper {
    border-radius: 9px;
    background: rgba(255, 255, 255, 0.2);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    padding: 14px 60px;

}

.header__logo {
    width: 108px;
    height: 41px;
}

.header__list {
    display: flex;
    justify-content: center;
    gap: 24px;
}

.header__item {}

.header__link {
    color: #FFF;

    font-family: "Open Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
}

</style>