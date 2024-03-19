function deletePost(userId, postId) {
    validateText(userId, "user id")
    validateText(postId, "post id")

    const user = db.findUserById(userId)

    if (!user)
        throw new error("User not found")

    const post = db.findPostById(postId)
    if (!post)
        throw new error("Post not found")

    if (post.author !== userId)
        throw new error("Post does not belong to user")

    db.removePost(postId)



}
