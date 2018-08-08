(function () {

    let message;
    message = 'abc';
    // this is most popular way
    // type assertion does not change type at runtime
    // allows us to tell ts what type is so we get intellisense
    let endsWithC = (<string>message).endsWith('c');  // using type assertion telling ts what type message is
    let alternativeWay = (message as string).endsWith('c');  // using type assertion telling ts what type message is

})();