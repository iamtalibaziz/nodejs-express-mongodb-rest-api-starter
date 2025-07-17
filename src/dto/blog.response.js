class BlogResponse {
    constructor(doc) {
        this.id = doc._id;
        this.title = doc.title;
        this.content = doc.content;
        this.author = doc.author;
        this.createdAt = doc.createdAt;
        this.updatedAt = doc.updatedAt;
    }
    static from(doc) {
        return new BlogResponse(doc);
    }

    static fromList(docs) {
        return docs.map(doc => new BlogResponse(doc));
    }
}

module.exports = BlogResponse;
