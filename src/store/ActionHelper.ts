import Category from '@/model/CateEnum';
import ItemData from '@/model/ItemData';
import DataHelper from './DataHelper'

class ActionHelper {
    // 数据处理
    dataHelper: DataHelper = new DataHelper('memoData', 'id');

    // 笔记数组
    memoList!: Array<ItemData>;

    constructor() {
        this.memoList = this.readData();
    }

    readData(): Array<ItemData> {
        // 读取本地
        let arrObj = this.dataHelper.readData();
        // 转成itemdata
        let arrItem = arrObj.map((ele: any) => {
            let item: ItemData = new ItemData();
            item.id = ele.id;
            item.categoryId = ele.categoryId;
            item.title = ele.title;
            item.content = ele.content;
            item.createTime = ele.createTime;
            return item;
        })

        // 返回数组
        return arrItem;
    }

    getCategoryName(cateId:Category):string{
        const cateName:Array<string> = ['工作','生活','学习'];
        return cateName[cateId];
    }

    // 业务处理

    // 新增
    add(item: ItemData): number {
        this.dataHelper.addData(item);
        this.memoList.push(item);
        this.dataHelper.saveData(this.memoList);
        return item.id;
    }

    // 修改
    edit(item: ItemData): void {
        let editItem: ItemData | undefined = this.memoList.find((ele) => {
            return ele.id === item.id;
        })
        if (editItem) {
            editItem.categoryId = item.categoryId;
            editItem.title = item.title;
            editItem.content = item.content;
            this.dataHelper.saveData(this.memoList);
        }
    }

    // 删除
    remove(id: number): void {
        let tempList: Array<ItemData> = this.memoList.filter((item: ItemData) => {
            return item.id !== id;
        });
        this.memoList = tempList;
        this.dataHelper.saveData(this.memoList);
    }
}

export default ActionHelper;