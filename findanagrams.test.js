const anagrams = require('./findanagrams')


test('Both anagrams', () =>{
    expect(anagrams('cow',"woc")).toBe('Both Strings are Anagram')

}) 

test('Both are Not anagrams', () =>{
    expect(anagrams('cow',"cbnndokdkw")).toBe('Both Strings are not Anagram')
}) 

