<template>
<nav class="mainmenu" :class="factive ? 'position-fixed-nav' : ''">
    <div class="container">
        <div class="d-flex align-items-center">
            <Menu v-if="showMenu"/>
            <font-awesome-icon @click="hamOpen=true" :icon="['fas' , 'bars']" class="text-white d-lg-none navbar-toggler-icon"></font-awesome-icon>
            <Searchbar />
        </div>
    </div>
     <SideMenu
          :openSideMenu="hamOpen"
          @close-side-menu="hamOpen=false"
        />
</nav>
</template>
<script>
export default {
    name: 'MainMenu',
    data() {
       return {
        factive: false,
        showMenu: true,
        hamOpen: false
       }
    },
    methods: {
        topScro() {
            window.document.onscroll = () => {
                let navBar = document.getElementsByClassName('mainmenu');
                if(window.scrollY > 150){
                    this.factive = true;
                } else {
                    this.factive = false;
                }
            }
        },
        activeMEnu() {
            window.onresize = () => {
                let mtm = window.matchMedia('(max-width: 990px)');
                if(mtm.matches) {
                this.showMenu = false;
                } else {
                    this.showMenu = true;
                }
            }
        }
    },
    mounted(){
        this.topScro();
        let mtm = window.matchMedia('(max-width: 990px)');
        if(mtm.matches) {
        this.showMenu = false;
        } else {
            this.showMenu = true;
        }
        this.activeMEnu()
    },
    created() {
       
    }
}
</script>

<style lang="scss" scoped>
.position-fixed-nav {
    position: fixed !important;
    width: 100%;
    z-index: 999;
    top: 0;
}
.navbar-toggler-icon {
    cursor: pointer;
}
</style>