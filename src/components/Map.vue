<template>
    <section id="map">
        <notifications :width="350" classes="my-notification"/>
        <div class="filter">
            <div class="filter__wrapper">
                <div class="filter__logo">
                    <span class="filter__title">Фильтр</span>
                    
                </div>
                <div class="filter__main">
                    <div class="filter__radius">
                        <span class="filter__radious-title">
                            Радиус
                        </span>

                        <div class="filter__radius-item">
                            <input type="radio" id="stometrov" class="filter__radio" name="radius" value="100"
                                v-model="radius" checked />
                            <label for="stometrov">100 метров</label>
                        </div>

                        <div class="filter__radius-item">
                            <input type="radio" id="tristometrov" class="filter__radio" name="radius" v-model="radius"
                                value="300" />
                            <label for="tristometrov">300 метров</label>
                        </div>

                        <div class="filter__radius-item">
                            <input type="radio" id="fivemetrov" class="filter__radio" name="radius" v-model="radius"
                                value="500" />
                            <label for="fivemetrov">500 метров</label>
                        </div>

                        <div class="filter__radius-item">
                            <input type="radio" id="onekm" class="filter__radio" name="radius" v-model="radius"
                                value="1000" />
                            <label for="onekm">1000 метров</label>
                        </div>
                    </div>
                    <div class="filter__show">
                        <span class="filter__show-title">
                            Отображать только
                        </span>
                        <div class="filter__show-wrap">
                            <div class="filter__show-item">
                                <input type="checkbox" class="checkbox" id="nash" name="nash" value="Наш"
                                    v-model="checkShops" />
                                <label for="nash">Наш</label>
                            </div>

                            <div class="filter__show-item">
                                <input type="checkbox" class="checkbox" id="sreda" name="sreda" value="Среда"
                                    v-model="checkShops" />
                                <label for="sreda">Среда</label>
                            </div>
                            <div class="filter__show-item">
                                <input type="checkbox" class="checkbox" id="nikol" name="nikol" value="Николаевский"
                                    v-model="checkShops" />
                                <label for="nikol">Николаевский</label>
                            </div>
                        </div>
                        <div class="filter__show-wrap">
                            <div class="filter__show-item">
                                <input type="checkbox" class="checkbox" id="titan" name="titan" value="Титан"
                                    v-model="checkShops" />
                                <label for="titan">Титан</label>
                            </div>
                            <div class="filter__show-item">
                                <input type="checkbox" class="checkbox" id="absolut" name="absolut" value="Абсолют"
                                    v-model="checkShops" />
                                <label for="absolut">Абсолют</label>
                            </div>

                            <div class="filter__show-item">
                                <input type="checkbox" class="checkbox" id="redandwhite" name="redandwhite"
                                    value="КрасноеБелое" v-model="checkShops" />
                                <label for="redandwhite">Красное&Белое</label>
                            </div>
                            <div class="filter__show-item">
                                <input type="checkbox" class="checkbox" id="bristol" name="bristol" value="Бристоль"
                                    v-model="checkShops" />
                                <label for="bristol">Бристоль</label>
                            </div>
                            <div class="filter__show-item">
                                <input type="checkbox" class="checkbox" id="mayak" name="mayak" value="Маяк"
                                    v-model="checkShops" />
                                <label for="mayak">Маяк</label>
                            </div>
                            <div class="filter__show-item">
                                <input type="checkbox" class="checkbox" id="svetofor" name="svetofor" value="Светофор"
                                    v-model="checkShops" />
                                <label for="svetofor">Светофор</label>
                            </div>
                            <div class="filter__show-item">
                                <input type="checkbox" class="checkbox" id="baris" name="baris" value="Барис"
                                    v-model="checkShops" />
                                <label for="baris">Барис</label>
                            </div>
                            <div class="filter__show-item">
                                <input type="checkbox" class="checkbox" id="liberti" name="liberti" value="Либерти"
                                    v-model="checkShops" />
                                <label for="liberti">Либерти</label>
                            </div>
                            <div class="filter__show-item">
                                <input type="checkbox" class="checkbox" id="belorechie" name="belorechie" value="Белоречье"
                                    v-model="checkShops" />
                                <label for="belorechie">Белоречье</label>
                            </div>
                            <div class="filter__show-item">
                                <input type="checkbox" class="checkbox" id="yanta" name="yanta" value="Янта"
                                    v-model="checkShops" />
                                <label for="yanta">Янта</label>
                            </div>
                            <div class="filter__show-item">
                                <input type="checkbox" class="checkbox" id="bhp" name="bhp" value="Бурятхлебпром"
                                    v-model="checkShops" />
                                <label for="bhp">Бурятхлебпром</label>
                            </div>
                        </div>
                    </div>
                    <div class="filter__btn-wrap">
                        <button class="filter__btn" id="accept_filter_input" @click="accepsFilter">Применить</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="download" v-show="downloadButton">
            <button class="download__btn" type="button" id="download_excel_button" @click="downloadExcel"
                value="Скачать Excel">
                <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M15,3.41421356 L15,7 L18.5857864,7 L15,3.41421356 Z M19,9 L15,9 C13.8954305,9 13,8.1045695 13,7 L13,3 L5,3 L5,21 L19,21 L19,9 Z M5,1 L15.4142136,1 L21,6.58578644 L21,21 C21,22.1045695 20.1045695,23 19,23 L5,23 C3.8954305,23 3,22.1045695 3,21 L3,3 C3,1.8954305 3.8954305,1 5,1 Z M11,14.5857864 L11,10 L13,10 L13,14.5857864 L14.2928932,13.2928932 L15.7071068,14.7071068 L12,18.4142136 L8.29289322,14.7071068 L9.70710678,13.2928932 L11,14.5857864 Z"
                        fill-rule="evenodd" />
                </svg>
            </button>
        </div>
        <div class="search">
            <div class="search__wrap-img">
                <img class="search__image" src="\assets\LogoSearch.png" alt="SearchLogo">
            </div>
            <input @keyup.enter="searchAdressFunction()" placeholder="Введите текст" type="text" name="search" id="search"
                v-model="adress" class="search__input">
            <button type="button" @click="searchAdressFunction" class="search__btn">
                <svg class="search__icon" viewBox="0 0 28 27" fill="none">
                    <path
                        d="M18.8398 15.7148C19.6602 14.4703 20.1414 12.9938 20.1414 11.4064C20.1414 6.97148 16.4172 3.375 11.8234 3.375C7.22422 3.375 3.5 6.97148 3.5 11.4064C3.5 15.8414 7.22422 19.4379 11.818 19.4379C13.4859 19.4379 15.0391 18.9633 16.3406 18.1512L16.718 17.898L22.657 23.625L24.5 21.8162L18.5664 16.0893L18.8398 15.7148ZM16.4828 6.91875C17.7242 8.11582 18.4078 9.7084 18.4078 11.4012C18.4078 13.0939 17.7242 14.6865 16.4828 15.8836C15.2414 17.0807 13.5898 17.7398 11.8344 17.7398C10.0789 17.7398 8.42734 17.0807 7.18594 15.8836C5.94453 14.6865 5.26094 13.0939 5.26094 11.4012C5.26094 9.7084 5.94453 8.11582 7.18594 6.91875C8.42734 5.72168 10.0789 5.0625 11.8344 5.0625C13.5898 5.0625 15.2414 5.72168 16.4828 6.91875Z" />
                </svg>
            </button>
        </div>
    </section>
