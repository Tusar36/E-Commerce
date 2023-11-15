class ApiFeatures {
  constructor(query, queryItem) {
    this.query = query;
    this.queryItem = queryItem;
    this.PageNumber = 1;
  }
  search() {
    const keyword = this.queryItem.keyword;
    if (!keyword) {
      return;
    }
    const result = this.query.filter((e)=>{
      return (e.name?.toUpperCase()||' ').includes(keyword.toUpperCase())||(e.description?.toUpperCase()||' ').includes(keyword.toUpperCase())
    })
  
    this.query = result;
  }
  categoryFilter() {
    const category = this.queryItem.category;
    if (!category) {
      return;
    }
    const result = this.query.filter((e) =>
      e.category.toUpperCase().includes(category.toUpperCase())
    );
    this.query = result;
  }
  page() {
    if (this.queryItem.page) {
      this.PageNumber = this.queryItem.page;
    }
    this.totalItems = this.query.length;
  }
  pagination() {
    if (!this.queryItem.limit) {
      return;
    }

    this.Pagelimit = this.queryItem.limit;

    let minIndex = (this.PageNumber - 1) * this.Pagelimit;

    let maxIndex = minIndex + parseInt(this.Pagelimit);

    if (minIndex > this.totalItems) {
      this.query = [{}];
      return;
    }
    if (maxIndex > this.totalItems) {
      let result = [];
      for (let i = minIndex; i < this.totalItems; i++) {
        result.push(this.query[i]);
      }
      this.query = result;
      return;
    }
    let result = [];
    for (let i = minIndex; i < maxIndex; i++) {
      result.push(this.query[i]);
    }
    this.query = result;
    return;
  }
  features() {
    this.search();
    this.categoryFilter();
    this.page();
    this.pagination();
    return this.query;
  }
}

module.exports = ApiFeatures;
