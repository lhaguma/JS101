let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4];  // what will this line return?

//won't raise an error. Will create empty spaces in indexes 3 to 5
//though index 4 will be empty, accesssing that index will return undefiined