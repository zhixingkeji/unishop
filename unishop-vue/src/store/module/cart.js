// 购物车模块的vuex

export default {
    state: {
        //测试
        a: 1,

        //购物车全部的商品列表
        list: [
            {
                //商品id
                id: 2,
                //名称
                name: "小爱音响1",
                //原价
                price: 30.2,
                //折扣
                discount: 0.9,
                //是否选中
                checkValue: true,
                //数量
                amount: 2,
                //标题
                title: '美的 (AUX) 1.5匹 京裕 新三级能效 挂机 30秒速冷 自清洁 壁挂式家用空调 大1.5匹：适用15-23㎡',
                //缩略图
                thumbnail : 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg'
            },
            {
                id: 30,
                //名称
                name: "小爱音响2",
                //原价
                price: 310.2,
                //是否选中
                checkValue: false,
                //折扣
                discount: 0.9,
                //数量
                amount: 5,
                //标题
                title: '华为 (AUX) 1.5匹 京裕 新三级能效 挂机 30秒速冷 自清洁 壁挂式家用空调 大1.5匹：适用15-23㎡',
                //缩略图
                thumbnail : 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg'
            },
            {
                id: 21,
                //名称
                name: "小爱音响2",
                //原价
                price: 30.2,
                //是否选中
                checkValue: false,
                //折扣
                discount: 0.9,
                //数量
                amount: 3,
                //标题
                title: '小米 (AUX) 1.5匹 京裕 新三级能效 挂机 30秒速冷 自清洁 壁挂式家用空调 大1.5匹：适用15-23㎡',
                //缩略图
                thumbnail : 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg'
            },
            {
                id: 25,
                //名称
                name: "小爱音响2",
                //原价
                price: 34.2,
                //是否选中
                checkValue: false,
                //折扣
                discount: 0.9,
                //数量
                amount: 200,
                //标题
                title: '奥克斯 (AUX) 1.5匹 京裕 新三级能效 挂机 30秒速冷 自清洁 壁挂式家用空调 大1.5匹：适用15-23㎡',
                //缩略图
                thumbnail : 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg'
            },
        ],

        //购物车被选中的商品列表
        selectedList: [
            //测试 默认选中第一个
            0
        ],

        //切换编辑和完成
        editBtn: false,

    },



    getters: {
        //判断是否全选
        checkedAll(state) {
            return state.list.length === state.selectedList.length;

        },

        //计算 合计金额和数量
        totalCount(state) {
            let total = {
                pprice: 0.00,
                count : state.selectedList.length
            }

            //循环遍历list
            state.list.forEach( (v,index)=> {
                //如果返回值大于-1则被选中
                if (state.selectedList.indexOf(index) > -1) {
                    total.pprice = total.pprice + v.price * v.discount * v.amount;
                }

            })

            return total
        }



    },



    mutations: {
        //全选方法
        checkAllCommit(state){
            console.log("点击全选")
            state.selectedList = state.list.map( (v,index)=>{
                    v.checkValue = true;
                    return index
                }
            )

        },

        //全不选方法
        uncheckAllCommit(state){
            console.log("点击全不选")
            state.list.forEach( (v,index) =>{
                v.checkValue = false;
            })

            state.selectedList = []
        },

        //单选
        selectOne(state,index){
            //如果之前选中则取消
           // 在不知道是否选中的情况下,先去判断,用传过来的索引值值,
           // 判断  selectedList 变量中是否有该索引
            // i 代表了 在state.selectedList中的索引
            // index 代表了state.list中的索引
            let i = state.selectedList.indexOf(index)

            //如果结果大于-1 则说明该元素已经被选中
            if(i > -1 ){
                state.list[index].checkValue = false;
                // console.log("被选中列表",state.selectedList)
                return state.selectedList.splice(i,1)

            }

            //未选中则选中,并加入state.selectedList列表中
            state.list[index].checkValue = true;
            state.selectedList.push(index)
            console.log("被选中列表",state.selectedList)


        },

        //切换编辑和完成
        changeEditBtn(state){
            state.editBtn = !state.editBtn
        },

        //删除
        deletegoods(state){
            state.list = state.list.filter( (v,index)=> {
                return state.selectedList.indexOf(index) === -1
            })

        }

    },



    actions: {
        //全选方法
        checkAll({commit, getters}){
            console.log("checkAll")

            //判断当前是否为全选, 提交不同的方法
            //如果结果为真,则已经被全选中,执行取消全选方法
            //如果结果为假,则全部未选中,执行全选
            getters.checkedAll ? commit("uncheckAllCommit") : commit("checkAllCommit")
        },

        //删除方法
        deletegoodsAction({commit}){
            console.log("正在删除")
            commit("deletegoods");
            uni.showToast({
                title: "删除成功",
                icon: "none"
            })
        }

    }
}
