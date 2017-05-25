<template>
  <div class="h100">
   <el-menu theme="dark" :default-active="activeIndex" style="height:100%" mode="vertical" @select="handleSelect">
       <template v-for="d,i in menuItem">
           <el-menu-item v-if="!d.children" :index="i+''">{{d.name}}</el-menu-item>
           <el-submenu v-if="d.children" :index="i+''">
                <template slot="title">{{d.name}}</template>
                <el-menu-item v-for="item,j in d.children" :index="i+'-'+j" :key="j">
                    <el-button type="text" @click="menuClick(item)">{{item.name}}</el-button>
                </el-menu-item>
            </el-submenu>
       </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'left-menu',
  data () {
    return {
      menuItem:[{name:"spider",children:[
          {
              name:"spider",
              url:"/spider"
          }
      ]},{
          name:"item2",
          children:[{
              name:"child1"
          }]
      },{
          name:"item3"
      }]
    }
  },
  computed:{
      activeIndex(){
          return "0";
      }
  },
  methods:{
      handleSelect(i,d){
          console.info(i);
          console.info(d);
      },
      menuClick(d){
          if(d.url){
              this.$router.push({path:d.url})
          }
      }
  }
}
</script>

