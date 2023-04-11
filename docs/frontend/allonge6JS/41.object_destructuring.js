// destructuring objects
// 1
const user = {
    name: { first: "Reginald",
            last: "Braithwaite"
          },
    occupation: { title: "Author",
                  responsibilities: [ "JavaScript Allongé",
                                      "JavaScript Spessore",
                                      "CoffeeScript Ristretto"
                                    ]
                }
  };
  
  user.name.last
    //=> "Braithwaite"
  
  user.occupation.title
    //=> "Author"
  
  // 2
  const {name: { first: given, last: surname}, occupation: { title: title } } = user;
  
  surname
    //=> "Braithwaite"
  
  title
    //=> "Author"
   
  // 3 
  const description = ({name: { first: given }, occupation: { title: title } }) =>
    `${given} is a ${title}`;
  
  description(user)
    //=> "Reginald is a Author"
  
  // 4
  const description2 = ({name: { first }, occupation: { title } }) =>
    `${first} is a ${title}`;
  
  description2(user)
    //=> "Reginald is a Author"
  
  // 5
  const abbrev = ({name: { first, last }, occupation: { title } }) => {
    return { first, last, title};
  }
  
  abbrev(user)
    //=> {"first":"Reginald","last":"Braithwaite","title":"Author"}
  
  