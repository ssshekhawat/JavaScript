let books=[];
let cart=[];

function intializeBooks()
{
    books=[{
        name:"JS fundamental",
        quantity:5
    },
    {
        name:"Recat JS",
        quantity:2
    }]
}

function addToCart(bookIndex)
{
    cart.push(books[bookIndex]);
}

function showCartItems()
{
    cart.forEach(b=>{
        console.log("Name - "+b.name+" Quantity - "+b.quantity);
    })
}

function changeQuantity(books,itemindex)
{
    books[itemindex].quantity=10;
}

function cloneBook(book)
{
    return JSON.parse(JSON.stringify(book));
}

function addToCartNewBook(bookIndex)
{
    cart.push(cloneBook(books[bookIndex]));
}

function updateQuantity(book,qunatity)
{
    book.quantity=qunatity;
}