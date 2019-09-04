export default {
    computed: {
        post_search() {
            return this.posts.filter(post => {
                return post.title.match(this.txt_search);
            });
        }
    }
}