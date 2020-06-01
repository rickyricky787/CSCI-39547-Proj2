/*
    Ricky Rodriguez
    CSCI 39547 - Assignment #2
    Recreating methods using JavaScript functions
*/


// Replica of forEach()
Array.prototype.myEach = function(callback)
{
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}

// Replica of Map()
Array.prototype.myMap = function(callback)
{
    var new_array = [];
    for (let i = 0; i < this.length; i++) {
        new_array.push(callback(this[i], i, this));
    }
    return new_array;
}

// Replica of Filter()
Array.prototype.myFilter = function(callback)
{
    var new_array = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this))
        {
            new_array.push(this[i]);
        }
    }
    return new_array;
}

// Replica of Some()
Array.prototype.mySome = function(callback)
{
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this) == true)
        {
            return true;
        }
    }
    return false;
}

// Replica of Every()
Array.prototype.myEvery = function(callback)
{
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this) == false)
        {
            return false;
        }
    }
    return true;
}

// Replica of Includes()
Array.prototype.myIncludes = function(variable)
{
    for (let i = 0; i < this.length; i++) {
        if (this[i] == variable)
        {
            return true;
        }
    }
    return false;
}

// Replica of IndexOf()
Array.prototype.myIndexOf = function(variable, index = 0)
{
    if (index < 0)
    {
        index = this.length - 1 + index;
    }
    for (let i = index; i < this.length; i++) {
        if (this[i] == variable)
        {
            return i;
        }
    }
    return -1;
}

// Replica of Push()
Array.prototype.myPush = function(variable)
{
    this[this.length + 1] = variable;
}

// Replica of lastIndexOf()
Array.prototype.myUnshift = function(variable, index = this.length - 1)
{
    if (index < 0)
    {
        index = this.length - 1 + index;
    }
    for (let i = index; i >= 0; i--) {
        if (this[i] == variable)
        {
            return i;
        }
    }
    return -1;
}