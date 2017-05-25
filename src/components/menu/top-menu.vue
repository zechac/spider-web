<template>
  <div>
   <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
       <template v-for="d,i in menuItem">
           <el-menu-item v-if="!d.children" :index="i+''">{{d.name}}</el-menu-item>
           <el-submenu v-if="d.children" :index="i+''">
                <template slot="title">{{d.name}}</template>
                <el-menu-item v-for="item,j in d.children" :index="i+'-'+j" :key="j">{{item.name}}</el-menu-item>
            </el-submenu>
       </template>
       <el-menu-item style="float:right" index="logout">退出</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'top-menu',
  data () {
    return {
      menuItem:[{name:"item1"},{
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
      }
  }
}
</script>

