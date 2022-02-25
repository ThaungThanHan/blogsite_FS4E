const numeralRegex = /\d/;
const specialcharRegex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

/// minimumChar 
export const minimumChar = (value,length) => {
    if(value.length >= length){
        return true;
    }else{
        return false;
    }
}

// hasNumeral
export const hasNumeral = (value) => {
    if(numeralRegex.test(value)){
        return true;
    }else{
        return false;
    }
}

export const hasSpecialChar = (value) => {
    if(specialcharRegex.test(value)){
        return true;
    }else{
        return false;
    }
}

export const hasUpper = (value) => {
    if(value.toLowerCase() !== value){
        return true;
    }else{
        return false;
    }
}

export const hasLower = (value) => {
    if(value.toUpperCase() !== value){
        return true;
    }else{
        return false;
    }
}

export const isMatching = (value1,value2) => {
    if(value1 == value2){
        return true;
    }else{
        return false;
    }
}