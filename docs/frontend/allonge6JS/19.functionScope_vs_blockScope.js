// 1
((diameter) => {
    const PI = 3;
    
    if (true) {
      const PI = 3.14159265;
    
      return diameter * PI;
    }
  })(2)
  
  // 2
  ((diameter) => {
    const PI = 3.14159265;
    
    if (true) {
      const PI = 3;
    }
    return diameter * PI;
  })(2)
  
  
  
  
  // 3
  ((diameter) => {
    if (true) {
      const PI = 3.14159265;
    }
    return diameter * PI;
  })(2)   //=> would return 6.2831853 if const had function scope
  