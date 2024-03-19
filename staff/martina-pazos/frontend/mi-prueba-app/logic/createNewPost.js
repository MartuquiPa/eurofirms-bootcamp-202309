function createNewPost(userId, image, imageDescripcion, text) {
    validateText(userId, "user id")
    validateUrl(image, "image url")
    validateText(imageDescripcion, "image descripcion")
    validateText(text, "text")

    const user = db.findUserById(userId)

    if (!user)
        throw new Error("User not found")

    db.createPost(userId, image, imageDescripcion, text)
}