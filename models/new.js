const Model = require('./model');
module.exports =
    class New extends Model {
        constructor(title, category, text, url, date) {
            super();
            this.Title = title !== undefined ? title : "";
            this.Category = category !== undefined ? category : "";
            this.Text = text !== undefined ? text : "";
            this.ImageUrl = url !== undefined ? url : "";
            this.Date = date !== undefined ? date : "";

            this.setKey("ImageUrl");
            this.addValidator('Title', 'string');
            this.addValidator('Category', 'string');
            this.addValidator('Text', 'string');
            this.addValidator('ImageUrl', 'url');
            this.addValidator('Date', 'string');
        }
    }