<template>
  <div class="score">
  	<dl>
  		<dt>
  		  <div class="type0"></div>
  			<div class="type1">球队</div>
  			<div class="type2">场</div>
  			<div class="type2">胜</div>
  			<div class="type2">平</div>
        <div class="type2">负</div>
  			<div class="type3">进/失</div>
  			<div class="type3">积分</div>
  		</dt>
  		<dd v-for="(item, index) in score">
  			<div class="type2" v-text="++index"></div>
  			<div class="type1">
  				<img :src="item.team_logo"/>
  				<span v-html="item.team_name"></span>
  			</div>
  			<div class="type2" v-text="item.grade_turns">19</div>
  			<div class="type2" v-text="item.grade_win">13</div>
        <div class="type2" v-text="item.grade_equal">2</div>
  			<div class="type2" v-text="item.grade_lose">4</div>
  			<div class="type3" v-text="item.grade_goal+'/'+item.grade_fumble">41/27</div>
  			<div class="type3" v-text="item.grade_integral"></div>
  		</dd>
  	</dl>
  </div>
</template>

<script>
  export default {
  	date() {
  	},
  	props: {
  	  score: {
  		type: Array,
  		required: true
  	  }
  	},
  	mounted() {
      setTimeout(() => {
      	this.$emit('updateScroll')
      },20)
  	}
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.score
  h3
  	text-align: left
  p
  	text-align: left
  dl
  	background:	#F0FFFF
  	font-siez: 1rem
	dt
    display: flex
    padding: .5rem 0
    border-bottom: 1px solid #d0cece
    background:	#F8F8FF
	  .type0
	  	flex: 1
	  	text-align:left
	  .type1
	  	flex: 4
	  .type2
	  	flex: 1
	  .type3
	  	flex: 2
	dd
	  display: flex
	  border-bottom: 1px solid #d0cece
	  padding: 1.2rem 0
	  font-size: 1rem
	  position: relative
	  .type0
	  	flex: 1
	  	text-align:left
	  .type1
	  	flex: 4
	  	text-align: left
	  	text-indent: 2rem
	  	img
	  	  width: 1.4rem
	  	  position: absolute
	  	  top: 1rem
	  	  left: 1.8rem
	  .type2
	  	flex: 1
	  .type3
	  	flex: 2
</style>
