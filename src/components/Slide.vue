<template>
  <div>
    <v-touch v-on:swipeleft="changeSlide(index+1)" v-on:swiperight="changeSlide(index-1)">
      <Carousel v-model="index" loop autoplay :height="200">
        <CarouselItem v-for="i in demo1_list" :key="i.img">
          <Row>
            <i-col span="24">
              <img v-bind:src="i.img" class="demo-carousel">
            </i-col>
          </Row>
        </CarouselItem>
      </Carousel>
    </v-touch>
  </div>
</template>

<script>
const imgList = [
  'https://goo.gl/YTjG8H',
  'https://goo.gl/CdqRQ2',
  'https://goo.gl/PC8Xto'
];

const demoList = imgList.map(one => ({
  url: 'javascript:',
  img: one
}));

export default {
  name: 'Slide',
  components: {},
  data() {
    return {
      demo1_list: demoList,
      index: 0
    };
  },
  methods: {
    changeSlide: function(count) {
      this.index =
        count >= 0 && count < this.demo1_list.length ? count : this.index;
    }
  }
};
</script>
<style lang="less" scoped>
img {
  width: 100%;
}
</style>
