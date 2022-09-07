// Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
// **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()
const users = [
    {
        _id: "ab12ex",
        username: "Alex",
        email: "alex@alex.com",
        password: "123123",
        createdAt: "08/01/2020 9:00 AM",
        isLoggedIn: false,
    },
    {
        _id: "fg12cy",
        username: "Asab",
        email: "asab@asab.com",
        password: "123456",
        createdAt: "08/01/2020 9:30 AM",
        isLoggedIn: true,
    },
    {
        _id: "zwf8md",
        username: "Brook",
        email: "brook@brook.com",
        password: "123111",
        createdAt: "08/01/2020 9:45 AM",
        isLoggedIn: true,
    },
    {
        _id: "eefamr",
        username: "Martha",
        email: "martha@martha.com",
        password: "123222",
        createdAt: "08/01/2020 9:50 AM",
        isLoggedIn: false,
    },
    {
        _id: "ghderc",
        username: "Thomas",
        email: "thomas@thomas.com",
        password: "123333",
        createdAt: "08/01/2020 10:00 AM",
        isLoggedIn: false,
    },
];

const products = [
    {
        _id: "eedfcf",
        name: "mobile phone",
        description: "Huawei Honor",
        price: 200,
        ratings: [
            { userId: "fg12cy", rate: 5 },
            { userId: "zwf8md", rate: 4.5 },
        ],
        likes: [],
    },
    {
        _id: "aegfal",
        name: "Laptop",
        description: "MacPro: System Darwin",
        price: 2500,
        ratings: [],
        likes: ["fg12cy"],
    },
    {
        _id: "hedfcg",
        name: "TV",
        description: "Smart TV:Procaster",
        price: 400,
        ratings: [{ userId: "fg12cy", rate: 5 }],
        likes: ["fg12cy"],
    },
];
//   Imagine you are getting the above users collection from a MongoDB database. a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
const SignUp = () => {
    let user_input = prompt("Enter username:");
    let users_list = users.map((user) => {
        return user.username.toLowerCase();
    });
    if (users_list.includes(user_input.toLowerCase()))
        console.log("user already has an account");
    else {
        let new_user = {
            _id: "ffdvbh",
            username: user_input,
        };
        users.push(new_user);
    }
    console.log(users);
};
// SignUp();
// b. Create a function called signIn which allows user to sign in to the application
const SignIn = () => {
    let user_input = prompt("Enter username:");
    let users_list = users.map((user) => {
        return user.username.toLowerCase();
    });
    if (users_list.includes(user_input.toLowerCase()))
        console.log("You are successfully signed in");
};
// SignIn();
// The products array has three elements and each of them has six properties.
// a. Create a function called rateProduct which rates the product
const rateProduct = () => {
    let user_input = prompt(
        "Which product you want to rate(choose from mobile phone/Laptop/TV):"
    );
    let user_id = prompt("What is your id?");
    let user_rating = prompt("What is the rating you want to give?");
    products.map((product, index) => {
        if (product.name === user_input) {
            let rating_obj = {
                userId: user_id,
                rate: Number(user_rating),
            };
            products[index].ratings.push(rating_obj);
            console.log(products);
        }
    });
};
// rateProduct();
// b. Create a function called averageRating which calculate the average rating of a product
const averageRating = () => {
    products.map((product, index) => {
        if (product.ratings.length === 0) console.log(0);
        else if (product.ratings.length === 1)
            console.log(product.ratings[0].rate);
        else {
            let ratings_list = [];
            product.ratings.map((rating) => {
                ratings_list.push(rating.rate);
            });
            let rating_sum = ratings_list.reduce((acc, rep) => acc + rep, 0);
            console.log(rating_sum / ratings_list.length);
        }
    });
};
averageRating();
// Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
const likeProduct = () => {
    let user_input = prompt(
        "Which product you want to liek or unlike(choose from mobile phone/Laptop/TV):"
    );
    let user_id = prompt("What is your id?");
    products.map((product, index) => {
        if (product.likes.includes(user_id)) {
            let i = product.likes.indexOf(user_id);
            product.likes.splice(i, 1);
        } else {
            product.likes.push(user_id);
        }
    });
    console.log(products);
};
likeProduct();
