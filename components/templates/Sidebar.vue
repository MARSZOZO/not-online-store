<template>
    <div class="row">
        <div class="col-12">
            <h1>Каталог</h1>
            <ul class="sidebar-title-list mt-20">
                <li class="cursor-pointer pb-15 menu-item"><NuxtLink to="/catalog/backpack">Рюкзаки</NuxtLink></li>
                <li class="cursor-pointer pb-15 menu-item"><NuxtLink to="/catalog/tshirt">Футболки</NuxtLink></li>
                <li class="cursor-pointer menu-item"><NuxtLink to="/catalog/shirt">Рубашки</NuxtLink></li>
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