<template>
    <div id="mySidenav" class="sidenav">
        <span class="closebtn" @click="handlerCloseBasketPanel">&times;</span>
        <ul v-for="(item, index) in BASKET" :key="index">
            <li>{{item}}</li>
        </ul>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    data() {
        return {
        }
    },
    computed: mapGetters(["BASKET"]),
    methods: {
        handlerCloseBasketPanel() {
            this.$emit('closeBasketPanel')
        }
    },
}
</script>


<style scoped>
/* Боковое навигационное меню */
.sidenav {
    height: 100%; /* 100% Full-height */
    width: 0; /* 0 ширина - изменить это с помощью JavaScript */
    position: fixed; /* Оставайтесь на месте */
    z-index: 1; /* Оставайтесь сверху */
    top: 0; /* Оставайтесь наверху */
    right: 0;
    overflow-x: hidden; /* Отключить горизонтальную прокрутку */
    padding-top: 60px; /* Поместите контент в 60px сверху */
    transition: 0.5s; /* 0.5 второй эффект перехода слайда в боковой навигации */
    background: #FFFFFF;
    box-shadow: -4px 0px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px 0px 0px 8px;
}

/* Ссылки меню навигации */
.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

/* Когда вы наводите курсор мыши на навигационные ссылки, изменяется их цвет */
.sidenav a:hover {
  color: #f1f1f1;
}

/* Положение и стиль кнопки закрытия (верхний правый угол) */
.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
  cursor: pointer;
}

/* Стиль содержимого страницы - используйте это, если вы хотите сдвинуть содержимое страницы вправо при открытии боковой навигации */
#main {
  transition: margin-left .5s;
  padding: 20px;
}

/* На экранах меньшего размера, где высота меньше 450px, измените стиль sidenav (меньше отступов и меньший размер шрифта) */
@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>