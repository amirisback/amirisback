function getReadme() {

    const quotes1 = "“The best way to predict the future is to invent it.” – Alan Kay";
    const quotes2 = "“There are only two hard things in Computer Science: cache invalidation and naming things.” – Phil Karlton";
    const quotes3 = "“I Can Do Whatever I Want Today“";
    const quotes4 = "“Object-oriented programming languages support encapsulation, thereby improving the ability of software to be reused, refined, tested, maintained, and extended. The full benefit of this support can only be realized if encapsulation is maximized during the design process.“ - Rebecca Wirfs-Brock";
    const quotes5 = "“If it hurts, do it more frequently, and bring the pain forward.” ― Jez Humble";
    const quotes6 = "“You must excuse my gruff conduct,” the watchdog said, after they’d been driving for some time, “but you see it’s traditional for watchdogs to be ferocious.” ― Robert C. Martin, Clean Architecture ";
    const quotes7 = "“Engineering is a profession that can do the job of almost all other professions.” ― Amit Kalantri, Wealth of Words";
    const quotes8 = "“People are inherently imperfect - we like to say that humans are mostly a collection of intermittent bugs. But before you can understand the bugs in your coworkers, you need to understand the bugs in yourself. We’re going to ask you to think about your own reactions, behaviors, and attitudes - and in return, we hope you gain some real insight into how to become a more efficient and successful software engineer who spends less energy dealing with people-related problems and more time writing great code.” ― Titus Winters,";
    const quotes9 = "“Software and cathedrals are much the same; first we build them, then we pray.” by Anonymous.";
    const quotes10 = "“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” by Martin Fowler.";
    const quotes11 = "“Real programmers can write assembly code in any language.” by Larry Wall.";
    const quotes12 = "“Good programmers use their brains, but good guidelines save us having to think out every case.” by Francis Glassborow.";
    const quotes13 = "“Computer programs are the most complex things that humans make” by Douglas Crockford.";
    const quotes14 = "“A language that doesn't affect the way you think about programming is not worth knowing” by Alan Perlis.";
    const quotes15 = "“A language that doesn't have everything is actually easier to program in than some that do.” by Dennis Ritchie.";
    const quotes16 = "“9 women cannot make a baby in one month.” by Fred Brooks.";
    const quotes17 = "“Adding manpower to a late software project makes it later.” by Fred Brook";
    const quotes18 = "“Adding last-minute features, whether in response to competitive pressure, as a developer’s pet feature, or on the whim of management, causes more bugs in software than almost anything else.” by John Robbins.";
    const quotes19 = "“Smart data structures and dumb code works a lot better than the other way around.” by Eric S Raymond.";
    const quotes20 = "“Design and programming are human activities; forget that and all is lost” by Bjarne Stroustrup.";
    const quotes21 = "“The wages of sin is debugging” by Ron Jeffries.";
    const quotes22 = "“If debugging is the process of removing software bugs, then programming must be the process of putting them in” by Edsger Dijkstra.";
    const quotes23 = "“To be a programmer is to develop a carefully managed relationship with error. There’s no getting around it. You either make your accommodations with failure, or the work will become intolerable.” by Ellen Ullman.";
    const quotes24 = "“Any program is only as good as it is useful.” by Linus Torvalds.";
    const quotes25 = "“Time pressure gradually corrupts an engineer’s standard of quality and perfection. It has a detrimental effect on people as well as products.” by Niklaus Wirth.";
    const quotes26 = "“Software is like sex. It’s better when it’s free.” by Linus Torvalds.";
    const quotes27 = "“The function of good software is to make the complex appear to be simple” by Grady Booch.";
    const quotes28 = "“Code should run as fast as necessary, but no faster; something important is always traded away to increase speed.” by Richard E. Pattis.";
    const quotes29 = "“The biggest issue on software teams is making sure everyone understands what everyone else is doing.” by Martin Fowler.";
    const quotes30 = "“Poor management can increase software costs more rapidly than any other factor.” by Barry Boehm.";


    const quotesArray = [
        quotes1,
        quotes2,
        quotes3,
        quotes4,
        quotes5,
        quotes6,
        quotes7,
        quotes8,
        quotes9,
        quotes10,
        quotes11,
        quotes12,
        quotes13,
        quotes14,
        quotes15,
        quotes16,
        quotes17,
        quotes18,
        quotes19,
        quotes20,
        quotes21,
        quotes22,
        quotes23,
        quotes24,
        quotes25,
        quotes26,
        quotes27,
        quotes28,
        quotes29,
        quotes30
    ];
    
    const idx = Math.floor(Math.random() * quotesArray.length)

    const imageA1 = '<img id="imageB" width="110px" height="120px" align="right" src="https://amirisback.github.io/amirisback/docs/image/bear-panda/bear-funny-dancing.gif">';
    const imageA2 = '<img id="imageB" width="110px" height="120px" align="right" src="https://amirisback.github.io/amirisback/docs/image/bear-panda/bear-funny-dancing-02.gif">';
    const imageA3 = '<img id="imageB" width="110px" height="120px" align="right" src="https://amirisback.github.io/amirisback/docs/image/bear-panda/bear-idle-position-01.gif">';
    const imageA4 = '<img id="imageB" width="110px" height="120px" align="right" src="https://amirisback.github.io/amirisback/docs/image/bear-panda/bear-idle-position-02.gif">';
    const imageA5 = '<img id="imageB" width="110px" height="120px" align="right" src="https://amirisback.github.io/amirisback/docs/image/bear-panda/bear-rope.gif">';
    const imageA6 = '<img id="imageB" width="120px" height="120px" align="right" src="https://amirisback.github.io/amirisback/docs/image/bear-panda/bear-skipping.gif">';
    const imageA7 = '<img id="imageB" width="93px" height="120px" align="right" src="https://amirisback.github.io/amirisback/docs/image/bear-panda/bear-ngambul.gif">';
    const imageA8 = '<img id="imageB" width="103px" height="120px" align="right" src="https://amirisback.github.io/amirisback/docs/image/bear-panda/bear-jalan.gif">';
    
    const imageB1 = '<img id="imageA" width="110px" height="120px" align="right" src="https://amirisback.github.io/amirisback/docs/image/bear-panda/panda-funny-dancing.gif">';
    const imageB2 = '<img id="imageA" width="110px" height="120px" align="right" src="https://amirisback.github.io/amirisback/docs/image/bear-panda/panda-funny-dancing-02.gif">';
    const imageB3 = '<img id="imageA" width="110px" height="120px" align="right" src="https://amirisback.github.io/amirisback/docs/image/bear-panda/panda-idle-position-01.gif">';
    const imageB4 = '<img id="imageA" width="110px" height="120px" align="right" src="https://amirisback.github.io/amirisback/docs/image/bear-panda/panda-idle-position-02.gif">';
    const imageB5 = '<img id="imageA" width="110px" height="120px" align="right" src="https://amirisback.github.io/amirisback/docs/image/bear-panda/panda-rope.gif">';
    const imageB6 = '<img id="imageA" width="120px" height="120px" align="right" src="https://amirisback.github.io/amirisback/docs/image/bear-panda/panda-skipping.gif">';
    const imageB7 = '<img id="imageA" width="93px" height="120px" align="right" src="https://amirisback.github.io/amirisback/docs/image/bear-panda/panda-ngambul.gif">';
    const imageB8 = '<img id="imageA" width="93px" height="120px" align="right" src="https://amirisback.github.io/amirisback/docs/image/bear-panda/panda-jalan.gif">';

    const imagesA = [
        imageA1,
        imageA2,
        imageA3,
        imageA4,
        imageA5,
        imageA6,
        imageA7,
        imageA8
    ]

    const imagesB = [
        imageB1,
        imageB2,
        imageB3,
        imageB4,
        imageB5,
        imageB6,
        imageB7,
        imageB8
    ]

    const idxImage = Math.floor(Math.random() * imagesA.length)

    return `\
# 👋🏻 Welcome To Amir's Open Source Project
[![Medium Badge](https://img.shields.io/badge/-faisalamircs-black?style=flat-square&logo=Medium&logoColor=white&link=https://medium.com/@faisalamircs)](https://medium.com/@faisalamircs)
[![Android Arsenal](https://img.shields.io/badge/Android%20Arsenal-amirisback-brightgreen.svg?style=flat-square)](https://android-arsenal.com/user/amirisback)
[![Google Badge](https://img.shields.io/badge/Google%20Dev%20Library-amirisback-orange?style=flat-square)](https://devlibrary.withgoogle.com/authors/amirisback)

#### What are Amir doing? Amir crafting some cool apps and libraries 🔨

${imagesB[idxImage]}
${imagesA[idxImage]}

- Amir's Awesome Project and Libraries - [Click Here](https://github.com/amirisback/awesome-project-catalogue)
- Kotlin Desktop Experimental - [Click Here](https://github.com/amirisback/desktop-experimental-catalgoue)
- Android Code Playground, Android Research - [Click Here](https://github.com/armorycodes)
- Android Programmer Interview Cheat Sheet - [Click Here](https://amirisback.github.io/android-programmer-interview-cheat-sheet/)

#### Project Code Sample Implementation
- Minimum MVVM ([Koin](https://github.com/InsertKoinIO/koin)) Sample - [Simple](https://github.com/amirisback/minimum-mvvm-koin), [HTTP Client](https://github.com/amirisback/minimum-mvvm-koin-network-api), [Room Database](https://github.com/amirisback/minimum-mvvm-koin-room-database)
- Minimum MVVM ([Dagger-Hilt](https://dagger.dev/hilt/gradle-setup)) Sample - [Simple](https://github.com/amirisback/minimum-mvvm-hilt), [HTTP Client](https://github.com/amirisback/minimum-mvvm-hilt-network-api), [Room Database](https://github.com/amirisback/minimum-mvvm-hilt-room-database)
- Jitpack Library Publishing Guide - [Groovy](https://github.com/amirisback/jitpack-library-groovy-guide), [Kotlin DSL](https://github.com/amirisback/jitpack-library-kotlin-dsl-guide), [Kotlin Library](https://github.com/amirisback/easy-kotlin-lib-jar) 
- Automated Build Android AAB / APK Using Github Action - [Click Here](https://github.com/amirisback/automated-build-android-app-with-github-action)

<!-- #### Support Me 💖 :rocket: -->
#### Support Me :rocket:
- Wall of Fame Angel Sponsor - [Click Here](https://amirisback.github.io/wall-of-fame-angel-sponsor/)
- Sponsors Pages - [Click Here](https://github.com/sponsors/amirisback)
- Project Open Sources - [Click Here](https://github.com/users/amirisback/projects/17)

#### Quotes For Today
> ${quotesArray[idx]}

`
}


console.log(getReadme())
