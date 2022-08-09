<template>
    <div>
        <div class="detail">
            <div v-for='(item,index) in detail' :key="index">
                <h1>{{item.name}}</h1>
                <img :src="item.pic" width="100%">
                <p>适宜人数: {{item.peoplenum}}</p>
                <h2>介绍:</h2>
                <p v-html="content">{{item.content}}</p>
                <h3>原材料</h3>
                <div v-for='(i,idx) in item.material' :key="idx">
                    <span>{{i.mname}}</span>
                    <span>{{i.amount}}</span>
                </div>
                <h2>烹饪步骤:</h2>
                <div>
                    <p v-for='(i,idx) in item.process' :key='idx'>{{i.pcontent}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// 引入 get请求方式
import { get } from '../utils/http'
export default {
    data() {
        return {
            detail: [],
            content: "",
            msg: ""
        }
    },
    created() {
        this.foodSearch()
    },
    methods: {
        foodSearch() {
            const classid = this.$route.query.classid
            get('/byclass',{
                classid,
                start: 0,
                num: ""
            })
            .then((res)=>{this.detail=res.result.list})
        },
    }
}
</script>

<style scoped>
.detail {
  max-width: 540px;
  min-width: 320px;
  margin: auto;
  border: 1px solid #000;
  padding: 10px;
  margin-bottom: 5px;
}
</style>