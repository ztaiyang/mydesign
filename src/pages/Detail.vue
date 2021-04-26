<template>
    <div>
        <h1>这里是详情页</h1>
        <Magnify :previewImg="data.min" :zoomImg="data.max"></Magnify>
        <h2>111111111111111</h2>
        <FDJ src="data.src" bigSrc="data.bigSrc" />
    </div>
</template>

<script>
import Magnify from '../components/Magnify'
import FDJ from '../components/FDJ'
    export default {
       data() {
    return {
      data: {
        min:
          "https://img.alicdn.com/imgextra/i3/2857774462/TB21fgcwwNlpuFjy0FfXXX3CpXa_!!2857774462.jpg_430x430q90.jpg",
        max:
          "https://img.alicdn.com/imgextra/i3/2857774462/TB21fgcwwNlpuFjy0FfXXX3CpXa_!!2857774462.jpg",
          
      }
    };
  },
        components:{
          Magnify,
          FDJ
        }
    }
</script>

<style lang="css" scoped>

</style>