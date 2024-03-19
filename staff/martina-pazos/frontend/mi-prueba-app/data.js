//generate ids
function generateId() {
    return Math.floor((Math.random() * 1000000000000000000)).toString(36)
}

//data models
function User(id, name, email, password, saved) {
    this.id = id
    this.name = name
    this.email = email
    this.password = password
    this.saved = saved
}

function Post(id, author, image, imageDescription, text, likes) {
    this.id = id
    this.author = author
    this.image = image
    this.imageDescription = imageDescription
    this.text = text
    this.likes = likes
}

//cloning 

function cloneUser(user) {
    return new User(user.id, user.name, user.email, user.password, [...user.saved])
}

function clonePost(post) {
    return new Post(post.id, post.author, post.image, post.imageDescription, post.text, [...post.likes])
}

//database collections
const db = {
    users: [],
    posts: [],

    findUserByEmail: function (email) {
        const user = this.users.find(function (user) {
            return user.email === email
        })

        if (!user) return null


        return cloneUser(user)
    },

    createUser: function (name, email, password) {

        const user = new User(generateId(), name, email, password)

        this.users.push(user)
    },

    findUserById: function (id) {
        const user = this.users.find(function (user) {

            return user.id === id
        })

        if (!user) return null

        return cloneUser(user)
    },

    getPosts: function () {
        return this.posts.map(function (post) {
            return clonePost(post)
        })
    },

    createPost: function (userId, image, imageDescripcion, text) {
        const post = new Post(generateId(), userId, image, imageDescripcion, text, [])

        this.posts.push(post)
    },

}

removePostById: function (postId) {

}

//populate 
db.users[0] = new User(generateId(), "Pepito Grillo", "pepito@grillo.com", "123123123", [])

db.users[1] = new User(generateId(), "Campa Nilla", "campa@nilla.com", "123123123", [])

db.users[2] = new User(generateId(), "Mafalda Niña", "mafalda@nina.com", "123123123")

//populate some posts
db.posts[0] = new Post(generateId(), db.users[0].id, "https://imgs.search.brave.com/KYetCiw1rgr1fq3bX8kvtM1NJmcbuTbh10z4FG9KumA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODdiNTczNzQ0MDYw/OTA5YWE2MDNhYTgu/cG5n", "Pepito Grillo volando agarrado  a un paraguas", "Pepito Grillo en acción", [db.users[1].id])

db.posts[1] = new Post(generateId(), db.users[1].id, "https://imgs.search.brave.com/RB6hZ4oGv9OeVRcnsPm39FXsqOeS8Mrwm77djH0X2yU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vd3d3LmZp/ZXN0YWlkZWFzY2x1/Yi5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMTQvMDEvZm9u/ZG9fZGVfdGlua2Vy/YmVsbF93cF8xXzEw/MjR4NzY4LmpwZz9y/ZXNpemU9NjQwLDQ4/MA", "Campanilla sonriente", "Toda un hada, para soñar", [db.users[0].id])

db.posts[2] = new Post(generateId(), db.users[2].id, "https://imgs.search.brave.com/Xebwv60c9mFsUL_5VgB3onTkK1VgAMrphrzoPpsN-As/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzU1LzU0/Lzg3LzU1NTQ4N2E4/YjhhOGQ5NTEyMGQ0/MmVlMmEyZjFmZWVk/LS1tYWZhbGRhLXF1/b3Rlcy1tb3VudGFp/bi1iaWtlLmpwZw", "Mafalta con un letrero, dice aqui nadie se va rendir", "Vamos a ello", [])


db.posts[3] = new Post(generateId(), db.users[2].id, "https://imgs.search.brave.com/5IuVHgpWBbg4nMHZoM9k6gHvNpG_83JsWmDuLVd5ih8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzI1Lzlm/L2NmLzI1OWZjZmMy/ZjlmOGZiM2RmODdh/ZTAzMDFjN2RiZTlm/LmpwZw", "Shin Chan con su padre, madre, hermana y perro", "Mira que trompa, que cacho trooompa", [])











