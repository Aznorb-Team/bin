<template>
    <section class="info">
        <div class="container">
            <div class="info__wrapper">
                <div class="info___item">
                    <span class="info__text">1) Укажи необходимый адрес точки</span>
                </div>
                <div class="info___item info___item_icon">
                    <svg viewBox="0 0 141 12" class="info__icon">
                        <use xlink:href="#arrow"></use>
                    </svg>
                </div>
                <div class="info___item">
                    <span class="info__text">2) Установи нужный фильтр</span>
                </div>
                <div class="info___item info___item_icon">
                    <svg viewBox="0 0 141 12" class="info__icon">
                        <use xlink:href="#arrow"></use>
                    </svg>
                </div>
                <div class="info___item">
                    <span class="info__text">3) Получи готовую таблицу конкурентов</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style >
.info {
    margin: 27px 0;
}

.info__wrapper {
    height: 131px;
    border-radius: 9px;
    background: rgba(255, 255, 255, 0.2);
    padding: 0 80px;

    display: flex;
    justify-content: space-between;
    align-items: center;
}

.info___item {
    width: 277px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.info___item_icon {
    width: 141px
}

.info__text {
    color: #FFF;

    font-family: "Open Sans";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
}
</style>