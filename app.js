let a = 5;

// Expression 1
let exp1 = ((4 + 5) && "abc" || false + "test") * (a-- || --a) || (false && (++a + 1)) * "end";
console.log(exp1); 
// Output: NaN 
// "abc" * 5 gives NaN because you can't multiply a string by a number.



// Expression 2
let exp2 = 10 * ("foo" && 5 + (++a) || "bar") && (false + "test") || 0 && true;
console.log(exp2); 
// Output: NaN 
// 10 * 11 is 110, but 110 * NaN results in NaN.



// Expression 3
let exp3 = 3 + (a-- || "start") * 4 && (--a + "value") * (1 + 2) + "result";
console.log(exp3);
// Output: NaN
// "value" * number gives NaN, making the whole expression NaN.



// Expression 4
let exp4 = "hello" * (++a + true) || (2 + 3 * "abc") * (0 + 1) + "xyz" && 0;
console.log(exp4); 
// Output: NaN 
// "hello" * a number gives NaN.



// Expression 5
let exp5 = (true || (0 + 1) * "test" && 4) || (false && 3 + "value") * a-- + 2;
console.log(exp5); 
// Output: NaN
// "test" * number gives NaN and makes the result NaN.



// Expression 6
let exp6 = ++a + "abc" && (4 * 2) + 3 || (0 + 1) && (3 * "hello") || a--;
console.log(exp6);
// Output: NaN
// "hello" * 3 is NaN, so the result is NaN.



// Expression 7
let exp7 = ("foo" + 5) * (++a + true) || 2 * 3 + (true + 2) || "result";
console.log(exp7);
// Output: 9
// "foo" + 5 gives NaN, but the next part gives 9.



// Expression 8
let exp8 = (0 + 1) && (true + 0) || (false + "test") * 4 && 3 + 2 || "value";
console.log(exp8);
// Output: "value"
// The result falls back to "value" because of NaN in the middle.



// Expression 9
let exp9 = 3 * "abc" + (true + 1) || (++a + "test") && (3 + "result") || null;
console.log(exp9);
// Output: NaN 
// Multiplying a string with a number gives NaN.



// Expression 10
let exp10 = (++a + false) && "start" || 0 + 1 && "value" || 5 * "end" && a++;
console.log(exp10); 
// Output: "start"
// The valid result is "start".



// Expression 11
let exp11 = (false && "hello") + (a++ || 3 + "test") * 4 || 5 * "abc" && 0;
console.log(exp11);
// Output: NaN 
// "abc" * 5 gives NaN, affecting the result.



// Expression 12
let exp12 = "hello" * (true + 0) + 2 || (false + 1) * 3 && "result" || 4 + "test";
console.log(exp12);
// Output: NaN
// "hello" * a number gives NaN.



// Expression 13
let exp13 = 5 * (a++ || false) + 2 && (false + "test") || 3 * "end" && 4;
console.log(exp13);
// Output: NaN
// "test" gives NaN, making the result NaN.



// Expression 14
let exp14 = (false + "abc") * 2 || (--a + 1) * "start" + 3 && 4 || "end";
console.log(exp14);
// Output: NaN
// Multiplying a string gives NaN.



// Expression 15
let exp15 = (0 + "foo") * 3 + (true && "result") || "start" + (++a + 1) * 4;
console.log(exp15);
// Output: "start9"
// "foo" * 3 gives NaN, then it becomes "start9".



// Expression 16
let exp16 = 2 * "end" || (false && true) || "start" + (--a + 2) * 5 && null;
console.log(exp16);
// Output: "start25"
// Multiplying "end" with a number gives NaN, then it concatenates to "start25".



// Expression 17
let exp17 = 3 + 2 * ("test" + a--) && (false + 3) * 5 || 0 + "value" && 4;
console.log(exp17);
// Output: "value"
// "test" + a gives "test5", which works fine in the expression.



// Expression 18
let exp18 = "start" && (false || 2 * "end") || (++a + 1) * 3 + "result" && 0;
console.log(exp18);
// Output: "start25result"
// This gives "start25result" from the calculations.



// Expression 19
let exp19 = ((5 + 1) && "foo") || (++a + 2) * (false + 3) + "test" && 7;
console.log(exp19);
// Output: "foo"
// 6 is truthy, so it returns "foo".



// Expression 20
let exp20 = 2 * 3 + "hello" && (false + ++a) * "result" || "end" + 5 || 0;
console.log(exp20);
// Output: "end5"
// The string "end" + 5 gives "end5".



// Expression 21
let exp21 = 5 * (true + ++a) && ("test" + false) || 7 * (true + 2) + "value";
console.log(exp21);
// Output: "testfalse"
// This results in the string "testfalse" after the calculations.

// Expression 22
let exp22 = "foo" + 4 && (++a + 1) * "start" || 5 + 6 * (false + true) && "test";
console.log(exp22);
// Output: NaN
// "start" multiplied with a number results in NaN.