</template>
<style>

.my-notification .notification-title {
    /* text-align: center; */
}

.my-notification .notification-content {
    /* text-align: center; */
}

.my-notification {
    margin: 0 5px 5px;
    padding: 10px;
    font-size: 12px;
    color: #ffffff;

    margin: 35px;
    margin-bottom: 0px;

    font-family: "Open Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;

    background: #44a4fc;
    border: 1px solid #187fe7;
    border-radius: 10px;

    

    &.success {
    background: #68cd86;
    border-color: #42a85f;
    }

    &.warn {
    background: #ffb648;
    border-color: #f48a06;
    }

    &.error {
    background: #e54d42;
    border-color: #b82e24;
    }
}

#map {
    width: 100%;
    height: 700px;
    border-radius: 9px;
    border: 3px solid #fff;
    position: relative;
}

.download {
    width: 50px;
    height: 50px;
    z-index: 1;
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #FFF;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.download__btn {
    width: 30px;
    height: 30px;
}

.filter {
    width: 320px;
    height: 100%;
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fff;
    padding: 19px 16px;
}

.filter__wrapper {
    width: 100%;
    height: 100%;
}

.filter__logo {
    width: 220px;
    height: 28px;
    margin-left: 12px;
    margin-bottom: 16px;
}

.filter__title {
    color: #000;
    font-family: "Open Sans";
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.filter__main {
    height: 610px;
    border-radius: 4px;
    background: linear-gradient(180deg, #A7CEA7 0%, rgba(227, 7, 19, 0.51) 100%);
    padding: 15px;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
}

.filter__radius {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.filter__radious-title {
    display: block;
    margin-bottom: 10px;
    color: #FFF;
    font-family: "Open Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
}

.filter__radius-item {
    color: #FFF;
    font-family: "Open Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
}

.filter__show {
    /* margin-top: 27px; */
}

.filter__show-title {
    color: #FFF;

    font-family: "Open Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;


    display: block;
    margin-bottom: 10px;
}

.filter__show-wrap+.filter__show-wrap {
    margin-top: 16px;
}

.filter__show-item {
    color: #FFF;
    font-family: "Open Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.filter__btn-wrap {
    width: 100%;
    height: 100%;
    display: grid;
    justify-content: center;
    align-items: center;

}

.filter__btn {
    width: 254px;
    height: 40px;
    background-color: #FFF;
    border-radius: 4px;




    color: #000;
    font-family: "Open Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.filter__btn:hover {
    background-color: #D9262A;
    transition: 0.4s linear;
    color: #FFF;
}

.search {
    color: #A5A5A5;
    font-family: "Open Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    height: 35px;
    position: absolute;
    z-index: 1;
    top: 17px;
    left: 540px;
    padding: 0 15px;

    border-radius: 4px;
    border: 1px solid #A5A5A5;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    display: flex;
    align-items: center;
}

.search__wrap-img {
    width: 30px;
    height: 25px;
}

.search__image {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.search__input {
    width: 450px;
    height: 35px;
    color: #000;
    font-family: "Open Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.search__btn {
    width: 30px;
    height: 100%;
}

.search__icon {
    width: 100%;
    height: 100%;
    fill: rgba(0, 0, 0, 0.7);
}



.checkbox,
.filter__radio {
    position: absolute;
    z-index: -1;
    opacity: 0;
}

.checkbox+label {
    display: inline-flex;
    align-items: center;
    user-select: none;
    gap: 10px;
}

.filter__radio+label {
    display: inline-flex;
    align-items: center;
    user-select: none;
    gap: 10px;
}

.filter__radio+label::before {
    content: '';
    display: inline-block;
    width: 1em;
    height: 1em;
    background-color: #FFF;
    border-radius: 100%;
}

.filter__radio:checked+label::before {
    background-color: #AAC4A0;
    border: 1px solid #FFF;
}

.checkbox+label::before {
    content: '';
    display: inline-block;
    width: 1em;
    height: 1em;
    background-color: #FFF;
}

.checkbox:checked+label::before {
    background-color: #AAC4A0;
    border: 1px solid #FFF;
}
</style>
    
<script>

import * as XLSX from "xlsx";
import { notify } from "@kyvg/vue3-notification";

export default {
    data() {
        return {
            radius: 100,
            adress: "",
            checkShops: [],
            objects: null,
            excelShops: [],
            downloadButton: false,
        };
    },
    mounted() {
        this.initMap();
    },
    methods: {
        initMap() {
            ymaps.ready(() => {
                window.myMap = new ymaps.Map("map", {
                    center: [51.834809, 107.584547],
                    zoom: 12
                });

                window.nashCollection = new ymaps.GeoObjectCollection(null, {
                    preset: 'islands#blueDotIcon'
                });
                window.sredaCollection = new ymaps.GeoObjectCollection(null, {
                    preset: 'islands#redDotIcon'
                });
                window.nikolCollection = new ymaps.GeoObjectCollection(null, {
                    preset: 'islands#darkOrangeDotIcon'
                });
                window.titanCollection = new ymaps.GeoObjectCollection(null, {
                    preset: 'islands#nightDotIcon'
                });
                window.ablosutCollection = new ymaps.GeoObjectCollection(null, {
                    preset: 'islands#darkBlueDotIcon'
                });
                window.krasnoebeloeCollection = new ymaps.GeoObjectCollection(null, {
                    preset: 'islands#pinkDotIcon'
                });
                window.bristolCollection = new ymaps.GeoObjectCollection(null, {
                    preset: 'islands#brownDotIcon'
                });
                window.mayakCollection = new ymaps.GeoObjectCollection(null, {
                    preset: 'islands#darkGreenDotIcon'
                });
                window.svetoforCollection = new ymaps.GeoObjectCollection(null, {
                    preset: 'islands#oliveDotIcon'
                });
                window.barisCollection = new ymaps.GeoObjectCollection(null, {
                    preset: 'islands#blackDotIcon'
                });
                window.libertiCollection = new ymaps.GeoObjectCollection(null, {
                    preset: 'islands#yellowDotIcon'
                });
                window.belorechieCollection = new ymaps.GeoObjectCollection(null, {
                    preset: 'islands#greenDotIcon'
                });
                window.yantaCollection = new ymaps.GeoObjectCollection(null, {
                    preset: 'islands#orangeDotIcon'
                });
                window.bhpCollection = new ymaps.GeoObjectCollection(null, {
                    preset: 'islands#lightBlueDotIcon'
                });
                fetch('shops.json')
                    .then(response => response.json())
                    .then(data => {


                        window.shops = data.features;

                        window.shops.forEach(shop => {

                            const placemark = new ymaps.Placemark([shop.geometry.coordinates[1], shop.geometry.coordinates[0]], {
                                iconCaption: shop.properties.name,
                                hintContent: shop.properties.CompanyMetaData.address,
                                balloonContentHeader: shop.properties.name,
                                balloonContentBody: shop.properties.name,
                                balloonContentFooter: shop.geometry.coordinates[1] + "; " + shop.geometry.coordinates[0],
                            });

                            switch (shop.properties.name) {
                                case "Наш":
                                    window.nashCollection.add(placemark);
                                    break;
                                case "Среда":
                                    window.sredaCollection.add(placemark);
                                    break;
                                case "Николаевский":
                                    window.nikolCollection.add(placemark);
                                    break;
                                case "Титан":
                                    window.titanCollection.add(placemark);
                                    break;
                                case "Абсолют":
                                    window.ablosutCollection.add(placemark);
                                    break;
                                case "КрасноеБелое":
                                    window.krasnoebeloeCollection.add(placemark);
                                    break;
                                case "Бристоль":
                                    window.bristolCollection.add(placemark);
                                    break;
                                case "Маяк":
                                    window.mayakCollection.add(placemark);
                                    break;
                                case "Светофор":
                                    window.svetoforCollection.add(placemark);
                                    break;
                                case "Барис":
                                    window.barisCollection.add(placemark);
                                    break;
                                case "Либерти":
                                    window.libertiCollection.add(placemark);
                                    break;
                                case "Белоречье":
                                    window.belorechieCollection.add(placemark);
                                    break;
                                case "Янта":
                                    window.yantaCollection.add(placemark);
                                    break;
                                case "Бурятхлебпром":
                                    window.bhpCollection.add(placemark);
                                    break;
                            }

                        });
                    })
                    .catch(error => {
                    });

                // window.myMap.geoObjects.add(window.nashCollection);
                // window.myMap.geoObjects.add(window.sredaCollection);
                // window.myMap.geoObjects.add(window.nikolCollection);
                // window.myMap.geoObjects.add(window.titanCollection);
                // window.myMap.geoObjects.add(window.ablosutCollection);
                // window.myMap.geoObjects.add(window.krasnoebeloeCollection);
                // window.myMap.geoObjects.add(window.bristolCollection);

                window.myMap.controls.remove('trafficControl');
                window.myMap.controls.remove('fullscreenControl');
                window.myMap.controls.remove('geolocationControl');
                window.myMap.controls.remove('listBox');
                window.myMap.controls.remove('listBoxItem');
                window.myMap.controls.remove('manager');
                window.myMap.controls.remove('routeButton');
                window.myMap.controls.remove('routeEditor');
                window.myMap.controls.remove('rulerControl');
                window.myMap.controls.remove('searchControl');
                window.myMap.controls.remove('storage');
                window.myMap.controls.remove('typeSelector');
                window.myMap.controls.remove('zoomControl');

            });
        },
        getDistanceBetweenPoints(point1, point2) {
            const R = 6378137;
            const dLat = this.degreesToRadians(point2[0] - point1[0]);
            const dLon = this.degreesToRadians(point2[1] - point1[1]);
            const a =
                Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(this.degreesToRadians(point1[0])) * Math.cos(this.degreesToRadians(point2[0])) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            return R * c;
        },

        degreesToRadians(degrees) {
            return degrees * (Math.PI / 180);
        },
        drawCircle(coordinates) {
            this.downloadButton = true;
            if (this.radiusObject != null) {
                window.myMap.geoObjects.remove(this.radiusObject);
                if (window.violetCollection != null)
                    window.myMap.geoObjects.remove(window.violetCollection);
            }
            this.radiusObject = new ymaps.Circle([coordinates, this.radius], {}, { fillOpacity: 1 });

            window.myMap.geoObjects.add(this.radiusObject);
            window.violetCollection = new ymaps.GeoObjectCollection(null, {
                preset: 'islands#violetDotIcon'
            })
            this.excelShops = [];
            this.excelShops.push({
                            name: "Указанный адрес: ",
                            address: this.adress,
                            coordinates: window.globalCoordinates[0] + ";" + window.globalCoordinates[1],
                        });

            window.shops.forEach(shop => {
                if (this.radiusObject.geometry.contains([shop.geometry.coordinates[1], shop.geometry.coordinates[0]])) {
                    if (this.checkShops.indexOf(shop.properties.name) != -1) {

                        const placemark = new ymaps.Placemark([shop.geometry.coordinates[1], shop.geometry.coordinates[0]], {
                            iconCaption: shop.properties.name,
                            hintContent: shop.properties.CompanyMetaData.address,
                            balloonContentHeader: shop.properties.name,
                            balloonContentBody: shop.properties.name,
                            balloonContentFooter: shop.geometry.coordinates[1] + "; " + shop.geometry.coordinates[0],
                        });
                        window.violetCollection.add(placemark);

                        this.excelShops.push({
                            name: shop.properties.name,
                            address: shop.properties.CompanyMetaData.address,
                            coordinates: shop.geometry.coordinates[1] + ";" + shop.geometry.coordinates[0],
                        });
                    }
                }
            });
            window.myMap.geoObjects.add(window.violetCollection);
        },
        searchAdressFunction() {
            if (this.radiusObject != null) {
                window.myMap.geoObjects.remove(this.radiusObject);
                if (window.violetCollection != null)
                    window.myMap.geoObjects.remove(window.violetCollection);
            }
            this.radius = 100;
            var myGeocoder = ymaps.geocode(this.adress);
            if (window.globalPlacemark != null)
                window.myMap.geoObjects.remove(window.globalPlacemark);
            myGeocoder.then(
                function (res) {
                    if(res.geoObjects.get(0) == null)
                            notify({ type: "error",title: 'Ошибка', text: 'Вы ввели не верный адрес!' });
                        else
                            notify({ type: "success",title: 'Удачно', text: 'Ваш адрес отображен на карте!' });
                    var firstGeoObject = res.geoObjects.get(0),
                        // Координаты геообъекта.
                        coords = firstGeoObject.geometry.getCoordinates(),
                        // Область видимости геообъекта.
                        bounds = firstGeoObject.properties.get('boundedBy');

                    firstGeoObject.options.set('preset', 'islands#darkBlueDotIconWithCaption');
                    // Получаем строку с адресом и выводим в иконке геообъекта.
                    firstGeoObject.properties.set('iconCaption', firstGeoObject.getAddressLine());
                    // console.log(firstGeoObject.geometry._coordinates);
                    // Добавляем первый найденный геообъект на карту.
                    //newCenter =
                    // Масштабируем карту на область видимости геообъекта.
                    window.myMap.setBounds(bounds, {
                        // Проверяем наличие тайлов на данном масштабе.
                        checkZoomRange: true
                    });
                    window.newCenter = firstGeoObject.geometry._coordinates;
                    //drawCircle(firstGeoObject.geometry._coordinates);

                    const placemark = new ymaps.Placemark(firstGeoObject.geometry._coordinates, {
                        hintContent: "Ваша точка",
                        balloonContent: "Ваша точка"
                    }, {
                        iconLayout: 'default#image',
                        // Своё изображение иконки метки.
                        iconImageHref: 'metka.png',
                        iconImageSize: [42, 42],
                        iconImageOffset: [-21, -42]
                    });


                    window.globalPlacemark = placemark;
                    window.myMap.geoObjects.add(window.globalPlacemark);
                    window.globalId = window.myMap.geoObjects.getLength() - 1;
                    window.globalCoordinates = firstGeoObject.geometry._coordinates;

                },
                function (err) {

                    if(err.message != "scriptError")
                        notify({ type: "error",title: 'Ошибка', text: 'Ошибка сервера! Обратитесь в тех. поддержку!' });
                    else
                        notify({ type: "warn",title: 'Предупреждение', text: 'Вы ничего не ввели!' });
                }
            );
        },
        accepsFilter() {
            // this.downloadButton = true;
            console.log(this.excelShops);
            this.setFilters();
            if (window.globalCoordinates != null) {
                var geoObject = window.myMap.geoObjects.get(window.globalId);
                this.drawCircle(window.globalCoordinates);
                notify({ type: "success",title: 'Таблица', text: 'Таблица с результатами сформирована!' });
                // console.log(window.violetCollection);

            }
        },
        setFilters() {
            if (this.checkShops.indexOf("Наш") != -1)
                window.myMap.geoObjects.add(window.nashCollection);
            else
                window.myMap.geoObjects.remove(window.nashCollection);

            if (this.checkShops.indexOf("Среда") != -1)
                window.myMap.geoObjects.add(window.sredaCollection);
            else
                window.myMap.geoObjects.remove(window.sredaCollection);

            if (this.checkShops.indexOf("Николаевский") != -1)
                window.myMap.geoObjects.add(window.nikolCollection);
            else
                window.myMap.geoObjects.remove(window.nikolCollection);

            if (this.checkShops.indexOf("Титан") != -1)
                window.myMap.geoObjects.add(window.titanCollection);
            else
                window.myMap.geoObjects.remove(window.titanCollection);

            if (this.checkShops.indexOf("Абсолют") != -1)
                window.myMap.geoObjects.add(window.ablosutCollection);
            else
                window.myMap.geoObjects.remove(window.ablosutCollection);

            if (this.checkShops.indexOf("КрасноеБелое") != -1)
                window.myMap.geoObjects.add(window.krasnoebeloeCollection);
            else
                window.myMap.geoObjects.remove(window.krasnoebeloeCollection);

            if (this.checkShops.indexOf("Бристоль") != -1)
                window.myMap.geoObjects.add(window.bristolCollection);
            else
                window.myMap.geoObjects.remove(window.bristolCollection);
            
            if (this.checkShops.indexOf("Маяк") != -1)
                window.myMap.geoObjects.add(window.mayakCollection);
            else
                window.myMap.geoObjects.remove(window.mayakCollection);

            if (this.checkShops.indexOf("Светофор") != -1)
                window.myMap.geoObjects.add(window.svetoforCollection);
            else
                window.myMap.geoObjects.remove(window.svetoforCollection);

            if (this.checkShops.indexOf("Барис") != -1)
                window.myMap.geoObjects.add(window.barisCollection);
            else
                window.myMap.geoObjects.remove(window.barisCollection);

            if (this.checkShops.indexOf("Либерти") != -1)
                window.myMap.geoObjects.add(window.libertiCollection);
            else
                window.myMap.geoObjects.remove(window.libertiCollection);

            if (this.checkShops.indexOf("Белоречье") != -1)
                window.myMap.geoObjects.add(window.belorechieCollection);
            else
                window.myMap.geoObjects.remove(window.belorechieCollection);

            if (this.checkShops.indexOf("Янта") != -1)
                window.myMap.geoObjects.add(window.yantaCollection);
            else
                window.myMap.geoObjects.remove(window.yantaCollection);

            if (this.checkShops.indexOf("Бурятхлебпром") != -1)
                window.myMap.geoObjects.add(window.bhpCollection);
            else
                window.myMap.geoObjects.remove(window.bhpCollection);
        },
        downloadExcel() {
            const ws = XLSX.utils.json_to_sheet(this.excelShops);
            const wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, this.adress);
            XLSX.writeFile(wb, this.adress + '.xlsx');
            
        }

    }
};
</script>
