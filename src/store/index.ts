import Vuex from 'vuex'
import Vue from 'vue'
import ActionHelper from './ActionHelper';
import ItemData from '@/model/ItemData';

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        aHelper: new ActionHelper(),
        isShow: false,
        transMemo: null,
        filterCateId: -1
    },
    mutations: {
        editMemo(state: any, editMemo: any) {
            state.transMemo = editMemo;
        }
    }
})

export default store;