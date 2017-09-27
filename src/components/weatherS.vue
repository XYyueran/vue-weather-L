<template>
<div class="hello">
	<h1>{{ msg }}</h1>
	<el-col :span='24'>
		<el-form :inline="true">
		<el-form-item>
			<el-input placeholder="请输入城市名称" v-model='inputC'></el-input>
		</el-form-item>
		<el-form-item>
			<el-button v-on:click="greet">查询</el-button>
		</el-form-item>
		</el-form>
	</el-col>
	<el-col :span='24' v-if='show'>
		<el-table
        :data="gridData"
        stripe
        fit
        style="width: 80% ;text-align: center;margin:0 auto">
         <el-table-column
          align="center"
          prop="city"
          label="省市">
        </el-table-column>
        <el-table-column
          align="center"
          prop="lastUpdate"
          label="日期">
        </el-table-column>
        <el-table-column
          align="center"
          prop="tq"
          label="天气">
        </el-table-column>
        <el-table-column
          align="center"
          prop="qw"
          label="当前温度">
        </el-table-column>
        <el-table-column
          align="center"
          prop="fx"
          label="当前风向">
        </el-table-column>
      </el-table>
	</el-col>
</div>
</template>

<script>
import {getCityCode,reconvert} from '../api/api'
export default {
	name:'weatherS',
	data () {
	    return {
	      msg: 'A Simple VUE Weather Demo',
	      inputC:null,
	      show:false,
	      gridData:[]
	    }
	  },
	methods:{
		greet:function(){
			if(!!this.inputC){
				let cityid = getCityCode(this.inputC);
				if(cityid){
					console.log(cityid)
					this.$http.get(`http://api.yytianqi.com/observe?city=${cityid}&key=iolf7kuic5l2kqc7`).then((response)=>{
					response.data.data.city=this.inputC;
					this.gridData.push(response.data.data);
					this.inputC=""
					this.show=true;
				})
				}
				else{
					alert("当前输入不是省份");
				}
				
			}
		}
	}
}
</script>