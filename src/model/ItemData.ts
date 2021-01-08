import Category from './CateEnum'
// 保存一篇笔记数据
class ItemData {
    id!: number;
    categoryId!: Category;
    title!: string;
    content!: string;
    createTime!: string;
    constructor(id: number = -1, categoryId: Category = -1, title: string = '', content: string = '') {
        this.id = id;
        this.categoryId = categoryId;
        this.title = title;
        this.content = content;
        this.createTime = this.toSelfDateStr();
    }
    toSelfDateStr(): string {
        // 格式化日期
        let date = new Date(Date.now());
        let str = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
        return str;
    }
}

export default ItemData;