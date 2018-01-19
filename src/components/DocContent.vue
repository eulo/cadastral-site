<template>
  <div class="content" v-if="sections">
    <div v-for="section in sections">
      <section>
        <h2>{{section.title}}</h2> 
        <div class="content-body" v-html="section.content"></div>
      </section>
      <div v-if="section.routes">
        <section v-for="route in section.routes">
          <h2>{{route.title}}</h2>
          <h3>{{route.subtitle}}</h3>
          <div class="content-body" v-html="route.content"></div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['sections']
}
</script>

<style scoped>
.content {
  width: 100%;
  padding-left: 246px;
  padding-top: 0;
}
.content-body {
  max-width: 600px;
}
.content-body p {
  font-size: 15px;
  color: #747c84;
} 
section {
  padding: 40px 30px 20px 30px;
  border-bottom: 1px solid #ddd;
}
h2 {
  margin-top: 0;
  font-weight: 300;
  margin-bottom: 5px;
  font-size: 30px;
  line-height: 30px;
  word-wrap: break-word;
  color: #33383c;
}
</style>
