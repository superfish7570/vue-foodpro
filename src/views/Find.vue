<template>
    <div>
        <div v-for="(item,index) in list" :key="index" >
            <img :src="item.pic">
            <h1>{{item.name}}</h1>
            <h3>{{item.content}}</h3>
            <h2>原材料</h2>
            <p v-for="(a,b) in item.material" :key="b">{{a.mname}}:{{a.amount}}</p>
            <h2>步骤</h2>
            <p v-for="(a,b) in item.process" :key="'a'+b">{{a.pcontent}}</p>
        </div>
    </div>
</template>

<script>
import {get} from '@/utils/http';
    export default {
        data(){
            return{
                list:[]
            }
        },
        created(){
            get("/search",{
                keyword:this.$route.query.search,
                num:"",
             }).then((res)=>{
        console.log(res)
        this.list=res.result.list
      })
        },
        }
    
</script>

<style scoped>

</style>