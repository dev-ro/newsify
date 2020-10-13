.<template>
  <div class="side-menu" :class="openSideMenu ? 'sidemenuactive' : ''">
    <div>
        <div class="side-menu--close" @click="closeSideMenu()">
            <font-awesome-icon :icon="['fas', 'caret-left']" />
        </div>
        <Menu />
    </div>
  </div>
</template>

<script>

export default {
  name: 'SideManu',
  props: ['openSideMenu'],
  methods: {
    closeSideMenu () {
      this.$emit('close-side-menu')
    }
  }
}
</script>

