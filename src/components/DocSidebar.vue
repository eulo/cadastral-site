<template>
  <div class="sidebar">
    <nav>
      <scrollable>
        <div class="sidebar-content">
          <div class="sidebar-category">
            <h3>Title</h3>
            <ul v-if="sections">
              <li v-for="section in sections">
                <a>{{section.title}}</a>
                <ul v-if="section.routes">
                  <li v-for="route in section.routes">
                    <a>{{route.title}}</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </scrollable>
    </nav>
  </div>
</template>

<script>
import Scrollable from './Scrollable.vue'
export default {
  components: {
    Scrollable
  },
  props: ['sections']
}
</script>

<style scoped>
.sidebar {
  position: fixed;
  width: 246px;
  left: auto;
  top: 0;
  height: 100%;
  z-index: 10;
  -webkit-box-shadow: 1px 0 0 rgba(81,88,90,0.17);
  box-shadow: 1px 0 0 rgba(81,88,90,0.17);
}
nav {
  height: 100%;
  padding-bottom: 8px;
  overflow: hidden;
  position: relative;
  background: #fff;
}
.sidebar-content {
  padding-top: 40px;
}
.sidebar-category {

}

h3 {
  padding-left: 30px;
  margin-top: 0;
  padding: 0 9px;
  margin-bottom: 10px;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 13px;
  letter-spacing: .5px;
}

ul {
  margin: 0 0 30px;
  padding: 0;
  list-style: none; 

}

a {
  padding: 6px 9px 6px 30px;
  width: auto;
  display: block;
}

</style>
