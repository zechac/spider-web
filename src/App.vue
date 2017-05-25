<template>
  <div id="app" style="height: 100%;" >
      <top-menu></top-menu>
      <div :style="{height:contentHeight+'px',margin:'3px',display:'flex'}">
          <div :style="{width:leftMenuWidth+'px',height:'100%'}">
            <left-menu></left-menu>
          </div>
          <div :style="{height:'100%',width:'100%',marginLeft:'3px'}">
            <router-view></router-view>
        </div>
      </div>
  </div>
</template>

<script>
import TopMenu from './components/menu/top-menu'
import LeftMenu from './components/menu/left-menu'
export default {
  name: 'app',
  components:{TopMenu:TopMenu,LeftMenu:LeftMenu},
  data(){
    return {
      contentHeight:500,
      leftMenuWidth:200,
      rightWidth:700,
      leftOffset:206
    }
  },
  methods:{
    cs(){
      let h=$('#app').height();
      let w=$('#app').width();
      this.contentHeight=h-60-6;
      this.rightWidth=w-this.leftMenuWidth;
    }
  },
  mounted(){
    this.cs();
  },
  created(){
    $(window).resize(()=> {
      this.cs();
    });
  }
}
</script>