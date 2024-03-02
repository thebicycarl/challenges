// You probably know the "like" system from Facebook and other social media. People can "like" posts, photos or other items. We want to create the text that should be displayed next to such an item.

// Implement a function that takes an input array, containing the names of people who like an item and returns an output string formatted nicely as shown below.


const likes = names => {
    let count = names.length;
    const likeText = [
        'no one likes this',
        `${names[0]} likes this`,
        `${names[0]} and ${names[1]} like this`,
        `${names[0]}, ${names[1]} and ${names[2]} like this`,
        `${names[0]}, ${names[1]} and ${count-2} others like this`
    ]
    if (count > 3) {
        return likeText[4]
    } else {
        return likeText[count]
    }
};

console.log(likes([])); // 'no one likes this'
console.log(likes(['Peter'])); // 'Peter likes this'
console.log(likes(['Jacob', 'Alex'])); // 'Jacob and Alex like this'
console.log(likes(['Max', 'John', 'Mark'])); // 'Max, John and Mark like this'
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max'])); // 'Alex, Jacob and 2 others like this'
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max', 'James', 'John'])); // 'Alex, Jacob and 4 others like this'