// Expression 23
let exp23 = (false && 2) || (a++ + 1) * "end" && "start" || 4 * 5 && "result";
console.log(exp23);
// Output: "result"
// The expression ends up returning "result" because of the logical OR.



// Expression 24
let exp24 = 3 + 2 * "test" || (false + a--) * "hello" && "world" + 1 || 2;
console.log(exp24);
// Output: NaN
// "test" multiplied by 2 results in NaN, affecting the whole expression.



// Expression 25
let exp25 = (3 + 4) * (false || a--) && 5 || "start" + 1 + "test" && 0;
console.log(exp25);
// Output: NaN
// The expression evaluates to NaN because multiplying a number by false gives NaN.



// Expression 26
let exp26 = "hello" && 3 * 2 + (a++ + 1) || (false + true) * "result" + "end";
console.log(exp26);
// Output: "hello6resultend"
// This evaluates to "hello6resultend".



// Expression 27
let exp27 = 3 * "test" + (true + 2) && (false || "value") || "start" + a++;
console.log(exp27);
// Output: "start6"
// "test" multiplied by 3 gives NaN, so "start6" is the result.



// Expression 28
let exp28 = (false + 1) * "hello" || 3 + (a-- && 5) * "result" || "world";
console.log(exp28);
// Output: "world"
// The expression falls back to "world" as NaN is encountered.



// Expression 29
let exp29 = "start" + 2 * (true || 1) && (false || "value") * 5 + "result";
console.log(exp29);
// Output: "start15result"
// The expression evaluates to "start15result".



// Expression 30
let exp30 = (true + 3) * "test" || 1 * 5 && (false + "value") + "end" || a--;
console.log(exp30);
// Output: "testtest"
// "test" multiplied by 4 gives "testtest".



// Expression 31
let exp31 = 3 + "end" || 2 * "test" && (++a + true) || "start" + 1;
console.log(exp31);
// Output: "end"
// The expression gives "end" because "end" is a valid result.



// Expression 32
let exp32 = (0 + 3) * (true + false) || 5 * "hello" + 2 && (false + "test");
console.log(exp32);
// Output: "test"
// The result falls back to "test" after evaluating the expression.



// Expression 33
let exp33 = 2 + 3 && ("end" + a++) || (false + "test") * 4 && 5;
console.log(exp33);
// Output: "end7"
// "end" concatenated with 7 results in "end7".



// Expression 34
let exp34 = "hello" + 4 * (false + a--) || 3 && "start" + 1 || (true + "test");
console.log(exp34);
// Output: "helloNaN"
// Multiplying a string gives NaN, affecting the result.



// Expression 35
let exp35 = "start" && (a-- || "test") * 4 + 5 && (false + "end") || 2;
console.log(exp35);
// Output: 2
// The fallback to 2 because of NaN in the previous parts.



// Expression 36
let exp36 = 1 + "value" && (++a + 2) || (3 + "result") * true && 4;
console.log(exp36);
// Output: "value"
// The expression results in "value" due to the first part being truthy.



// Expression 37
let exp37 = "hello" && 2 + "test" || (++a + 3) && (true + "value") + 1;
console.log(exp37);
// Output: "hello2test"
// This returns "hello2test".



// Expression 38
let exp38 = 5 * (a-- || "test") && 6 * "result" || 2 + "end";
console.log(exp38);
// Output: "end"
// The expression falls back to "end" due to NaN.



// Expression 39
let exp39 = "start" && (false + 1) * 2 || 3 + 4 * "hello" + 5 && 0;
console.log(exp39);
// Output: "start"
// The result is "start" because of truthy evaluations.



// Expression 40
let exp40 = (false || "test") * 5 || 6 + (a-- && "result") * 4;
console.log(exp40);
// Output: NaN
// The result is NaN because of the invalid multiplication of strings.



// Expression 41
let exp41 = "start" && (3 + 2) * "test" + 5 || 4 * (false + 1) && "hello";
console.log(exp41);
// Output: NaN
// Multiplying "test" by 5 results in NaN.



// Expression 42
let exp42 = 1 + 2 * "end" || (false + 3) && "result" * 4 + a--;
console.log(exp42);
// Output: NaN
// "end" * a number results in NaN.



// Expression 43
let exp43 = (false && a--) || 4 * (3 + 2) && "start" + 5;
console.log(exp43);
// Output: "start5"
// The expression results in "start5".



// Expression 44
let exp44 = 3 + 2 * (true + 5) && "value" + 1 || (++a + 2) + "test";
console.log(exp44);
// Output: "value6"
// The result is "value6".



// Expression 45
let exp45 = (false || 1) + "test" && 5 + (3 * a--) || "end" + 2;
console.log(exp45);
// Output: "test"
// This results in "test" as it is the fallback.



// Expression 46
let exp46 = (2 * a-- + 4) && "test" || 3 + "hello" && (false + 1) * 5;
console.log(exp46);
// Output: "test"
// The final result is "test".



// Expression 47
let exp47 = 0 + "result" && (3 + 1) * 2 || (false + a--) * "end";
console.log(exp47);
// Output: "result"
// The result is "result".



