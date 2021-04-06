# 11ty-variable-automapping

- [src/_data/characters.js](src/_data/characters.js): global data file to fetch 20 characters from Rick & Morty (https://rickandmortyapi.com/api/character/)
- [src/characters/character.11ty.js](src/characters/character.11ty.js): javascript template file to generate a file (using slugify character-name) for each character. Each page created lists `name`, `gender`, `species` and `images`
- [src/characters/characters.md](src/characters/characters.md): markdown template file to generate a summary page for all the characters. The result are split into 2 pages ([/characters/page-1/](_site/characters/page-1/index.html) and [/characters/page-2](_site/characters/page-2/index.html))

