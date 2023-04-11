
((diameter_fn) => {
    const PI = 3;
    
    return diameter_fn(2)
  })(
    (() => {
      const PI = 3.14159265;
      
      return (diameter) => diameter * PI
    })()
  )
    //=> 6.2831853