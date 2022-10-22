import {dataQuotes, text_link_github} from './string.js';

const idx = Math.floor(Math.random() * dataQuotes.length)

function getReadme(quotes) {
    return `\
    # 👋🏻 Welcome To Amir's Open Source Project
    [![Medium Badge](https://img.shields.io/badge/-faisalamircs-black?style=flat-square&logo=Medium&logoColor=white&link=https://medium.com/@faisalamircs)](https://medium.com/@faisalamircs)
    [![Android Arsenal](https://img.shields.io/badge/Android%20Arsenal-amirisback-brightgreen.svg?style=flat-square)](https://android-arsenal.com/user/amirisback)
    [![Google Badge](https://img.shields.io/badge/Google%20Dev%20Library-amirisback-orange?style=flat-square)](https://devlibrary.withgoogle.com/authors/amirisback)
    
    #### What are Amir doing? Amir crafting some cool apps and libraries 🔨
      
    <img width="110px" height="120px" align="right" src="https://raw.githubusercontent.com/amirisback/amirisback/master/docs/image/bear-panda/panda-funny-dancing.gif">
    <img width="110px" height="120px" align="right" src="https://raw.githubusercontent.com/amirisback/amirisback/master/docs/image/bear-panda/bear-funny-dancing.gif">
      
    - Amir's Awesome Project and Libraries - [Click Here](https://github.com/amirisback/awesome-project-catalogue)
    - Kotlin Desktop Experimental - [Click Here](https://github.com/amirisback/desktop-experimental-catalgoue)
    - Android Code Playground, Android Research - [Click Here](https://github.com/armorycodes)
    - Android Programmer Interview Cheat Sheet - [Click Here](https://amirisback.github.io/android-programmer-interview-cheat-sheet/)
    - Minimum MVVM ([Koin](https://github.com/InsertKoinIO/koin)) Sample - [Simple](https://github.com/amirisback/minimum-mvvm), [HTTP Client](https://github.com/amirisback/minimum-mvvm-network-api), [Room Database](https://github.com/amirisback/minimum-mvvm-room-database)
    - Minimum MVVM ([Dagger-Hilt](https://dagger.dev/hilt/gradle-setup)) Sample - [Simple](https://github.com/amirisback/minimum-mvvm-hilt), [HTTP Client](https://github.com/amirisback/minimum-mvvm-hilt-network-api), [Room Database](https://github.com/amirisback/minimum-mvvm-hilt-room-database)
    - Jitpack Library Publishing Guide - [Groovy](https://github.com/amirisback/jitpack-library-groovy-guide), [Kotlin DSL](https://github.com/amirisback/jitpack-library-kotlin-dsl-guide), [Kotlin Library](https://github.com/amirisback/easy-kotlin-lib-jar) 
    - Automated Build Android AAB / APK Using Github Action - [Click Here](https://github.com/amirisback/automated-build-android-app-with-github-action)
    
    <!-- #### Support Me 💖 :rocket: -->
    #### Support Me :rocket:
    - Wall of Fame Angel Sponsor - [Click Here](https://amirisback.github.io/wall-of-fame-angel-sponsor/)
    - Sponsors Pages - [Click Here](https://github.com/sponsors/amirisback)
    
    #### Quotes For Today
    > ${quotes}

    `
}


console.log(getReadme(dataQuotes[idx]))