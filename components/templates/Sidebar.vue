<template>
    <div class="row">
        <div class="col-12">
            <h1>Каталог</h1>
            <ul class="sidebar-title-list mt-20">
                <li class="pb-15"><NuxtLink to="/catalog/backpack" class="menu-item">Рюкзаки</NuxtLink></li>
                <li class="pb-15"><NuxtLink to="/catalog/tshirt" class="menu-item">Футболки</NuxtLink></li>
                <li><NuxtLink to="/catalog/shirt" class="menu-item">Рубашки</NuxtLink></li>
            </ul>
        </div>
    </div>
</template>



<style>
.menu-item {
    transition: 0.1s;
    font-size: 16px;
    color: #959DAD;
    list-style-type: none;
}
.menu-item:hover {
    transition: 0.1s;
    color: #59606D;
}
</style>