<template>
    <div class="home">
        <input v-model.trim="search" class="search" @keyup.enter='seek'>
        <div class="typeList">
            <span v-for='(item,index) in typeList' :key='item.classid' @click='sel(index)'>{{item.name}}</span>
        </div>
        <div class="detail">
            <div class="foodItem" v-for="(item,index) in List" :key='index' @click='jump(item.classid)'>{{item.name}}</div>
        </div>
    </div>
</template>

<script>
// 引入 get请求方式
import { get } from '../utils/http'
export default {
    name: 'Home',
    data() {
        return {
            search: '',
            typeList: [],
            List: [],
        }
    },
    methods: {
        foodType() {
            get('/class', {}).then((res) => {
                this.typeList = res.result;
                this.List = res.result[0].list
            })
        },
        sel(index) {
            this.List = this.typeList[index].list
        },
        jump(classid) {
            this.$router.push("/detail?classid="+classid)
        },
        seek() {
            get('/search',{
                keyword:this.search,
                num:'',
            })
            .then((res)=> {
                if(res.status==0) {
                    this.$router.push("/find?search="+this.search)
                }else {
                    alert('查询不到')
                }
            })
        }
    },
    created() {
        this.foodType()
    }
}
</script>

<style scoped>
.search {
    width: 98%;
    height: 40px;
    line-height: 40px;
}

.typeList span {
    height: 40px;
    line-height: 40px;
    background-color: lightpink;
    display: inline-block;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-right: 10px;
    padding: 10px;
}

.foodItem {
    width: 48%;
    height: 100px;
    line-height: 100px;
    text-align: center;
    background-color: lightskyblue;
    display: inline-block;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-right: 5px;
}
</style>