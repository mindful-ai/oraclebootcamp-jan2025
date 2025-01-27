PS C:\Users\mindf\Desktop\current-training> node
Welcome to Node.js v20.14.0.
Type ".help" for more information.
> var x = 10;
undefined
> x
10
> console.log("THe value of X is " , x);
THe value of X is  10
undefined
> typeof x
'number'
> x + 10
20
> var y;
undefined
> y = ++x;
11
> x > b
Uncaught ReferenceError: b is not defined
> x > y
false
> x > y && x < 10
false
> !x
false
> x > y || x < 10
false
> let c = new Number(20)
undefined
> c
[Number: 20]
> typeof c
'object'
> x == c
false
> let c = new Number(10)
Uncaught SyntaxError: Identifier 'c' has already been declared
> let d = new Number(10)
undefined
> x == d
false
> d
[Number: 10]
> x
11
> x--
11
> x
10
> x == d
true
> x === d
false
> // ------------------------------------------------------------------------------------------------------- numbers and operators
undefined
> var s = "javascript"
undefined
> typeof s
'string'
> s[0]
'j'
> s[1]
'a'
> s[2] = 't'
't'
> s
'javascript'
> s.length
10
> var t = "mary had a little lamb"
undefined
> t.search
[Function: search]
> t.search('little')
11
> t.indexOf('little')
11
> var t1 = "mary had a little little little lamb"
undefined
> t1.lastIndexOf('little')
25
> t.slice(1, 4)
'ary'
> t.substr
[Function: substr]
> t.substr(5, 10)
'had a litt'
> t.replace("lamb", "kitten")
'mary had a little kitten'
> t.toUpperCase()
'MARY HAD A LITTLE LAMB'
> t.toLowerCase()
'mary had a little lamb'
> var m = '   345.76 '
undefined
> m.trim()
'345.76'
> m.trim().concat('345')
'345.76345'
>
>
>
> t
'mary had a little lamb'
> t.split(' ')
[ 'mary', 'had', 'a', 'little', 'lamb' ]
> L = ['sky', 'is', 'blu']
[ 'sky', 'is', 'blu' ]
> L.join('--')
'sky--is--blu'
>
> # --------------------------------------------------------------------------------------------------- Strings
# --------------------------------------------------------------------------------------------------- Strings
^

Uncaught SyntaxError: Invalid or unexpected token
>
> var L = ["red", "green", "blue"]
undefined
> L
[ 'red', 'green', 'blue' ]
> L[0]
'red'
> L[1]
'green'
> L[0] = "deepred"
'deepred'
> L
[ 'deepred', 'green', 'blue' ]
>
>
>
> L.push("yellow")
4
> L
[ 'deepred', 'green', 'blue', 'yellow' ]
> L.unshift("orange")
5
> L
[ 'orange', 'deepred', 'green', 'blue', 'yellow' ]
> L.splice(2, 0, 'bluegreen')
[]
> L
[ 'orange', 'deepred', 'bluegreen', 'green', 'blue', 'yellow' ]
>
>
>
>
>
> L.pop()
'yellow'
> L.shift()
'orange'
> L
[ 'deepred', 'bluegreen', 'green', 'blue' ]
> L.splice(1, 1)
[ 'bluegreen' ]
> L
[ 'deepred', 'green', 'blue' ]
>
>
>
>
> L.includes('cyan')
false
> L.indexOf('green')
1
> L.find( function(e) { return e == 'blue' } )
'blue'
> L.findIndex( function(e) { return e == 'blue' } )
2
> L.filter( function(e) { return e == 'blue' } )
[ 'blue' ]
> L
[ 'deepred', 'green', 'blue' ]
>
>
>
> L = [
...   'cerulean',  'cyan',
...   'deepred',   'deepsea',
...   'deepsea',   'green',
...   'lightblue', 'sky',
...   'yellow'
... ]
[
  'cerulean',  'cyan',
  'deepred',   'deepsea',
  'deepsea',   'green',
  'lightblue', 'sky',
  'yellow'
]
> L
[
  'cerulean',  'cyan',
  'deepred',   'deepsea',
  'deepsea',   'green',
  'lightblue', 'sky',
  'yellow'
]
> L.sort()
[
  'cerulean',  'cyan',
  'deepred',   'deepsea',
  'deepsea',   'green',
  'lightblue', 'sky',
  'yellow'
]
> L.reverse()
[
  'yellow',    'sky',
  'lightblue', 'green',
  'deepsea',   'deepsea',
  'deepred',   'cyan',
  'cerulean'
]
> var N = [10, 3, 4, 1, 67 ,100]
undefined
> N.sort()
[ 1, 10, 100, 3, 4, 67 ]
> N.sort((a, b) => (a - b))
[ 1, 3, 4, 10, 67, 100 ]
> N.sort((a, b) => (b - a))
[ 100, 67, 10, 4, 3, 1 ]
>
>
> L.sort( (a, b) => (b - a) )
[
  'yellow',    'sky',
  'lightblue', 'green',
  'deepsea',   'deepsea',
  'deepred',   'cyan',
  'cerulean'
]
>
>
>
>
>
> for(item of L){
... console.log(item)
... }
yellow
sky
lightblue
green
deepsea
deepsea
deepred
cyan
cerulean
undefined
> L.sort( (a, b) => (a - b) )
[
  'yellow',    'sky',
  'lightblue', 'green',
  'deepsea',   'deepsea',
  'deepred',   'cyan',
  'cerulean'
]
> L.sort( (a,b) => a.localeCompare(b) )
[
  'cerulean',  'cyan',
  'deepred',   'deepsea',
  'deepsea',   'green',
  'lightblue', 'sky',
  'yellow'
]
>