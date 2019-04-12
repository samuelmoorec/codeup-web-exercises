(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
var person = {

    first_name: "Samuel",
    last_name: "Moore",
    nick_name: "Sam"};


console.log(typeof person);
console.log("The persons name is " + person.first_name + " " + person.last_name + ".");
// console.log(person.name);
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = "Howdy my name is " + person.first_name + " " + person.last_name + ", but you can call me " + person.nick_name + ".";
    console.log(person.sayHello);
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
    function Savings(element) {
         var customer = shoppers[element].name;
         var originalCost = shoppers[element].amount;
         var discountedPrice;
         switch (true) {
             case originalCost > 200:
                 discountedPrice = originalCost - (originalCost * .12);
                 console.log(customer + "'s original price was $" + originalCost.toFixed(2) + ", but with the discount the price is now $" + discountedPrice.toFixed(2));
                 break;
             default : console.log(customer + " did not qualify for the discount so they still owe $" + originalCost.toFixed(2))
         }}
    for (var i = 0; i < shoppers.length; i++) {
        Savings(i);}

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    var books = [
        {title:'GreenEggs & Ham',
            author : {
                        first_name:'Doctor',
                        last_name:'Sues'}},
        {title:'Copper Mountain',
            author: {
                        first_name:'Bob',
                        last_name:'Stamper'}},
        {title:'The Cup',
            author: {
                        first_name:'Edward',
                        last_name:'Buttle'}},
        {title:'The One Who Cried',
            author: {
                        first_name:'Sandy',
                        last_name:'Cheeks'}},
        {title:'Sand on my Towel',
            author: {
                        first_name:'Victoria',
                        last_name:'Miller'}}];


    //
    // console.log(books[1].title);
    // console.log(books[1].author[1]);
    // console.log(books[1].author.last_name);




    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    for (var i = 0; i < books.length; i++) {
        console.log("<-------------------------------->");
        console.log("Book # " + (i + 1));
        console.log("Title of book :" + books[i].title);
        console.log("Author of the book :" + books[i].author.first_name + " " + books[i].author.last_name);
    }
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    function createbook(title,author) {
        
    }
})();
