function createNewPost(email, image, imageDescripcion, text) {
    validateEmail(email)
    validateUrl(image, "image url")
    validateText(imageDescripcion, "image descripcion")
    validateText(text, "text")

    //ahora viene la lógica, ¿tú existes en esta app?
    var foundUser = find(users, function (user) {
        return user.email === email
    })
    //sino encuentro el usuario
    if (foundUser === undefined)
        throw new Error("User not found")

    var post = {}
    post.id = createId()
    post.author = email
    post.image = image
    post.imageDescripcion = imageDescripcion
    post.text = text
    post.likes = []

    posts.push(post)
}