// Expression 48
let exp48 = (false || 1) * "test" && 4 || (true + 2) * "hello" + a--;
console.log(exp48);
// Output: "hello3"
// This returns "hello3".



// Expression 49
let exp49 = (2 * 3) + "result" && 4 * (a-- + 1) || "start" + 2 + "end";
console.log(exp49);
// Output: "start2end"
// The result is "start2end".



// Expression 50
let exp50 = 32 && true - ++a && " " || "true"; // for a = 5
console.log(exp50);
// Output: "true"
// The expression falls back to "true".



// Expression 51
let exp51 = (5 + 2) * (a-- + 1) || "start" + (++a + "end") * 3;
console.log(exp51);
// Output: "start8end"
// This results in "start8end".



// Expression 52
let exp52 = (++a && 3) * "test" || 4 + "start" * (a-- + "result");
console.log(exp52);
// Output: NaN
// Multiplying a string with a number results in NaN.



// Expression 53
let exp53 = 3 + "value" * (++a + 1) || (a-- && "start") + "end";
console.log(exp53);
// Output: "valueNaN"
// "value" multiplied by NaN gives NaN.



// Expression 54
let exp54 = (a-- + 2) * "result" || (false && 5) * "test" + 4;
console.log(exp54);
// Output: NaN
// "result" multiplied by NaN results in NaN.



// Expression 55
let exp55 = "start" + 5 * (a-- + "test") || (false + 2) * "value";
console.log(exp55);
// Output: NaN
// Multiplying strings gives NaN.



// Expression 56
let exp56 = 4 * "start" + 5 || "end" + "test";
console.log(exp56);
// Output: NaN
// Multiplying strings gives NaN.



// Expression 57
let exp57 = "test" * 2 || 3 * (a++ + "start") + "end";
console.log(exp57);
// Output: NaN
// "test" multiplied by 2 results in NaN.



// Expression 58
let exp58 = (true + "start") * 2 || 3 + "result";
console.log(exp58);
// Output: NaN
// "start" multiplied by 2 gives NaN.



// Expression 59
let exp59 = 1 + "test" * 2 || 4 + (a-- + 1) + "end";
console.log(exp59);
// Output: NaN
// "test" multiplied by 2 gives NaN.



// Expression 60
let exp60 = 5 * "start" || 6 + "end";
console.log(exp60);
// Output: NaN
// Multiplying a string gives NaN.



// Expression 61
let exp61 = "end" * 2 || 3 + (a++ + 1) * "start";
console.log(exp61);
// Output: NaN
// "end" multiplied by a number results in NaN.



// Expression 62
let exp62 = "value" * 3 + 4 || 5 * "test" + "start";
console.log(exp62);
// Output: NaN
// "value" multiplied by a number gives NaN.



// Expression 63
let exp63 = (a++ + 1) * "end" || "start" + 5;
console.log(exp63);
// Output: NaN
// Multiplying a string gives NaN.



// Expression 64
let exp64 = 2 * "start" + 5 || 3 + "result";
console.log(exp64);
// Output: NaN
// "start" multiplied by a number results in NaN.



// Expression 65
let exp65 = "test" * 3 || (a-- + 1) * "value";
console.log(exp65);
// Output: NaN
// "test" multiplied by 3 gives NaN.



// Expression 66
let exp66 = (true + "test") * 2 || 3 + 5;
console.log(exp66);
// Output: NaN
// "test" multiplied by a number results in NaN.



// Expression 67
let exp67 = 3 + "test" * 2 || "value" + 1;
console.log(exp67);
// Output: NaN
// "test" multiplied by 2 gives NaN.



// Expression 68
let exp68 = 3 + 5 * "start" || "end" + "test";
console.log(exp68);
// Output: NaN
// "start" multiplied by a number results in NaN.



// Expression 69
let exp69 = "end" * 2 || 3 + "test";
console.log(exp69);
// Output: NaN
// "end" multiplied by a number gives NaN.



// Expression 70
let exp70 = 2 * "start" || "end" + 5;
console.log(exp70);
// Output: NaN
// "start" multiplied by a number gives NaN.



// Expression 71
let exp71 = "start" * 2 || 3 + "end";
console.log(exp71);
// Output: NaN
// "start" multiplied by a number results in NaN.



// Expression 72
let exp72 = "end" * 2 || "start" + 5;
console.log(exp72);
// Output: NaN
// Multiplying a string gives NaN.



// Expression 73
let exp73 = 2 + "test" * 3 || 4 + "end";
console.log(exp73);
// Output: NaN
// Multiplying a string gives NaN.



// Expression 74
let exp74 = 5 * "start" + 2 || 3 + "test";
console.log(exp74);
// Output: NaN
// Multiplying a string gives NaN.



// Expression 75
let exp75 = "test" * 2 + 1 || "end" + 2;
console.log(exp75);
// Output: NaN
// "test" multiplied by 2 gives NaN.

