var vm = new Vue({
	el:"#fh5co-main",
	data:{
		imgList:[],
	},
	methods:{
		 imgView: function() {
            let _this = this;
            this.$http.get('data/imgData.json', { 'id': 123 }).then(res => {
                this.imgList = res.data.result.list;
            });
       }
	}
})